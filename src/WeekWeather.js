import React, { useState, useEffect } from "react";
import DayCard from "./DayCard";
import axios from "axios";

export default function WeekWeather(props) {
    let [weekWeatherData, setWeekWeatherData] = useState(null);
    let [loaded, setLoaded] = useState(false);
    // console.log(props.coordinates.lat, props.coordinates.lon,);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);


    function handleResponse(response) {
        console.log(response.data);
        setWeekWeatherData(response.data.daily);
        setLoaded(true);
    }

    function load(){
        const APIKey = "0571at3f6f353aad9b4552f8eoe873f5";
        let url = `https://api.shecodes.io/weather/v1/forecast?lon=${props.coordinates.lon}&lat=${props.coordinates.lat}&key=${APIKey}`;
        axios.get(url)
            .then(handleResponse)
            .catch((error) => {
                alert(`Opps...`)
            })
    }

    if (loaded) {
        return (
            <div className="row week-weather">
                {weekWeatherData.map(function (dailyForecast, index) {
                    if (index < 5) {
                        console.log(dailyForecast);
                        return (
                            <div className="col" key={index}>
                                <DayCard data={dailyForecast} />
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
                
            </div>
        );
    }
    else {
        load();
        return null;
    }
}