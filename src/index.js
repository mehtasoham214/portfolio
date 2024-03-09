import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = document.getElementById("root");
const rootElement = createRoot(root);
rootElement.render(<App />);
