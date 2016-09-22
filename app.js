 'use strict';
 //hi
  //counting how many answers were correcte.
 var correctAnswers = 0;
 //ask user about their name.
 function funcUser() {
   var userName = prompt('What is your name ?');
   alert('Welcome to my game ' + userName + '!');
   console.log('the username is :' + userName);
 }

 //ask the user to guess if it's correct or not.
 function funcFood(){
   var food = prompt('Chaimae likes to eat spicy Snails').toLowerCase();
   if (food === 'yes' || food === 'y') {
     correctAnswers++;
     alert('Yup, it\'s crazy but it\'s true.');
     console.log('you said' + food);
   } else {
     alert('No, Chaimae loves eating Snails.');
     console.log('you said :' + food);
   }
 }

 //ask the user to guess if it's correcte or not
 function funcSweet() {
   var sweets = prompt('Is chaimae hate choclate ?').toLowerCase();
   if (sweets === 'yes' || sweets === 'y') {
     correctAnswers++;
     alert(' Yup, Chaimae hates choclate and all sweet things');
     console.log('you said:' + sweets);
   } else {
     alert('No,she hate CHOCLATE!');
     console.log('you said:' + sweets);
   }
 }

 //ask the user to guess if it's correcte or not
 function funcDog(){
   var dog = prompt('Chaimae had 12 dogs in her home ').toLowerCase();
   if (dog === 'yes' || dog === 'y') {
     correctAnswers++;
     alert('Yup, Chaimae had 12 dogs ');
     console.log('you said :' + dog);
   }else{
     alert('No,Chaimae had 12 dogs');
     console.log('you said' + dog);
   }
 }

 //ask the user to guess if it's correcte or not
 function funcBaby() {
   var baby = prompt('Chaimae has a baby').toLowerCase();
   if( baby === 'yes' || baby === 'y'){
     alert('that\'s not true ');
     console.log(' you said ' + baby);
   }else{
     correctAnswers++;
     alert('Yup!');
     console.log('you said :' + baby);
   }
 }
//the counter for the number of tries that the user can have.
 function funcCount() {
   var count = 4;
   var myAge = 24;
  //loop until the user guess my age.
   while(true) {
     count--;
     var guess = parseInt(prompt('What age am I?'));
    //checking if the input is not a number.
     if(isNaN(guess)) {
       alert('Please enter a number');
     } else if (guess === myAge) {
       correctAnswers++;
       alert('Good');
       break;
     } else if (count === 0) {
       alert('Sorry! No more tries');
       break;
     } else if (guess > myAge) {
       alert('Wo, i\'m not that old!');
     } else if (guess < myAge) {
       alert('Really, i\'m not that young.');
     } else {
       alert('Nope. Try again');
     }
   }
 }
 function funcCities(){
  //number of tries
   var counter = 6;
   //keep track of cities that I lived in.
   var cities = ['boston', 'seattle', 'orlando', 'austin'];
   var success = false;
   while(true) {
     counter--;
     if(counter === 0) {
       alert('No more tries! Sorry.');
       break;
     }
     var city = prompt('Which city have i lived in?');
     //make what the user input to be lowercase
     if(city) {
       city = city.toLowerCase();
     }
     //loop through the cities and check if the answer is correct or no and display all correct answers
     for(var i = 0; i < cities.length; i++) {
       if(city === cities[i]) {
         alert('That\'s right! ' + 'I lived in ' + cities.join(', ') + ' before');
         correctAnswers++;
         success = true;
       }
     }
     //when the answer is correct(true)stop the game
     if(success) {
       break;
     } else {
       alert('Nope, i\'ve never lived there before.');
     }
   }
 }
 funcUser();
 funcFood();
 funcSweet();
 funcDog();
 funcBaby();
 funcCount();
 funcCities();
//show the user how many correct answers that he got from the whole game.
 alert('You got ' + correctAnswers + ' out of 7 questions.');
