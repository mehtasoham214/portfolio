import React from 'react'
function scrollToSection(event, item) {
    event.preventDefault();
    const section = document.getElementById(item);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
const NavigationDots = ({active}) => (
        <div className='navigation-dots'>
            <div className="app__navigation-dots">
            {['home', 'about', 'skills', 'experience','projects', 'contact'].map((item, index) => (
                <a
                    href={`#${item}`}
                    key={item + index}
                    className="app__navigation-dot"
                    style={active === item ? { backgroundColor: '#313BAC' } : {}}
                    onClick={(event) => scrollToSection(event, item)}
                > </a>
            ))}
            </div>
        </div>
);

export default NavigationDots;
