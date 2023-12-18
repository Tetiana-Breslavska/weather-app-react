import React from "react";

export default function City(props) {
    return (
        <div className="city me-1">
            <button id={props.name} className="border-0 bg-white">{props.name}</button>
        </div>
    );
}