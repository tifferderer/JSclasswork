/*
Tiffany Ferderer
1/11/2021
count.js
version 2.0
 */

//cache elements
let submit = document.getElementById("submit");
let result = document.getElementById("result");

//When we click the button, a function happens
submit.addEventListener("click", grabNum);

//This function tests the validity of the users input
function grabNum() {
    let number = document.getElementById("num").value;

    number = parseInt(number);
    if(isNaN(number)) {
        result.classList.add("text-danger");
       result.textContent = "Please enter a number.";
    }
    else if(number <=0) {
        result.classList.add("text-danger");
        result.textContent = "Please enter a positive integer.";
    }
    else {
        //clear out old results if any
        result.classList.remove("text-danger");
        result.textContent = " ";
        //start function to print to the page
        heeHaw(number);}
}

function heeHaw(num) {
    //Set numbers 1-100
    let resulting = [];
    for(let i = 1; i <= num; i++) {
        let count = i;
        //if any of the numbers is divisible by both given numbers, replace with Hee Haw
        if(i % 3 ===0 && i% 5 === 0) {
           count = ("Hee Haw!");
       }
        //if the number is divisible by one of the numbers, replace respective words
        else if(i% 3 === 0) {
            count = ("Hee!");
        }
        else if(i % 5 === 0) {
            count = ("Haw!");
        }
        //print to HTML
        let para = document.createElement("p");
        let output = document.createTextNode("" + count);
        para.appendChild(output);

        result.appendChild(para);
    }
}
