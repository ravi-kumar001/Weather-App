import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function InfoBox({ info }) {
  let IMG_URL = process.env.IMG_URL;
  let RAINY_URL = process.env.RAINY_URL;
  let HOT_URL = process.env.HOT_URL;
  let COLD_URL = process.env.COLD_URL;
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.Humidity > 80
              ? RAINY_URL
              : info.Temprature > 15
              ? HOT_URL
              : COLD_URL
          }
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Tempreture = {info.Temprature}&deg;C</p>
            <p>Humidity = {info.Humidity}&deg;C</p>
            <p>Min Temp = {info.Min_Temp}&deg;C</p>
            <p>Max Temp = {info.Max_Temp}&deg;C</p>
            <p>Pressure = {info.Pressure}&deg;C</p>
            <p>
              The weather can be described as {info.weather} and feels like{" "}
              {info.feels_like}&deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
