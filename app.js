"use strict";
const body = document.querySelector("body");
const button = document.querySelector("button");

let setBg = () => {
    const pathSplitStr = window.location.pathname.split("/");
    const htmlFileName = pathSplitStr[pathSplitStr.length-1];
    let stringToken;

    if (htmlFileName == "normal.html") {
        const pool = ["grey","maroon","pink", "purple", "olive", "aqua", "chocolate", "navy"];
        const randomIndex =  Math.floor(Math.random() * pool.length);
        stringToken = pool[randomIndex];

    } else if (htmlFileName == "pool.html") {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        stringToken = `#${randomColor}`;
    }

    document.getElementById("color").innerHTML = `color is: ${stringToken}`;
    body.setAttribute('style',`background-color: ${stringToken}`);
};

button.addEventListener("click", setBg);
setBg();
