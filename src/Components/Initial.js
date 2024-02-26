
function Initial(Temp){
    // let myVar = null;
    // myVar = document.getElementById("TempOut");
    // if (myVar){
    //     const temp = document.getElementById("TempOut").innerHTML.substring(6)
    //     console.log(temp)
    // console.log(Temp)
        var element = document.getElementById("cover");
            // const classlist = element.classList;
        if (element) {
            element.className = '';
            if (Temp > 10) {
                // element.classList.toggle("coverimgwinter");
                element.classList.add("coverimgsummer");
                document.getElementById("Title").innerHTML = "It's Hot Out There!"
                // console.log(element.classList)
            } else if (Temp < 10) {
                // element.classList.remove("coverimgsummer");
                document.getElementById("Title").innerHTML = "Freezing Weather!"
                element.classList.add("coverimgwinter");
                // console.log(element.classList)
            }

        }
        // console.log(Temp)


}

export  {Initial};


