import React from "react";

export default function BasicParameters(props) {
    console.log(props.icon);
    return (
        <div className="basic-parameters">
            <h1>
                <span className="current-city">{props.city}</span>
                <span className="current-weather-icon">
                    {
                    
                    /* <img
                        id="icon"
                        src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
                        alt={props.descrWeather}
                    /> */}
                </span>
                <span className="current-temp">   {props.temp}</span>
                <sup>
                    <button className="border-0 bg-white active" id="c-degree">℃</button>
                        
                    <span>|</span>
                    <button className="border-0 bg-white" id="f-degree">
                        ℉
                    </button>
                </sup>
            </h1>
            <p className="current-time">Saturday 22:04</p>
        </div>
    );
}