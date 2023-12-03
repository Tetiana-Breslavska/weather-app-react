import React from "react";

export default function City(props) {
    return (
        <div className="city col-2 me-1">
            <a href="#">{props.name}</a>
        </div>
    );
}