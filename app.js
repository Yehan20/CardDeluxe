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

let value=60

let date= new Date();
console.log(`${date.getMinutes()} : ${date.getSeconds()}`);
let seconds= (date.getSeconds())
let min= 2

const interval=setInterval(timer, 50);

function timer(){
    
    time.textContent=`${min} : ${seconds}`;
    seconds--;

    if(seconds===0){
      
        min--;
        seconds=59;
    }
   

    if(min===0){
        lost.play();
        console.log('fff');
        clearInterval(interval);
        
    }

   

}


let selectedCards=[];
let selectedId=[];
const winningCards=[];

function createCard(){
   
    for(let i=0; i<arrayofCards.length; i++){
        const img =document.createElement('img');
        img.setAttribute('src','images/back.png');
        img.setAttribute('data-number',i);
        img.addEventListener('click',flipCard);
        grid.appendChild(img);
      
  }
}

createCard();

function flipCard(){
    console.log('clicked');
    audio.play();
    let dataNumber = this.getAttribute('data-number'); // get the data value
    console.log(dataNumber);
    this.setAttribute('src',arrayofCards[dataNumber].src);
    selectedCards.push(arrayofCards[dataNumber].name);
    selectedId.push(dataNumber)
    if(selectedId.length===2 || selectedCards===2){
       setTimeout(checkCards,200);
    }
    
}

function checkCards(){
    let firstCard = selectedCards[0];
    let secondCard = selectedCards[1]
    let firstId = selectedId[0];
    let secondId= selectedId[1]
    let images = document.querySelectorAll('img');

    if(firstId===secondId){
        console.log('clicked the same card');
        images[firstId].setAttribute('src','images/back.png');
        images[secondId].setAttribute('src','images/back.png');
    }

    else if(firstCard===secondCard){
        console.log('mathced');
        images[firstId].setAttribute('src','images/tick.png');
        images[secondId].setAttribute('src','images/tick.png');

        //
        audioWin.play();

        //remove event listender
        images[firstId].removeEventListener('click',flipCard);
        images[secondId].removeEventListener('click',flipCard);
        
        winningCards.push(images[firstId],images[secondId]);
        score.textContent=(winningCards.length)/2;
        if((winningCards.length===arrayofCards.length)){
           gameWinner.play();
        }
    }

    else{
        console.log('not matching');
     
            images[firstId].setAttribute('src','images/back.png');
            images[secondId].setAttribute('src','images/back.png');

      

    }

    selectedId=[];
    selectedCards=[];
    
}

