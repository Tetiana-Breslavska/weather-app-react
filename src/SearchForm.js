import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";

export default function SearchForm() {
    let [city, setCity] = useState("");
    let [temp, setTemp] = useState(null);
    let [wind, setWind] = useState(null);
    let [humidity, setHumidity] = useState(null);
    let [descrWeather, setDescrWeather] = useState(null);
    let [icon, setIcon] = useState("");

    function handleInput(event) {
        event.preventDefault();
        setCity(event.target.value);
    }
    function handleResponse(response) {
        console.log(response.data);
        setTemp(Math.round(response.data.main.temp));
        setWind(Math.round(response.data.wind.speed));
        setHumidity(Math.round(response.data.main.humidity));
        setDescrWeather(response.data.weather[0].description);
        setIcon(response.data.weather[0].icon);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (city) {
            console.log(city);
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c8735bb7e8e2f8d8a38c7501f3cd47d3&units=metric`;
            axios.get(url).then(handleResponse);
        }
    }

    return (
        <div className="form row mt-5">
            <form>
                <input
                    className="col-11 col-md-5 m-2 search-input"
                    type="text"
                    placeholder="Enter city"
                    onChange={handleInput}
                />
                <input
                    type="submit"
                    className="button-search col-2 m-2 btn btn-primary"
                    value="Search"
                    onClick={handleSubmit}
                />

                <button className="col-2 m-2 button-current btn btn-primary">Current</button>
            </form>
            <CurrentWeather
                city={city}
                temp={temp}
                humidity={humidity}
                wind={wind}
                descrWeather={descrWeather}
                icon={icon}
            />
        </div>
    );
}