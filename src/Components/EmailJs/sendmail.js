import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Emailkey from './emailkey';

function Sendmail(){
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(Emailkey.SERVICE_ID, Emailkey.TEMPLATE_ID, form.current, Emailkey.USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
      <input type="hidden" name="from_name" value="Siva" />
    </form>
    );
}

export default Sendmail;