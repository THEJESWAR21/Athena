import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedin, faInstagram} from "@fortawesome/free-brands-svg-icons"
import logo from './img/teaching.svg';
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import "./App.css";
//  React App code
function Contact() {
  return (
    <div className="Contact">
      <div className="container">
      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <Link to='/'>
            <Button  class="btn transparent" id="sign-up-btn"	outline color="primary">
              Contact us
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


export default Contact;
