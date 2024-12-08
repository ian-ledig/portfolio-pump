"use client"

import React, { useState } from 'react'
import Image from "next/image";
import "./contact.css";

const ContactComponent: React.FC = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!email || !subject || !message) {
          alert('Please fill in all fields');
          return;
        }
    
        try {
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, subject, message }),
          });
    
          if (response.ok) {
            alert('Message sent successfully!');
            setEmail('');
            setSubject('');
            setMessage('');
          } else {
            alert('Failed to send message.');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <div className="title title-1 font-black justify-center">Contact me_</div>
            <div className="contact">
              <div className="contact-card">
                <div className="subtitle-1 text-white">Get in touch with me</div>
                <form onSubmit={handleSubmit}>
                    <div>
                    <div className="mb-0.5">Email</div>
                    <input 
                        type="text" 
                        className="textbox w-11/12" 
                        placeholder="" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                    />
                    </div>
                    <div>
                    <div className="mb-0.5">Subject</div>
                    <input 
                        type="text" 
                        className="textbox w-11/12" 
                        placeholder=""
                        value={subject} 
                        onChange={(e) => setSubject(e.target.value)} 
                        required
                    />
                    </div>
                    <div>
                    <div className="mb-0.5">Your message</div>
                    <textarea 
                        className="textbox w-11/12 h-40" 
                        placeholder=""
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        required
                    />
                    </div>
                    <div>
                        <button type="submit" className="button-1 font-heavy">Send</button>
                    </div>
                </form>
              </div>
            </div>
        </div>
    );
};

export default ContactComponent;