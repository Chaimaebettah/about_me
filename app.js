var name = prompt("what is your name?");
console.log('The user\'s name is ' + name);
var age = prompt('How old are you?');
  while(isNaN(parseInt(age))){
    age = prompt('How old are you?');
  }
console.log('The user\'s age is ' + age);
var hobby = prompt('What is your hobby?');
console.log('The user\'s hobby is  ' + hobby);
var place = prompt('what is your favorite place so far?');
console.log('the user\'s favorite place is :' +place)
alert('Im'+ ' '+ name + ',' + ' '+ age  + ' ' + 'years old '+ 'I like '+ hobby + ' ' + 'my favorite place is ' +place);
