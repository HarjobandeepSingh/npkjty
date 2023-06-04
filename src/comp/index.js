import '../comp/ind.css';
import React, { useState } from 'react';
import axios from 'axios';
import logo from '../assets/images/logo.png'

export default function CreatePost() {
  const uri = 'http://localhost:1000/';

  function handleForm(e) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const obj = {
      userId: UserId,
      postId: postid,
      bimg: '/img/' + data.get('bimg').name,
    };

    axios
      .post(uri + 'AddCard', obj)
      .then((succ) => {
        if (succ.data === 'done') {
          alert('Data Added');
          setPostId(succ.data);
          e.target.reset();
          e.target.focus();
        }
      })
      .catch((err) => {
        // Handle error here
        console.error(err);
      });
  }

  // for image
  function uploadImage(e) {
    const datao = new FormData();
    datao.append('bimg', img);

    axios
      .post(uri + 'single', datao)
      .then((succ) => {
        if (succ.data === 'ok') {
          alert('Image Added');
          e.target.focus();
        }
      })
      .catch((err) => {
        // Handle error here
        console.error(err);
      });

    setimg2(e.target.value);
    setimg(e.target.files[0]);
  }

  const [UserId, setUserId] = useState('');
  const [postid, setPostId] = useState('');
  const [img, setimg] = useState('');
  const [img2, setimg2] = useState('');

  function handleClick() {
    localStorage.clear();
    window.location.href = '/Login';
  }

  return (
    <>
      <div className="bd">
        <nav>
        <img src={logo} />
          <ol>
            <li style={{ border: '2px solid #FFC10B' }}>
              <div onClick={handleClick}>Log Out</div>
            </li>
          </ol>
        </nav>

        <div className="create container-fluid">
          <form
            
            id="form"
            method="post"
            onSubmit={handleForm}
            encType="multipart/form-data"
          >
            <input
              type={'file'}
              name="bimg"
              placeholder="Choose Color"
              id="files"
              className="form-control"
              onChange={(e) => setimg(e.target.files[0])}
            />
            <input
              type={'submit'}
              name="bt"
              value={'Upload Image'}
              onClick={uploadImage}
            />
          </form>
        </div>
      </div>
    </>
  );
}
