var readLineSync = require('readline-sync');
var chalk = require('chalk');
const gradient = require('gradient-string');
var Table = require('cli-table');

var heading = [chalk`{bold.bgCyan.black NAME}`,chalk`{bold.bgCyan.black SCORE}`];

var score = 0;
var count =0;
var counter =0;
var index= -1;
let userName = readLineSync.question("Hi there! before we start, how about your name? ");

const modes = [chalk`{bold.yellowBright Instructions}`,chalk`{bold.blueBright Play Game!!}`,chalk`{bold.greenBright View Leaderboard!!!}`];

function getUserChoice(){
index = readLineSync.keyInSelect(modes,null,{cancel:chalk`{bold.magentaBright Exit the game}`});
if(index==0){
  instructions();
  getUserChoice();
  }else if(index==2){
    leaderboard();
    getUserChoice();
  }else if(index==1){
    console.log("\n");
    playGame();
    getUserChoice();
  }
  else{
    console.log(chalk`\nokay......{bold.red Exiting...}`);
  }
}

console.log(chalk`Howdy {green.bold ${userName}}! let's start!! \n`);

console.log(gradient.rainbow('MARVEL CINEMATIC UNIVERSE QUIZ!!! \n'));


var questionBank = [
{
  question:chalk`What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?
  a. 2005
  b. 2008
  c. 2010
  d. 2002\n
{magentaBright your answer: }`,
  answer:`b`
},
{
  question:chalk`What is the name of Thor’s hammer?
  a. Vanir
  b. Aesir
  c. Mjolnir
  d. Norn\n
{magentaBright your answer: }`,
  answer:`c`
},
{
  question:chalk`In the Incredible Hulk, what does Tony tell Thaddeus Ross at the end of the film?
  a. That he wants to study The Hulk
  b. That he knows about S.H.I.E.L.D.
  c. That they are putting a team together
  d. That Thaddeus owes him money\n
{magentaBright your answer: }`,
  answer:`c`
},
{
  question:chalk`What is Captain America’s shield made of?
  a. Adamantium
  b. Vibranium
  c. Promethium
  d. Carbonadium\n
{magentaBright your answer: }`,
  answer:`b`
},
{
  question:chalk`The Flerkens are a race of extremely dangerous aliens that resembles what?
  a. Cats
  b. Ducks
  c. Reptiles
  d. Raccoons\n
{magentaBright your answer: }`,
  answer:`a`
},
{
  question:chalk`What is the alien race Loki sends to invade Earth in The Avengers?
  a. The Chitauri
  b. The Skrulls
  c. The Kree
  d. The Flerkens\n
{magentaBright your answer: }`,
  answer:`a`
},
{
  question:chalk`What is the real name of the Black Panther?
  a. T’Challa
  b. M’Baku
  c. N’Jadaka
  d. N’Jobu\n
{magentaBright your answer: }`,
  answer:`a`
},
{
  question:chalk`Who was the last holder of the {blue Space Stone} before Thanos claims it for his Infinity Gauntlet?
  a. Thor
  b. Loki
  c. The Collector
  d. Tony Stark\n
{magentaBright your answer: }`,
  answer:`b`
},
{
  question:chalk`What fake name does Natasha use when she first meets Tony?
  a. Natalia Romanoff
  b. Nicole Rohan
  c. Naya Rabe
  d. Natalie Rushman\n
{magentaBright your answer: }`,
  answer:`d`
},
{
  question:chalk`About which city do Hawkeye and Black Widow often reminisce?
  a. Budapest
  b. Prague
  c. Istanbul
  d. Sokovia\n
{magentaBright your answer: }`,
  answer:`a`
},
{
  question:chalk`What song does Baby Groot dance to at the end of the first Guardian of the Galaxy?
  a. ‘Cherry Bomb’ – The Runaways
  b. ‘Ain’t No Mountain High Enough’ – Marvin Gaye & Tammi Terrell
  c. ‘I Want You Back’ – The Jackson 5
  d. ‘Hooked On A Feeling’ – Voidoid\n
{magentaBright your answer: }`,
  answer:`c`
},
{
  question:chalk`What landmark does Peter Parker rescue his classmates from in Spider-Man: Homecoming?
  a. Statue of Liberty
  b. Golden Gate Bridge
  c. Mount Rushmore
  d. Washington Monument\n
{magentaBright your answer: }`,
  answer:`d`
},
{
  question:chalk`Who is Black Panther’s sister?
  a. Ramonda
  b. Nakia
  c. Okoye
  d. Shuri\n
{magentaBright your answer: }`,
  answer:`d`
},
{
  question:chalk`Where does Peggy tell Steve she wants to meet him for a dance, before he plunges into the ice?
  a. The Cotton Club
  b. The Stork Club
  c. El Morocco
  d. The Copacabana\n
{magentaBright your answer: }`,
  answer:`b`
},
{
  question:chalk`What is the name of the little boy Tony befriends while stranded in the Iron Man 3?
  a. Harry
  b. Henry
  c. Harley
  d. Holden\n
{magentaBright your answer: }`,
  answer:`c`
},
];

