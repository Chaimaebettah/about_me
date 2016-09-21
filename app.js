//I use prompt to ask the user some questions.
'use strict';
var guess = prompt('do you want to play a guessing game with me? say Yes to start');
if ((guess.toLowerCase() === 'yes') || (guess.toLowerCase() === 'y')) {  
  console.log('The user said ' + guess);
    var food = prompt('my favorite food is Snails, Yes or No?');  
    console.log("I like snails")
    if (food.toLowerCase() === 'yes') {    
        alert('Yup, it\'s crazy but it\'s true.');  
    } else {    
        alert('No, I love eating Snails.');  
    }
} else {  
    alert('bye ');
}

var age = prompt('guess how old I am?');
console.log('my age is 24 ')
if (age < '20') {  
    alert('Ow,im not that young, I\'m 24 years old!');
} else if ((age >= '20') && (age <= '25')) {  
    alert('you are close, but Im 24 years old!');
} else {
    alert("Im not that old, I\'m 24 years old!")
}

var language = prompt(" my native language is Darija, Yes or No");
console.log('my native language is Darija');
if (language.toLowerCase() === 'yes') {
    alert(" Yes that\'s true, Darija is a Moroccan dialect of arabic.")
} else {
    alert("Nope, it\'s  Darija")
}
var siblings = prompt("How many siblings do I have?");
console.log("i have two sisters");
if (siblings === '2') {
    alert("That\'s right, I have two sisters.")
} else {
    alert("Nope, I have two sisters.");
}
