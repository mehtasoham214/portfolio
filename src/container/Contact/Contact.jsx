import React, { useState } from 'react';
import { AppWrap } from '../../wrapper';
import './Contact.scss';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { username, email, message } = formData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        setLoading(true);
    }
    const contact = {
        _type: 'contact',
        name: formData.username,
        email: formData.email,
        message: formData.message,
    };

    return (
        <div className='app__Contact'>
            <h2 className="head-text">Take a coffee <span>& chat with me</span></h2>
            {!isFormSubmitted ? (
                <div className="app__Contact-form app__flex">
                <div className="app__flex">
                    <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
                </div>
                <div className="app__flex">
                    <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
                </div>
                <div>
                    <textarea
                    className="p-text"
                    placeholder="Your Message"
                    value={message}
                    name="message"
                    onChange={handleChangeInput}
                    />
                </div>
                <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
                </div>
            ) : (
                <div>
                <h3 className="head-text">
                    Thank you for getting in touch!
                </h3>
                </div>
            )}
            <div style={{bottom: '0', width:'100%', display: 'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', paddingTop:'70px'}}>
                <h4>Made by Soham Mehta</h4>
                <h4>@2024 All rights reserved</h4>
            </div>
        </div>
    );
};

export default AppWrap(Contact, 'contact');