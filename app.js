// Buena suerte ! Espero que se te encianda la "bombilla"!

//function clickbulbOn() { 
 //   let bulbOn = document.getElementById("bulb");
   // bulbOn.classList.add('bulb-on');
//}

//let bulbElement = document.getElementById("bulb");
//bulbElement.addEventListener("click", clickbulbOn);

///ahora cuando pasamos el raton

//function clickbulbOn() { 
 //   let bulbOn = document.getElementById("bulb");
//    bulbOn.classList.add('bulb-on');
//}

//let bulbElement = document.getElementById("bulb");
//bulbElement.addEventListener("mouseenter", clickbulbOn);

//let bulbElement = document.getElementById("bulb");

//bulbElement.addEventListener("click", function() {
  // bulbElement.classList.toggle("bulb-on");
  //  bulbElement.classList.toggle("bulb-off");
//});

let bulbElement = document.getElementById("bulb");

bulbElement.addEventListener("mouseenter", function() {
    bulbElement.classList.toggle("bulb-on");
    bulbElement.classList.toggle("bulb-off");
});