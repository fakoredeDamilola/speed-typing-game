window.addEventListener('load',init)


//global variables

//availabe levels
const levels={
    easy:5,
    medium:3,
    hard:2,
}

//to change the level
const currentLevel =levels.easy
let time =currentLevel;
let score=0;
//to check if the game is going on or not i.e true when playing
let isPlaying;

//DOM ELEMENTS
const wordInput=document.querySelector('#word-input');
const currentWord=document.querySelector('#current-word');
const scoreDisplay=document.querySelector('#score');
const timeDisplay=document.querySelector('#time');
const message=document.querySelector('#message');
const seconds=document.querySelector('#seconds');


//WORDS ARRAYS
const words=[
    'dammy',
    'dayo',
    'stubborn',
    'farmer',
    'shola',
    'segun',
    'echo',
    'sibling',
    'master',
    'space',
    'laughter',
    'definition',
    'developer',
    'joke',
    'runaway',
    'cocktail',
    'hero',
    'revolver',
    'javascript',
    'python',
    'html',
    'css',
    'java',
    'index',
    'whatsapp',
    'data',
    'information',
    'access'
];

//initialize game
// this below is a function expression i.e unlike function declaration e.g 
// const init=function(){}
// you have to call it below the function but for function expression, you can write it below and call it above
function init(){
   //load word from array
   showWord(words)
   //start matching on word input
   wordInput.addEventListener('input',startMatch)
   //call countdown every second
   setInterval(countdown,1000);
   //check game status
   setInterval(checkStatus,50)
}

//start match
function startMatch(){
   if(matchWords()){
isPlaying=true;
//1 plus whatever the time is
time=currentLevel + 1;
showWord(words);
wordInput.value =''
score++
   } 

   //if score is -1, display 0
   if(score===-1){
    scoreDisplay.innerHTML=0 
   }else{
    scoreDisplay.innerHTML=score   
   }
   
}

//match currentword to wordinput
function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML='Correct!!!'
        return true;
    }else{
        message.innerHTML='';
        return false;
    }
}

//Pick and show random word
function showWord(words){
    //generate random index
    // Math.floor to round down
    const randIndex=Math.floor(Math.random() * words.length)
    //output current word
    currentWord.innerHTML = words[randIndex]
}

//countdown timer
function countdown(){
    //make sure time is not run out
    if(time>0){
        time--;
    }else if(time===0){
        //game is over
        isPlaying = false
    }
    timeDisplay.innerHTML=time
}

//check game status
function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'Game Over!!!'
        //no score to restart the game
        score = -1;
    }
}