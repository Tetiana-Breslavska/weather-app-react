import React, { useState } from "react";

export default function Temperature(props) {
    const [unit, setUnit] = useState("celsius");
    
    function handleCelsius(){
        setUnit("celsius");
    }

    function handleFahrenheit(){
        setUnit("fahrenheit");
    }

    if (unit === "celsius") {
        return (
            <div>
                <span>{props.temp}</span>
                <sup>
                    <button className="border-0 bg-white active fw-bolder">℃</button>
                    <span>|</span>
                    <button className="border-0 bg-white text-primary" onClick={handleFahrenheit}>℉</button>
                </sup>
            </div>
        )
    } else{
        let fahrenheitTemp =  Math.round((props.temp * 9 / 5) + 32);
        return(
            <div>
                <span className="current-temp">{fahrenheitTemp}</span>
                <sup>
                    <button className="border-0 bg-white active text-primary" onClick={handleCelsius}>℃</button>
                    <span>|</span>
                    <button className="border-0 bg-white fw-bolder">℉</button>
                </sup>
            </div>
        )
    }
}