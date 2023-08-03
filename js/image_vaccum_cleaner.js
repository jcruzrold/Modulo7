/* NOTA: PARA QUE FUNCIONE ES NECESARIO LITE-SERVER */
let makeHttpObject = () => {
    if("XMLHttpRequest" in window) {
        return new XMLHttpRequest();
    }
    if("ActiveXObject" in window) {
        return new ActiveXObject("Msxml2.XMLHTTP");
    }
}

let imageVaccumCleaner = (htmlCode) => {
    const REGEXP_IMG_TAG = /<img\s*[sS][rR][cC]\s*\=\s*\".+?\"\s*>/g;
    const REGEXP_URL = /[sS][rR][cC]\s*\=\s*\"(.+?)\"/;
    let imagesTags = htmlCode.match(REGEXP_IMG_TAG);
    let imageElements = [];
    let urls = [];

    imagesTags.forEach(image => {
        imageElements = image.match(REGEXP_URL);
        urls.push(imageElements[1]);
    });

    return urls;
} 

let generateLinks = (urls) => {
    let linkObject;
    let textNode;
    let newLine;

    urls.forEach(url => {
        linkObject = document.createElement("a");
        linkObject.href = url;
        textNode = document.createTextNode(url);
        linkObject.appendChild(textNode);
        newLine = document.createElement("br");
        document.getElementById("main_parragraph").appendChild(linkObject);
        document.getElementById("main_parragraph").appendChild(newLine);
    });
}

window.onload = () => {
    let request = makeHttpObject();
    let urls = [];

    request.open("GET", "./series.html", true);
    request.send(null);
    request.onreadystatechange = () => {
        if (request.readyState == 4) {
            urls=imageVaccumCleaner(request.responseText);
            generateLinks(urls);
        }
    };
}