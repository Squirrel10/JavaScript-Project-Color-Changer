
// Colors array
let colors = ['blue', 'yellow', 'black', 'brown', 'orange'];
//Get button
let button = document.getElementById('button');

//Event listener: 

button.addEventListener('click', function() {
//Randomizer function
var randomColor = colors[Math.floor(Math.random() * colors.length)]
//Math.random function takes a random number from our 'colors.length' array
//Get container:
let container = document.getElementById('container');

container.style.background = randomColor;

})