var highscore = [{name:"vedanth",score:2},{name: "Aditya Singh",score:5}
];

function leaderboard(){
  var table = new Table({
    chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
         , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
         , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
         , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
  });
  table.push(heading);
  console.log("\n------------------");
  console.log(gradient.rainbow('**LEADERBOARD**'));
  console.log("------------------\n");

  for(let i of highscore){
  table.push([i['name'], i['score']]);
  } 
  console.log(table.toString());
}


function instructions(){

  console.log("\n------------------");
  console.log(gradient.rainbow('**INSTRUCTIONS**'));
  console.log("------------------\n");
  console.log(chalk`  {bold.blue 1. There are 10 questions.}
  {bold.red 2. Each questions carry one point each.}
  {bold.green 3. for every 3 correct answer streak and above there is a 2x multiplier that will increase the points of each question by 2.}
  {bold.blue 4. for every 6 correct answer streak and above there is a 3x multiplier that will increase the points of each question by 3.}
  {bold.red 5. THERE IS NO PENALTY FOR WRONG ANSWER!!.}
  
  {bold.green BEST OF LUCK!!!!}`);
}

function play(question,answer){

  var userAnswer = readLineSync.keyIn(question);
  let regex = /[A-Da-d]/g;
  if(userAnswer.match(regex)){
  if(userAnswer.toLowerCase()===answer){
    console.log(chalk`\n{green.bold correct!!!}\n`);
    score++;
    counter++;
    if(counter>6){
      score+=2;
      console.log(gradient.instagram("AWESOME!! 3x multipiler initiated!!"));
    }
    else if(counter>3){
      score++;
      console.log(gradient.instagram("WOW!! 2x multipiler initiated!!"));
    }
  }
  else{
    console.log(chalk`\n{red.bold Wrong!!!}\n`)
    console.log("correct answer is: " + chalk`{bold.green ${answer}}` + "\n");
    counter=0;
  }

  console.log("current score "+ chalk`{yellow.bold ${score}}`);
  console.log(chalk`\n{black.bold -----------------}`);
  }else{
    console.log(chalk`\n{bold.red invalid option..Please select relevant option!!\n}`);
    play(question,answer);
  }
}



getUserChoice();

function playGame(){
  console.log("\n------------------");
  console.log(gradient.rainbow('**START!!**'));
  console.log("------------------\n");
  for(let i=0;i<questionBank.length;i++){
    var currentQuestion = questionBank[i];
    play(currentQuestion.question,currentQuestion.answer);
  };


  console.log("YOUR TOTAL SCORE IS:",score);

  var maxscore = highscore[0].score;
  for(let element of highscore){
    if(maxscore<element['score']){
     maxscore = element['score'];
   }
  }
  

  if(score>maxscore){
    console.log(gradient.fruit('\nCONGRATS!! YOU BROKE THE HIGH SCORE!! \n'));
    console.log(gradient.fruit('\nPlease send the screenshot of leaderboard to creator to add your score to the table!!\n'));
   var newUser = {name:userName,score:score};
    highscore.push(newUser);
  }
  else{
    console.log(gradient.fruit('\nOOPS! BETTER LUCK NEXT TIME!! \n'));
  }

  leaderboard();
  score=0;
}