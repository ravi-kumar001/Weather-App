import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Search.css";
import { useState } from "react";


export default function Search({ updateWeather }) {
  let API_URL = process.env.API_URL;
  let API_KEY = process.env.API_KEY
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  let [isLoading, setIsLoading] = useState(false);

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let fetchData = async () => {
    setIsLoading(true);
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        city: jsonResponse.name,
        feels_like: jsonResponse.main.feels_like,
        Humidity: jsonResponse.main.humidity,
        Pressure: jsonResponse.main.pressure,
        Temprature: jsonResponse.main.temp,
        Max_Temp: jsonResponse.main.temp_max,
        Min_Temp: jsonResponse.main.temp_min,
      };
      setIsLoading(false);
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };
  let handleSumbit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let data = await fetchData();
      updateWeather(data);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="searchLogic">
      <h3 style={{fontFamily : 'sans-serif'}}>Search for the Weather!</h3>
      <form onSubmit={handleSumbit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button type="submit" variant="contained">
          Search
        </Button>
        {isLoading && <p>Loading...</p>}
        <h3 style={{ color: "red" }}>
          {error && "No information about this such place! "}
        </h3>
      </form>
    </div>
  );
}
