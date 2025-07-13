import SearchBox from "./searchBox";
import InfoBox from "./infoBox";
import { useState } from "react";
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 16.06,
        humidity: 48,
        temp: 17.05,
        tempMax: 17.05,
        tempMin: 17.05,
        weather: "haze"
    });
    let updateInfo = (newInfo) => { // re rendering of the component with new information this function we trigger in the SearchBox component
        setWeatherInfo(newInfo);
    }

    return (
        <div className="container" style={{textAlign: "center", marginLeft: "600px" }}>
            <h2>Weather app </h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo}/>
            
        </div>
    );
}