import React, {useState} from "react";
import "./Sign.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { faFacebook, faTwitter, faLinkedin, faInstagram} from "@fortawesome/free-brands-svg-icons"
import teaching from './img/teaching.svg';
import fire, {auth, generateUserDocument} from '../Config/fire';



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

      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState(null);
      const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
        event.preventDefault();
        try{
          const {user} = await auth.createUserWithEmailAndPassword(email, password);
          generateUserDocument(user, {userName});
        }
        catch(error){
          setError('Error Signing up with email and password');
        }
    
        setEmail("");
        setPassword("");
        setUserName("");
      };
      const [userName, setUserName] = useState("");
      const signInWithEmailAndPasswordHandler = (event, email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
          setError("Error signing in with password and email!");
          console.error("Error signing in with password and email", error);
        });
      };

      const onChangeHandler = event => {
        const { name, value } = event.currentTarget;
        if (name === "userEmail") {
          setEmail(value);
        } else if (name === "userPassword") {
          setPassword(value);
        } else if (name === "userName") {
          setUserName(value);
        }
      };
    
  

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
                <input type="text" placeholder="Username"   type="email"
            name="userEmail"
            value = {email}
            id="userEmail"
            onChange = {(event) => onChangeHandler(event)} ></input>
              </div>
              <div className="input-field">
                <i>
                <FontAwesomeIcon icon={faLock} />
                </i>
                <input type="password" placeholder="Password"type="password"
            name="userPassword"
            value = {password}
            id="userPassword"
            onChange = {(event) => onChangeHandler(event)}></input>
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
          <h2 className="title">Sign up</h2>           
              <div className="input-field">
                <i>
                <FontAwesomeIcon icon={faUser} />
                </i>
                <input type="text" placeholder="Username"  type="text"
            name="Username"
            value={userName}
            id="userName"
            onChange={event => onChangeHandler(event)}></input>
              </div>
              <div className="input-field">
                <i>
                <FontAwesomeIcon icon={faUser} />
                </i>
                <input type="text" placeholder="Email"        type="email"
            name="userEmail"
            value={email}
            id="userEmail"
            onChange={event => onChangeHandler(event)}></input>
              </div>
              <div className="input-field">
                <i>
                <FontAwesomeIcon icon={faLock} />
                </i>
                <input type="password" placeholder="Password"   type="password"
            className="mt-1 mb-3 p-1 w-full"
            name="userPassword"
            value={password}
            id="userPassword"
            onChange={event => onChangeHandler(event)}></input>
              </div>
              <input type="submit" value="Login" className="btn solid" href="Contactus"      onClick={event => {
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}
     >
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

      <div className="panels-container">
        
        <div className="panel left-panel">
 

          <div className="content">
          <div class="wrapper">
              <nav>
                <ul>
                  <li><a href="#">Home</a></li>
                 <li><a href="Contact">Contact</a></li>                
                </ul>
              </nav>
            </div>
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <Button outline color="primary" className="btn transparent" id="sign-up-btn" onClick={handleClick}>
              Sign up
              </Button>{' '}
             
          </div>
          <img src={teaching} className="image" alt="" />
        </div>
        <div className="panel right-panel">
         
          <div className="content">
            <div class="wrapper">
              <nav>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </nav>
            </div>
             <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <Button outline color="primary" className="btn transparent" id="sign-in-btn" onClick={handleClick}>
              Sign in
              </Button>{' '}
           
          </div>
          <img src={teaching} className="image" alt="" />
        </div>
      </div>
    </div>
    </div>

  );
}

export default Sign;