import '../App.css';
import React from "react";
import InputBox from "./InputBox";


function App() {

  return (
    <main >
    <div>
      <InputBox />
    </div>
    </main>
  );


}


// const cityTemp = document.getElementById("TempOut").innerHTML.substring(6)
//  if (cityTemp > 10){
//    var BackgroundImage = "url(../Assets/summer.jpg)"
//      return BackgroundImage
//  }
//  else if (cityTemp < 10){
//    var BackgroundImage = "url(../Assets/winter.jpg)"
//      return BackgroundImage
//  }
//
//
//
//  document.getElementById("cover").style.backgroundImage = BackgroundImage;


// if (document.getElementById("TempOut").innerHTML.substring(6) !== "null") {
//   const cityTemp = 100;
//   return cityTemp
// }
// else{
//   const cityTemp = 100;
//   return cityTemp
//   // const cityTemp = document.getElementById("TempOut").innerHTML.substring(6);
//   // return cityTemp

// else {
//   const cityTemp = fixed;
//   return cityTemp
// }

// console.log(currentTemp())

// function currentTemp(){
//   <InputBox />
//   const cityTemp = document.getElementById("TempOut").innerHTML.substring(6)
//   return cityTemp
// }
//
// console.log(currentTemp())


export default App;
