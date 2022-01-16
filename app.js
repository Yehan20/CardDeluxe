const arrayofCards=[
    {
        src:'images/1.png',
        name:'ace'
    },
    {
        src:'images/1.png',
        name:'ace'
    },

    {
        src:'images/2.png',
        name:'two'
    },
    {
        src:'images/2.png',
        name:'two'
    },

    {
        src:'images/3.png',
        name:'three'
    },
    {
        src:'images/3.png',
        name:'three'
    },

    {
        src:'images/4.png',
        name:'four'
    },
    {
        src:'images/4.png',
        name:'four'
    },


    {
        src:'images/5.png',
        name:'five'
    },
    {
        src:'images/5.png',
        name:'five'
    },


    {
        src:'images/6.png',
        name:'six'
    },
    {
        src:'images/6.png',
        name:'six'
    },


    {
        src:'images/7.png',
        name:'seven'
    },
    {
        src:'images/7.png',
        name:'seven'
    },

    {
        src:'images/8.png',
        name:'eight'
    },
    {
        src:'images/8.png',
        name:'eight'
    },


    {
        src:'images/9.png',
        name:'nine'
    },
    {
        src:'images/9.png',
        name:'nine'
    },

    {
        src:'images/10.png',
        name:'ten'
    },
    {
        src:'images/10.png',
        name:'ten'
    },

    {
        src:'images/j.png',
        name:'jack'
    },
    {
        src:'images/j.png',
        name:'jack'
    },

    {
        src:'images/q.jpg',
        name:'queen'
    },
    {
        src:'images/q.jpg',
        name:'queen'
    },

    {
        src:'images/k.png',
        name:'king'
    },
    {
        src:'images/k.png',
        name:'king'
    },

    {
        src:'images/j.jpg',
        name:'joker'
    },
    {
        src:'images/j.jpg',
        name:'joker'
    }
   

]

// assinging variabls
const grid = document.querySelector('.grid');
const score= document.querySelector('.score');
const audio = document.querySelector('#audio');
const audioWin = document.querySelector('#audio-win');
const gameWinner = document.querySelector('#audio-winner')
const time = document.querySelector('.timer')
const lost= document.querySelector('#loose')


//arrays to store the matching cards and winning cards
let selectedCards=[];
let selectedId=[];
const winningCards=[];







let min;
//buttons and menus
const cardMenu=document.querySelector('.card__menu');
const easyBtn = document.querySelector('#easy');
const mediumBtn =document.querySelector('#medium');
const hardBtn =document.querySelector('#hard');
const loadingBar= document.querySelector('.innerBar');
loadingBar.style.background='orange';
loadingBar.style.width=`99%`;
let width=100;



// assinging time
let seconds= 60;
let interVal;



// loading event listeners

loadAll(); // loading all event listeners
// satrt the clock
newGame(); // load a new game


function loadAll(){
    hardBtn.addEventListener('click',hardGame);
    mediumBtn.addEventListener('click',mediumGame);
    easyBtn.addEventListener('click',easyGame);
    
}



//defefining the functions of the game levels
function easyGame(){
    interVal=setInterval(timer, 100); 
    easyBtn.setAttribute('data-number',6)
    cardMenu.style.display='none';
    min= easyBtn.getAttribute('data-number')
    console.log(min);
    t=(Number(7)*60);
}

function mediumGame(){
    interVal=setInterval(timer, 200); 
    mediumBtn.setAttribute('data-number',4)
    cardMenu.style.display='none';
    min= mediumBtn.getAttribute('data-number')
    console.log(min);
    t=(Number(5)*60);
}

function hardGame(){
    interVal=setInterval(timer, 1000); 
    hardBtn.setAttribute('data-number',2)
    cardMenu.style.display='none';
    min= hardBtn.getAttribute('data-number')
    console.log(min);
    t=(Number(3)*60);
}





// defining the new game functions
function newGame(){
   
    for(let i=0; i<arrayofCards.length; i++){

        const img =document.createElement('img');

        img.setAttribute('src','images/back.png');
        img.setAttribute('data-number',i); // adding numbers to all images
        img.addEventListener('click',flipCard);
        grid.appendChild(img);
      
  }
}



function flipCard(){
    
    audio.play();
    let dataNumber = this.getAttribute('data-number'); // get the data value of the current clicked image


    this.setAttribute('src',arrayofCards[dataNumber].src); // chaning the back image to the front image of thar card

    selectedCards.push(arrayofCards[dataNumber].name); // adding the name of that card and id to the respective arrays
    selectedId.push(dataNumber)

   
    
    if(selectedId.length===2 || selectedCards===2){ // when we select two cards 
       setTimeout(checkCards,200);
    }
    
}

function checkCards(){
    
    //assingin variables to compare the two cards 
    let firstCard = selectedCards[0];
    let secondCard = selectedCards[1]
    let firstId = selectedId[0];
    let secondId= selectedId[1]
    let images = document.querySelectorAll('img');

    if(firstId===secondId){ // check if clicked the same card
        console.log('clicked the same card');
        images[firstId].setAttribute('src','images/back.png');
        images[secondId].setAttribute('src','images/back.png');
    }

    else if(firstCard===secondCard){ // if any matches
        console.log('mathced');
        images[firstId].setAttribute('src','images/transparent.png');
        images[secondId].setAttribute('src','images/transparent.png');

        //
        audioWin.play();

        //remove event listender
        images[firstId].removeEventListener('click',flipCard);
        images[secondId].removeEventListener('click',flipCard);
        
        //add to the winning array
        winningCards.push(images[firstId],images[secondId]);

        score.textContent=(winningCards.length)/2;

        if((winningCards.length===arrayofCards.length)){
           wonThegame();
        }
    }

    else{
        console.log('not matching');
     
            images[firstId].setAttribute('src','images/back.png');
            images[secondId].setAttribute('src','images/back.png');

      

    }
    
    // next clean the array and ready for another comparison between two cards
    selectedId=[];
    selectedCards=[];
    
}

let t;

function timer(){
   
    time.textContent=`${min} : ${seconds}`;
    seconds--;
    
    t--;
    console.log(t);
    width=width-(width/t);
    loadingBar.style.width=`${width}% `;


    if(seconds===0){

        min--;
        seconds=59;    
    }

    if(min===-1){
        setTimeout(lostThegame,200)
            
    }

}


//possible results 

function wonThegame(){

    gameWinner.play();

    clearInterval(interVal);


    document.querySelector('#gameWon').style.display='block';
    const playAgain = document.querySelector('#play-again-w');
    playAgain.addEventListener('click',()=>{
        document.querySelector('#gameWon').style.display='none';
        window.location.reload();
       
    })
    
}

function lostThegame(){
    lost.play();
    clearInterval(interVal);


    document.querySelector('#gameOver').style.display='block';

    const playAgain = document.querySelector('#play-again');
    playAgain.addEventListener('click',()=>{
    document.querySelector('#gameOver').style.display='none';
    window.location.reload();
   
  } )

}







