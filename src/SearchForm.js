import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";

export default function SearchForm() {
    const [city, setCity] = useState();
    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleInput(event) {
        event.preventDefault();
        setCity(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function search() {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c8735bb7e8e2f8d8a38c7501f3cd47d3&units=metric`;
        axios.get(url).then(handleResponse);
    }

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            cityFromResponse: response.data.name,
            temp: Math.round(response.data.main.temp),
            wind: Math.round(response.data.wind.speed),
            humidity: Math.round(response.data.main.humidity),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            date: new Date(response.data.dt * 1000),
        })
    }

    function handlePosition(position) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c8735bb7e8e2f8d8a38c7501f3cd47d3&units=metric`;
        axios.get(apiUrl).then(handleResponse);

    }

    function handleSubmitCurrent() {
        navigator.geolocation.getCurrentPosition(handlePosition);
    }

    if (weatherData.ready) {
        return (
            <div className="form row mt-5">
                <form onSubmit={handleSubmit}>
                    <input
                        className="col-8 col-md-5 m-2 search-input"
                        type="text"
                        placeholder="Enter city"
                        onChange={handleInput}
                    />
                    <input
                        type="submit"
                        className="button-search col-2 m-2 btn btn-primary"
                        value="Search"
                    />
                    <button className="col-2 m-2 button-current btn btn-primary" onClick={handleSubmitCurrent}>Current</button>
                </form>
                <CurrentWeather data={weatherData} />
            </div>
        );
    }
    else {
        handleSubmitCurrent();
        return (
            "Loading..."
        )
    }
}