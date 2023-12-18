import React from "react";
import "./styles.css";

import Weather from "./Weather";


export default function App() {    
    return (
        <div className="container">
            <div className=" App container">
                <Weather />
            </div>
            <footer className="mt-3">
                <a href="https://github.com/Tetiana-Breslavska/weather-app-react" target="_blanc">Open-source code, by Tetiana Breslavska</a>
            </footer>
        </div>
    );
}
