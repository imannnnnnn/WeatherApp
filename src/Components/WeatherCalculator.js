import React from "react";
import {TempCalculator} from "./TempCalculator";
import {httpGet} from "./HttpGet";

function WeatherCalculator(location){
    console.log(location)
        const api ={
                                            key : "2909deba483819991492ef2bb8fd04af",
                                            base : "http://api.openweathermap.org/geo/1.0/direct?"
                                          }
        const EntryURL = api.base + "q=" + location + "&limit=5&appid=" + api.key;
        const latitude = (httpGet(EntryURL)[0].lat)
        const longitude = (httpGet(EntryURL)[0].lon)
        const Geo = {latitude,longitude}
        const TempData = TempCalculator(Geo)
        return(TempData)
}
export  {WeatherCalculator};



