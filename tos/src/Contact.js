import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Phone from './phone.png';
import Email from './email.png';
import Address from './map.png';
import"./contact.css"




export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7kblip8', 'template_nxgsm77', form.current, 'user_UsKpU1LC35GgcP6xwzSP2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  const handleClick = event => {
    alert("Thank you for Contacting Us We will get back to you z.");
    event.preventDefault();
    
  };
 
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              Whatsapp Number: +1 (425) 247-3143
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              megagravity@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              245 King Street, Touterie Victoria 8520 Australia
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch with us through email and we will respond to ASAP
          </p>
          <form ref={form} onSubmit={handleClick}>
            <input  type="text" placeholder="Name" name="user_name" />
            <input  type="text" placeholder="Reason Of  Contact" name="user_subject" />
            <input  type="text" placeholder="Email" name="user_email" />
            <textarea  rows="5" placeholder="Message" name="message" />
            <button onClick={handleClick,sendEmail} >Submit</button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs