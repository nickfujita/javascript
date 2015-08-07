var winner = function(user,comp){
    if((user=='rock'&&comp=='scissors')||(comp=='rock'&&user=='scissors')){
        console.log("Rock destroys scissors.");
    }else if((user=='paper'&&comp=='scissors')||(comp=='paper'&&user=='scissors')){
        console.log("Scissors cut paper.");
    }else if((user=='paper'&&comp=='rock')||(comp=='paper'&&user=='rock')){
        console.log("Paper covers rock.");
    }else{
        console.log("Draw!");
    }
};

var userChoice = prompt("Pick rock, paper, or scissors!");

var options = ['rock','paper','scissors'];

var compChoice = options[Math.floor(Math.random()*3)];

winner(userChoice,compChoice);