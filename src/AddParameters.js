import React from "react";

export default function AddParameters(props) {
    return (
        <div className="add-parameters">
            <p className="current-weather-desc">{props.descrWeather}</p>
            <p className="current-humidity">Humidity: {props.humidity}%</p>
            <p className="current-wind">Wind: {props.wind} m/s</p>
        </div>
    );
}
