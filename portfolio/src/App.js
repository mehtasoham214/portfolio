import React from "react";
import { About, Footer, Header, Skills, Experience, Works } from "./container";
import { Navbar } from "./components";
import { HashLoader } from "react-spinners";
import { useState, useEffect } from "react";
import "./App.scss";
import { motion } from "framer-motion";

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
                <div>
                    <Navbar />
                    <Header />
                    <About />
                    <Skills />
                    <Experience />
                    <Works />
                    <Footer />
                </div>
            )}
        </>
    );
};

export default App;
