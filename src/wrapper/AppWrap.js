import React from "react";
import { NavigationDots, SocialMedia } from "../components";
import "./AppWrap.scss";
const AppWrap = (Component, idName) =>
    function HOC() {
        return (
            <div id={idName} className={`app__container`}>
                <SocialMedia />
                <div className="app__wrapper app__flex">
                    <Component />
                </div>
                <NavigationDots active={idName} />
            </div>
        );
    };

export default AppWrap;
