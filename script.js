// targeting nodes using CSS-style selectors
document.querySelector("#container").style.backgroundColor = "blue";
document.querySelector("#container").style.color = "#fff";

// targeting nodes using relationship properties 
const parentNode = document.querySelector("#container");
const childNode = parentNode.querySelector(".display").style.backgroundColor = "red";



// Element creation:
/*
1. First we reference the div that already exists.
2. Then we create another div and store it in variable "newDiv".
3. Then we add a class and some text to the "newDiv".
4. Finally we append that newly created div to the already existing div. */
 
const container = document.querySelector("#container");
const newDiv = document.createElement("newDiv");
newDiv.classList.add("newDiv");

newDiv.textContent = "This div is created from the JavaScript file";

container.appendChild(newDiv)
