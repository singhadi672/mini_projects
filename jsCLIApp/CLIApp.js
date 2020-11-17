var readLineSync = require('readline-sync');
var chalk = require('chalk');
var score = 0;
let userName = readLineSync.question("Hi there! before we start, how about your name? ");

console.log(`Howdy ${userName}! let's start!! \n`);

var questionBank = [{
  question:"what is the name of the first marvel movie? ",
  answer:"captain america"
},
{
  question:"what is the name of the villian who appeared in first and last part? ",
  answer:"skull"
},
{
  question:"what is the name of the place nat and barten talk about they met? ",
  answer:"budapest"
},
{
  question:"what is full name of fury? ",
  answer:"nicholas j fury"
},
{
  question:"who was captain america's friend? ",
  answer:"bucky"
}];

var highscore = [{name: "Aditya Singh",score:5},
{name:"vedanth",score:5}];

function play(question,answer){

  var userAnswer = readLineSync.question(question);
  if(userAnswer.toLowerCase()===answer){
    console.log("\n correct!!! \n")
    score++;
  }
  else{
    console.log("\n Wrong!!! \n")
    console.log("correct answer is: " + answer + "\n");
  }

  console.log("current score "+ score);
  console.log("-----------------");

}

for(let i=0;i<questionBank.length;i++){
  var currentQuestion = questionBank[i];
  play(currentQuestion.question,currentQuestion.answer);
};

console.log("YAY!! YOUR TOTAL SCORE IS:",score);

var newUser = {name:userName,score:score};

highscore.push(newUser);

console.log("\n------------------");
console.log("**LEADERBOARD**");
console.log("------------------\n");
for(let i of highscore){
  console.log(i['name'] + " \t " + i['score']);
}