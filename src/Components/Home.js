import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedin, faInstagram} from "@fortawesome/free-brands-svg-icons"
import logo from './img/teaching.svg';
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import "./Signin.css";
//  React App code
function Sign() {


  return (
    <div className="Sign">
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="" className="sign-in-form">
              <h2 className="title">Sign in</h2>           
              <div className="input-field">
                <i>
                <FontAwesomeIcon icon={faUser} />
                </i>
                <input type="text" placeholder="Username"></input>
              </div>
              <div className="input-field">
                <i>
                <FontAwesomeIcon icon={faLock} />
                </i>
                <input type="password" placeholder="Password"></input>
              </div>
              <input type="submit" value="Login" className="btn solid" href="Contactus">
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
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <Link to='/Contact'>
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


export default Sign;
