import React from "react";
import City from "./City";

export default function CitiesList() {

    return (
        <div className="row citiesList" >
            <City name="Zaporizhzhia" />
            <City name="Lviv" />
            <City name="Sydney" />
            <City name="Kyiv" />
            <City name="Paris" />
        </div>
    );
}
