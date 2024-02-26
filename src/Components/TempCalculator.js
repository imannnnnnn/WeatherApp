import React from "react";
import {httpGet} from "./HttpGet";
import '../App.css';

function TempCalculator(props){

    // console.log(props)
        const api2 ={
    key : "2909deba483819991492ef2bb8fd04af",
    base : "https://api.openweathermap.org/data/2.5/weather?lat="
}
        const Entry2 = api2.base + props.latitude + "&lon=" + props.longitude + "&appid=" + api2.key + "&units=metric";
        const weatherData = {  nam :httpGet(Entry2).name,
                                    tem : httpGet(Entry2).main.temp,
                                    feelslike: httpGet(Entry2).main.feels_like,
                                    cloud : httpGet(Entry2).clouds.all,
                                    visibil: httpGet(Entry2).visibility,
                                    wind : httpGet(Entry2).wind.speed}

        return    weatherData
            }
export  {TempCalculator};
