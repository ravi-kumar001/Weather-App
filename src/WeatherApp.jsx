import { useState } from "react";
import InfoBox from "./InfoBox";
import Search from "./Search";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function WeatherApp() {
    let [weatherInfo, setweatherInfo] = useState(
        {
            city: "Delhi",
            Temprature: 25,
            Humidity: 47,
            Min_Temp: 25.05,
            Max_Temp: 25.05,
            Pressure: 23,
            weather: "haze",
            feels_like: 26
        }
    )
    let updateWeather = (result) => {
        setweatherInfo(result);
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Weather App by Ravi</h1>
            <Search updateWeather={updateWeather} />
            <br />
            {weatherInfo.Humidity > 80 ? <ThunderstormIcon /> : weatherInfo.Temprature > 15 ? <WbSunnyIcon /> : <AcUnitIcon />}
            <br /><br />
            <InfoBox info={weatherInfo} />
        </div>
    )
}