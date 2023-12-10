import React from "react";
import BasicParameters from "./BasicParameters";
import AddParameters from "./AddParameters";

export default function CurrentWeather(props) {
    return (
        <div className="current-weather d-flex justify-content-evenly">
            <BasicParameters data={props.data} />
            <AddParameters data = {props.data} />
        </div>
    );
}
