$(document).ready(function() {
alert("test");

});

var counter = 0;
function countClick() {
  counter = counter + 1;
  }


function beginTimer() {
  setTimeout(function() { 
    document.getElementById("results").innerHTML = ("You clicked " + counter + " Faces!");
     }, 10000);

}

/* Javascript below not working properly, added jQuery to do all the functionality 
much easier. 

var counter = 0;

//start button to begin setTimeout
var start = document.getElementById("starter");
start.addEventListener("click", countdown);


//timer function, expires at 20 seconds and reports total of counter function
function countdown() {
  start.setAttribute("class", "hidden");
  setTimeout(function countandgive()
    { 
    alert("Time is up, you clicked " +counter+ " SNL Faces!");
     
     }, 20000);

var images = document.getElementsByTagName("img");
for (i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function() {
    if (this.getAttribute("data-state") === "on") {
    counter += 1;
    this.setAttribute("data-state", "off");
   } else {
    console.log("no count");
   }
   
  });

}*/