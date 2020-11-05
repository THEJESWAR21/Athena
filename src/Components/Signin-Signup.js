import React from "react";
import "./Sign.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedin, faInstagram} from "@fortawesome/free-brands-svg-icons"
import teaching from './img/teaching.svg';

//  React App code
function Sign() {

    function handleClick(e) {
        const sign_in_btn = document.querySelector("#sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".container");
        e.preventDefault();
        sign_up_btn.addEventListener("click", () => {
            container.classList.add("sign-up-mode");
          });
          
          sign_in_btn.addEventListener("click", () => {
            container.classList.remove("sign-up-mode");
          });
          
      }

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

          <form action="#" className="sign-up-form">
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

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" id="sign-up-btn" onClick={handleClick} >
              Sign up
            </button>
          </div>
          <img src={teaching} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" id="sign-in-btn" onClick={handleClick}>
              Sign in
            </button>
          </div>
          <img src={teaching} className="image" alt="" />
        </div>
      </div>
    </div>
    </div>

  );
}

export default Sign;