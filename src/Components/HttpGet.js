

function httpGet(props) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", props, false); // false for synchronous request
    xmlHttp.send(null);
    const URLArray = JSON.parse(xmlHttp.responseText)
    return URLArray;
}



export  {httpGet};
