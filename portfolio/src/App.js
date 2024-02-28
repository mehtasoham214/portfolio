import React from "react";
import {
    About,
    Footer,
    Header,
    Skills,
    Testimonials,
    Works,
} from "./container";
import { Navbar } from "./components";

const App = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <About />
            <Skills />
            <Works />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default App;
