import React from "react"; 
import { Link } from "react-router-dom";
import heroimg from '../assets/images/hero img.jpg';
import logo from '../assets/images/logo.png'
import herovid from '../assets/videos/rayquaza-flying-in-the-sky-pokemon-moewalls.com.mp4';
import { Application } from '@splinetool/runtime';
import "../App.css";




export default function Home(){
    return(
        <>
    <nav>
        <img src={logo} />
        <ol>
            <li><Link to="/Login">Login Now</Link></li>
            <li style={{border:'2px solid #FFC10B'}}><Link to="/register">Create Account</Link></li>
        </ol>
    </nav>
        <div className="HeroSection">
            <video autoPlay muted loop  width={'100%'} height={'auto'}>
                <source src={herovid} type="video/mp4" />
                <source src={herovid} type="video/webm" />
                Your browser does not support the video tag.
            </video>
        <div className="bg-video__overlay"></div>
        <div className="herotextk">
        
        <div className="main" style={{lineHeight:"70px"}}><span>See Your Cards in a</span> <div style={{textAlign:'center'}}>New Light</div>
        <h3 style={{margin:'10px 0px 0px 140px'}}><Link to="/index">Authenticate Now</Link></h3> 
        </div> 
        
            </div>
        
        </div>

        </>
    );
}