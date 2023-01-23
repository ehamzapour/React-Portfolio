import React from 'react';
import './contact.scss';
import { useState } from 'react';


function Contact() {

    const [message, setMessage] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }


    return (
      <div className='contact' id='contact'>
        <div className='right'>
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Email'/>
                <input type='text' placeholder='Name'/>
                <textarea placeholder='Please type in your message!'></textarea>
                <button type='submit'>Send</button>
                {message && <span>Thank you! I'll be in touch soon.</span>}
            </form>
        </div>
      </div>
    );
  }
export default Contact;
