import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
            city: "Delhi",
            feelslike: 24.84,
            tempMin: 25.05,
            tempMax: 25.05,
            weather: "haze",
            temp: 25.05,
            humidity: 47,
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return(
        <div>
            <h2>Weather App by Mohit</h2>
            <SearchBox updateInfo = {updateInfo} />
            <InfoBox info = {weatherInfo} />
        </div>
    )
}