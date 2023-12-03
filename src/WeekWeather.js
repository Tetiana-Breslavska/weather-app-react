import React from "react";
import DayCard from "./DayCard";

export default function WeekWeather() {
    return (
        <div className="row week-weather">
            <DayCard name="Monday" />
            <DayCard name="Tuesday" />
            <DayCard name="Wednesday" />
            <DayCard name="Thursday" />
            <DayCard name="Friday" />
        </div>
    );
}