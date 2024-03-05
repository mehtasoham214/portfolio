import React from 'react'

const NavigationDots = ({active}) => (
        <div className='navigation-dots'>
            <div className="app__navigation-dots">
            {['home', 'about', 'skills', 'experience','projects', 'contact'].map((item, index) => (
                <a
                    href={`#${item}`}
                    key={item + index}
                    className="app__navigation-dot"
                    style={active === item ? { backgroundColor: '#313BAC' } : {}}
                > </a>
            ))}
            </div>
        </div>
);

export default NavigationDots;
