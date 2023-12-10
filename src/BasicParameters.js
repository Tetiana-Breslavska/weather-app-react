
import React from "react";
import Date from './Date';
import Temperature from './Temperature';

export default function BasicParameters(props) {
    
    return (
        <div className="basic-parameters">
            <h1>
                <span className="current-city">{props.data.cityFromResponse}</span>
                <span className="current-weather-icon">
                    <img
                        id="icon"
                        src={`https://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
                        alt={props.data.description}
                    /> 
                </span>
                <Temperature temp={props.data.temp} />
            </h1>
            <Date dateFormat= {props.data.date} />
        </div>
    );
}