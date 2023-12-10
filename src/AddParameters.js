import React from "react";

export default function AddParameters(props) {
    return (
        <div className="add-parameters">
            <p className="current-weather-desc">{props.data.description}</p>
            <p className="current-humidity">Humidity: {props.data.humidity}%</p>
            <p className="current-wind">Wind: {props.data.wind} m/s</p>
        </div>
    );
}
