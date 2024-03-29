import React from "react";
import { About, Contact, Header, Skills, Experience } from "./container";
import { Navbar } from "./components";
import { HashLoader } from "react-spinners";
import { useState, useEffect } from "react";
import "./App.scss";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const override = {
    display: "block",
    margin: "0 auto",
};

const App = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2500);
    }, []);
    return (
        <>
            {loading ? (
                <div className="loading">
                    <motion.div
                        initial={{ x: -70 }}
                        animate={{ x: 0 }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        <HashLoader
                            color="#3945c2"
                            loading={loading}
                            cssOverride={override}
                            size={90}
                            aria-label="Ring Spinner"
                            data-testid="ring-spinner"
                        />
                    </motion.div>
                </div>
            ) : (
                <div className="app__home">
                    <Navbar />
                    <Header />
                    <About />
                    <Skills />
                    <Experience />
                    <Contact />
                    <ToastContainer />
                </div>
            )}
        </>
    );
};

export default App;
