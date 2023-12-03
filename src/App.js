import React from "react";
import "./styles.css";
import CitiesList from "./CitiesList";
// import CurrentWeather from "./CurrentWeather";
import SearchForm from "./SearchForm";
import WeekWeather from "./WeekWeather";

export default function App() {
    return (
        <div className="App container">
            <div className="container">
                <CitiesList />
                <SearchForm />
                <WeekWeather />
            </div>
        </div>
    );
}
