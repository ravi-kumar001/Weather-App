import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({ info }) {
    let IMG_URL = "https://images.unsplash.com/photo-1566352207769-3a591a2c9567?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdlYXRoZXIlMjBmb3JlY2FzdHxlbnwwfHwwfHx8MA%3D%3D";
    let RAINY_URL = "https://images.unsplash.com/photo-1537210249814-b9a10a161ae4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL = "https://images.unsplash.com/photo-1612119276551-be9efb8ea36a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.Humidity > 80 ? RAINY_URL : info.Temprature > 15 ? HOT_URL : COLD_URL}
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
                        <p>The weather can be described as {info.weather} and feels like {info.feels_like}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}