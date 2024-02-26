import React, {useState} from "react";
// import WeatherCalculator from "./WeatherCalculator";
import '../App.css';
import {Initial} from "./Initial";
import {WeatherCalculator} from "./WeatherCalculator";


export function inputExtract(){
         return document.getElementById("message").value;
}



function InputBox(){

    const [location, setLocation] = useState();
    const handleClick = () => setLocation(inputExtract)
    function first(){
        if (location){
            const currentTemp =  WeatherCalculator (location)
            return currentTemp
        }
        else {
            const weatherData = {  nam : "",
                tem : "",
                feelslike: "",
                cloud : "",
                visibil: "",
                wind : ""}
            return weatherData
        }
    }
    const currentTemp = first();
    Initial(currentTemp.tem)

    return(
        <section className="coverinitial" id="cover" >
            <div  className="tb">
            <div className="td">
                <input
                    className="blinking-cursor"
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Search..."
                    autoComplete="off"
                />
            </div>
            <div className="td" id="s-cover">
                <button id="inputbutton" onClick={handleClick}>
                    <div id="s-circle"></div>
                    <span></span>
                </button>
            </div>
            </div>
                <div className="pt-serif-regular">
                    <h1 id="Title">{}</h1>
                    <h2>{"City Name :" + currentTemp.nam}</h2>
                    <h2 id="TempOut">{"Temp :" + currentTemp.tem}</h2>
                    <h2>{"Feels Like :" + currentTemp.feelslike}</h2>
                    <h2>{"Wind Speed :" + currentTemp.wind}</h2>
                    <h2>{"Cloud :" + currentTemp.cloud}</h2>
                    <h2>{"Visibility :" + currentTemp.visibil}</h2>
                </div>
        </section>
    )
}

export default InputBox;


