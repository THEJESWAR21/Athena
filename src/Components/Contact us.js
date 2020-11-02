import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedin, faInstagram} from "@fortawesome/free-brands-svg-icons"
import logo from './img/teaching.svg';
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import "./Contact.css";
//  React App code
function Sign() {


  return (
    <div className="Sign">
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="" className="sign-in-form">
              <h2 className="title">Contact Us</h2> 
                        
              <div className="input-field">
                <i>
                <FontAwesomeIcon icon={faEnvelope} />
                </i>
                <input type="text" placeholder="Email"></input>
              </div>
              <div className="input-field">
                <i>
                <FontAwesomeIcon icon={faPhone} />
                </i>
                <input type="password" placeholder="Password"></input>
              </div>
              <div class="formgroup" id="message-form">
    <textarea id="message" name="message" placeholder="Your Name, message"></textarea>
</div>
              <input type="submit" value="Send" className="btn solid" >
              </input>
              <p className="social-text">Social Platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
               </form>


              
               
               
          </div>
        </div>

        <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <Link to="/">
             <Button  class="btn transparent" id="sign-up-btn"	outline color="primary">
              Sign-in
            </Button>{''}
            </Link>
          </div>
          <img src={logo} alt="Logo" className="image"/>
        </div>
       
      </div>
    </div>
        </div>
  );
}


export default Sign;
