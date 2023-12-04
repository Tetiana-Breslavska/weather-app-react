import React from "react";
import "./styles.css";
import CitiesList from "./CitiesList";
// import CurrentWeather from "./CurrentWeather";
import SearchForm from "./SearchForm";
import WeekWeather from "./WeekWeather";

export default function App() {
    return (
        <div className="container">
            <div className=" App container">
                <CitiesList />
                <SearchForm />
                <WeekWeather />
            </div>
            <p className="mt-3">
                <a href="https://github.com/Tetiana-Breslavska/weather-app-react" target="_blanc">Open-source code, by Tetiana Breslavska</a>
            </p>
        </div>
    );
}
