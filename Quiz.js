var readlinesync=require("readline-sync")
var chalk=require("chalk")
var logupdate=require("log-update")
var username=readlinesync.question("Enter your name to play the quiz: ")
console.log("Hello "+chalk.hex("#FFFF00").underline(username)+" to 'HOW WELL DO YOU KNOW Nischay'")
console.log("Let us begin")
var score=0
function play(question,answer){
  
  var useranswer=readlinesync.question(chalk.hex("#00FFFF")(question))
  if (useranswer.toLowerCase()===answer){
    console.log(chalk.black(chalk.bgGreen('Correct,You are awarded a point!')))
    score++
  } else{
    console.log(chalk.black(chalk.bgRed("Incorrect!")))
  }
}
var questions = [{
  question: `
  Which game series would Nischay choose between:-
  a) Assassin's Creed
  b) Prince Of Persia
  c) Batman Arkham series
  d) Grand Theft Auto\n`,
  answer: "a",
},
{
  question: `Which Superhero would Nischay choose between:-
  a) Spiderman
  b) Batman
  c) Superman
  d) Iron Man\n`,
  answer: "b"
},
{
  question: `What would Nischay choose between:-
  a) Chess
  b) Carrom
  c) Ludo 
  d) Monopoly\n`,
  answer: "a"
},
{  
  question: `Which one of these food categories would Nischay like the most:-
  a) Chinese food
  b) Italian food
  c) Japanese food
  d) Indian food\n`,
  answer: "d"
},
{
  question: `What Nischay likes to do in his free time:-
  a) Read books
  b) Watch Youtube videos on his personal interests
  c) Play computer games
  d) Hangout with friends\n`,
  answer: "b"
},
{
  question:`At what age did he "actually" start watching anime:-
  a) 12
  b) 13
  c) 14
  d) 15\n`,
  answer: "c"
},
{
  question:`What was the name of the sport in which Nischay grabbed his first ever medal:-
  a) Soccer
  b) Sprint race
  c) Kho-kho
  d) Kabaddi\n`,
  answer: "b"
}
]
for (var i=0; i<questions.length;i++){
  var currentquestion=questions[i]
  play(currentquestion.question,currentquestion.answer)
}

var index=0
colors=[chalk.red("Your final score is: "+score),chalk.blue("Your final score is: "+score)]
const func =  () => {

  setInterval(() =>{
  index==0 ? (index=1):(index=0)
  logupdate(colors[index])
}, 500)
}
func()