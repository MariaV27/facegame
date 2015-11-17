var timer;
var secondcount = 20;

function countdown() {
  start.setAttribute("class", "hidden");
  setTimeout(function()
  {
    alert("Time's up! You clicked" + count+ "HEY ARNOLD FACES!");
  }, 20000);
  starttime();
}

function addEvents(){
  for(var i = 0; i   < document.getElementsByClassName("face").length; i++){
    document.getElementsByClassName("face")[i].addEventlistenet("click", counter)
  }
}
// Will add clicks to each image


document.getElementById("start").addEventlistener("click", start);
//click event for the start button

function startTimer(){
  secondsleft = 20
}