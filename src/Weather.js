import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";
import CitiesList from "./CitiesList";
import WeekWeather from "./WeekWeather";

export default function Weather() {

    const [city, setCity] = useState();
    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleInput(event) {
        event.preventDefault();
        setCity((event.target.value).trim().toLowerCase());
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();

    }

    function search() {
        let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=0571at3f6f353aad9b4552f8eoe873f5&units=metric`;
        axios.get(url)
            .then(handleResponse)
            // .catch((error) => {
            //     alert(`Sorry, we don't know the weather for ${city}, try going to https://www.google.com/search?q=weather+${city}`)
            // });
    }

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            coord:{
                lat: response.data.coordinates.latitude,
                lon: response.data.coordinates.longitude
            },
            cityFromResponse: response.data.city,
            temp: Math.round(response.data.temperature.current),
            wind: Math.round(response.data.wind.speed),
            humidity: Math.round(response.data.temperature.humidity),
            description: response.data.condition.description,
            iconUrl: response.data.condition.icon_url,
            date: new Date(response.data.time * 1000),
        })
    }

    function handlePosition(position) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        const APIKey = "0571at3f6f353aad9b4552f8eoe873f5";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${APIKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

    }

    function handleSubmitCurrent() {
        navigator.geolocation.getCurrentPosition(handlePosition);
    }

    if (weatherData.ready) {
        return (
            <div>

                <CitiesList />
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
                    <WeekWeather coordinates={weatherData.coord}/>
                </div>
            </div>
        );
    }
    else {
        handleSubmitCurrent();
        return "Loading...";
            

        
    }
}