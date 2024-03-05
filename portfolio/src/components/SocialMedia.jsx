import React from 'react';
import { BsLinkedin, BsGithub, BsEnvelopeAt } from "react-icons/bs";


const SocialMedia = () => {
    return (
        <div className="social-media">
            <a href="https://www.linkedin.com/in/mehtasoham214/" target="_blank" rel="noreferrer">
                <div>
                    <BsLinkedin />
                </div>
            </a>
            <a href="https://github.com/mehtasoham214" target="_blank" rel="noreferrer">
                <div>
                    <BsGithub />
                </div>
            </a>
            <a href="mailto:mehtasoham214@gmail.com" target="_blank" rel="noreferrer">
                <div>
                    <BsEnvelopeAt />
                </div>
            </a>
        </div>
    )
}

export default SocialMedia
