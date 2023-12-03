import React from "react";

export default function City(props) {
    return (
        <div className="city col-2 me-1">
            <button className="border-0 bg-white">{props.name}</button>
        </div>
    );
}