import React from "react";
import "./Contact.css";
import {Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faComment} from '@fortawesome/free-solid-svg-icons'

//  React App code
function Contact() {

  return (
   <div className="wrapper">
      <div className="nav">
        <div className="left">
          
        </div>
        <div className="right">
          <ul>
          <li><a href="/">Sign</a></li>    
          </ul>
        </div>
      </div>  
      <div className="header">
        <h1>contact us</h1>
        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
      </div>
      <div class="form">
      <Form>
      <div className="input-field">
                <i>
                <FontAwesomeIcon icon={faUser} />
                </i>
                <input type="text" placeholder="Name"></input>
              </div>
              <div className="input-field">
                <i>
                <FontAwesomeIcon icon={faEnvelope} />
                </i>
                <input type="Message" placeholder="E-mail"></input>
              </div>
              <div className="input-field2">
                <i>
                <FontAwesomeIcon icon={faComment}  />
                </i>
                <input type="textarea" placeholder="Message"></input>
                              </div>
              <input type="submit" value="Send" className="btn solid" href="Contactus">
              </input>
  </Form>
      </div>
      </div>
 
  );
}


export default Contact;