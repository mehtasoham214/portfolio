import React, { useState } from 'react';
import { AppWrap } from '../../wrapper';
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Valid from './Valid';
import './Contact.scss';

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({ username: '', email: '', contactVal: '', message: '' });
    const { username, email, contactVal, message } = formData;
    let formInfo = {
        username: "Your Name",
        email: "Your Email",
        contactVal: "Your Contact",
        message: "Your Message",
    }

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        setLoading(true);
        formInfo = {
            username: formData.username,
            email: formData.email,
            contactVal: formData.contactVal,
            message: formData.message,
        };
        sendEmail(formInfo);
    }

    const sendEmail = (filledForm) => { 
        const formErrors = Valid(formInfo);
        if (formErrors !== "All Good") {
            let errorMessage = "Please fill in all the required fields: ";
            errorMessage += Object.values(formErrors).join(", ");
            errorMessage = errorMessage.slice(0, -2) + ". ✍🏻";
            toast.error(errorMessage, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setLoading(false);
            return;
        }
        console.log(FormData);
        const serviceId = `${process.env.REACT_APP_SERVICE_ID}`;
        const templateId = `${process.env.REACT_APP_TEMPLATE_ID}`;
        const publicKey = `${process.env.REACT_APP_PUBLIC_KEY}`;
        if (!serviceId || !templateId || !publicKey) {
            console.error(
                "EmailJS configuration missing. Check your environment variables."
            );
            setLoading(false);
            return;
        }

        emailjs.send(serviceId, templateId, filledForm, { 
                publicKey: publicKey,
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                    toast.success(
                        `Thank you for reaching out. We will be in touch shortly. 🌟`,
                        {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        }
                    );
                    setFormData({
                        username: "",
                        email: "",
                        contactVal:"",
                        message: "",
                    });
                    setLoading(false);
                },
                (error) => {
                    console.log("FAILED...");
                    toast.error(
                        "Oops! Something went wrong. Please try again.☹",
                        {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        }
                    );
                    setLoading(false);
                }
            );
    };

    //Code for Email End
    return (
        <div className='app__Contact'>
            <h2 className="head-text">Take a coffee <span>& chat with me</span></h2>
            <div className="app__Contact-form app__flex">
                <div className="app__flex">
                    <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} required/>
                </div>
                <div className="app__flex">
                    <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
                </div>
                <div className="app__flex">
                    <input
                        className="p-text"
                        type="tel"
                        minLength="10"
                        maxLength="10"
                        min="1000000000"
                        pattern="[0-9]*"
                        placeholder="Your Contact"
                        name="contactVal"
                        value={contactVal}
                        onChange={handleChangeInput}
                        required
                    />
                </div>
                <div>
                    <textarea
                    className="p-text"
                    placeholder="Your Message"
                    value={message}
                    name="message"
                    onChange={handleChangeInput}
                    required
                    />
                </div>
                <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
            </div>
            <div style={{bottom: '0', width:'100%', display: 'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', paddingTop:'70px'}}>
                <h4>Made by Soham Mehta</h4>
                <h4>@2024 All rights reserved</h4>
            </div>
        </div>
    );
};

export default AppWrap(Contact, 'contact');