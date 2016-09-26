 'use strict';
  //counting how many answers were correcte.
 var correctAnswers = 0;
 //ask user about their name.
 var name = ''; //eslint-disable-line
 function userName() {
   name = prompt('What is your name ?');
   alert('Welcome to my game ' + name + '!');
   console.log('the username is :' + name);
 }
//array of questions and answers and the console.log.
 var arrData = [
   ['Does Chaimae likes to eat spicy Snails?','Yup, it\'s crazy but it\'s true.','No, Chaimae loves eating Snails.',' said :'],
   ['Does chaimae hate chocolate?','Yup, Chaimae hates chocolate and all sweet things','No,she hate CHOCOLATE!',' said :'],
   ['Chaimae had 12 dogs in her home ','Yup, Chaimae had 12 dogs ','No,Chaimae had 12 dogs',' said :'],
   ['Chaimae has a baby','that\'s not true ','Yup!',' said :'],
   ['has chaimae ever butchered a sheep?','Yeah she does','No,She does',' said :']
 ];

 function askYesNoQuestion(questionData) {
   var input = prompt(questionData[0]).toLowerCase();
   if (input === 'yes' || input === 'y') {
     correctAnswers++;
     alert(questionData[1]);
   } else {
     alert(questionData[2]);
   }
   console.log(name + ' ' + questionData[3] + ' ' + input);
 }




//the counter for the number of tries that the user can have.
 function guessAge() {
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


 function guessCities(){
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
     cities.forEach(function(value){
       if(city === value) {
         alert('That\'s right! ' + 'I lived in ' + cities.join(', ') + ' before');
         correctAnswers++;
         success = true;
       }
     });
     //when the answer is correct(true)stop the game
     if(success) {
       break;
     } else {
       alert('Nope, i\'ve never lived there before.');
     }
   }
 }

//loop through the question and put them into the questions ol.
 var questionsElement =  document.getElementById('questions');
 for (var x = 0; x < arrData.length; x++) {
   questionsElement.innerHTML += '<li>' + arrData[x][0] + '</li>';
 }

 setTimeout(function(){
   userName();
   //looping through the array and get the data.
   for (var i = 0; i < arrData.length; i++) {
     askYesNoQuestion(arrData[i]);
   }
   guessAge();
   guessCities();
    //show the user how many correct answers that he got from the whole game.
   alert('You got ' + correctAnswers + ' out of 7 questions.');
 }, 1000);
