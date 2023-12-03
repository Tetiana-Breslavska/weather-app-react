import React from "react";

export default function DayCard(props) {
    return (
        <div className=" col-11 col-sm-5 col-lg-2 card me-3 mb-1 p-0">
            <div className="card-body text-center">
                <div className="card-icon">
                    <img
                        className="img-fluid"
                        src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
                        alt="moderate rain"
                    />
                </div>
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">
                    <span className="max">10 ℃</span>
                    <span className="min">5 ℃</span>
                </p>
                <div className="btn btn-primary button" id="button-1">
                    More details
                </div>
            </div>
        </div>
    );
}
