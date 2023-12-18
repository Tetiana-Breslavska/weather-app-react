import React from "react";

export default function DayCard(props) {
    console.log(props.data);
    function day() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

        return days[day];

    }
    function temperature(temp) {
        return Math.round(temp);

    }
    // dayName: response.data.daily[0].time,
    // iconURL: response.data.daily[0].condition.icon_url,
    // description: response.data.daily[0].condition.description,
    // minTemp: response.data.daily[0].temperature.minimum,
    // maxTemp: response.data.daily[0].temperature.maximum,
    // humidity: response.data.daily[0].temperature.humidity,
    // wind: response.data.daily[0].wind.speed,


    return (
        <div className=" col card me-3 mb-1 p-0">
            <div className="card-body text-center">
                <div className="card-icon">
                    <img
                        className="img-fluid"
                        src= {props.data.condition.icon_url}
                        alt={props.data.condition.description}
                    />
                </div>
                <h5 className="card-title">{day()}</h5>
                <p className="card-text">
                    <span className="min">{temperature(props.data.temperature.minimum)}℃  </span>
                    <span className="max">{temperature(props.data.temperature.maximum)}℃</span>
                </p>
                <div className="btn btn-primary button" id="button-1">
                    More details
                </div>
            </div>
        </div>
    );
}
