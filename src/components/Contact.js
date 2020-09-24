import React from 'react';

import '../styles/Contact.css';

function Contact() {
    return (
        <div className="contact-container">
          <span className='container-title'>Contact us:</span>
          <div className='contact-form'>
            <div id='sect1'>
              <span>Contact us and we will get back to you within 24 hours.</span>
              <span>
                <i className='fas fa-map-marker-alt'></i>
                Bloomington, IN
              </span>
              <span>
                <i className='fas fa-mobile-alt'></i>
                (847) 814 1964
              </span>
              <span>
                <i className='far fa-envelope'></i>
                j.weickert32@gmail.com
              </span>
            </div>
    
            <div id='sect2'>
              <span>
                  Contact
              </span>
    
              <input type="text" placeholder="email address" className="input-field"/>
              <textarea name="" id="" cols="30" rows="10" placeholder="comment"></textarea>
              <button className="contact-btn">Send</button>
            </div>
          </div>
        </div>
      )
}

export default Contact
