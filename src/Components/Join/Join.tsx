import React, { useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    
    if (form.current) {
      emailjs
        .sendForm('service_8i8tt92', 'template_8pg5lfq', form.current, 'Eh7dqku33FfInPC0u')
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.error('FAILED...', error);
          }
        );
    }
  };


  

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span>READY TO</span>
          <span className="stroke-text">LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US</span>
        </div>
      </div>


      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input type="email" name="User_email" placeholder="Enter your email address" required />
          <button type="submit" className="btn btn-j">Join now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
