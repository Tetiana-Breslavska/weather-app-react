import React from "react";

export default function Date(props){
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[(props.dateFormat).getDay()];
    const hours = (props.dateFormat.getHours() < 10) ? `0${props.dateFormat.getHours()}` : `${props.dateFormat.getHours()}`;
    const minutes = (props.dateFormat.getMinutes() < 10) ? `0${props.dateFormat.getMinutes()}` : `${props.dateFormat.getMinutes()}`;
    
    return(
        <p className="current-time">{day} {hours}:{minutes}</p>
    )
}