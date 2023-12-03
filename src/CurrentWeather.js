import React from "react";
import BasicParameters from "./BasicParameters";
import AddParameters from "./AddParameters";

export default function CurrentWeather(props) {
    return (
        <div className="current-weather d-flex justify-content-evenly">
            <BasicParameters city={props.city} temp={props.temp} icon={props.icon} />
            <AddParameters
                humidity={props.humidity}
                wind={props.wind}
                descrWeather={props.descrWeather}
            />
        </div>
    );
}
