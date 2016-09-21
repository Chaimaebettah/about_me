//I use prompt to ask the user some questions.
var guess = prompt('do you want to play a guessing game with me? say Yes to start');
if ((guess.toLowerCase() === 'yes') || (guess.toLowerCase() === 'y')) {  
    var food = prompt('what my favorite food do you think from these two? Snails or Sushi?');  
    if (food.toLowerCase() === 'snails') {    
        alert('Yup, it\'s crazy but it\'s true.');  
    } else {    
        alert('No, I love eating Snails.');  
    }
} else {  
    alert('bye ');
}

var age = prompt('guess how old I am?');
if (age < '20') {  
    alert('Ow,im not that young, I\'m 24 years old!');
} else if ((age >= '20') && (age <= '25')) {  
    alert('you are close, but Im 24 years old!');
} else {
    alert("Im not that old, I\'m 24 years old!")
}

var language = prompt("of these two, which is my native language? Arabic or Darija?");
if (language.toLowerCase() === 'darija') {
    alert(" Yes that\'s true, Darija is a Moroccan dialect of arabic.")
} else {
    alert("Nope, it\'s  Darija")
}
var siblings = prompt("How many siblings do I have?");
if (siblings === '2') {
    alert("That\'s right, I have two sisters.")
} else {
    alert("Nope, I have two sisters.");
}
