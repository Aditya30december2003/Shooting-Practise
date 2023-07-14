let container=document.querySelector('.container');
let card=document.querySelectorAll('.square')
let skull=document.querySelector('.skull')
let result=document.querySelector('.result')
let timer=document.querySelector('.timer')
let tleft=60;
let score=0;
let skullId;
let timerId=null;
function cardDisplay(){
     card.forEach((square)=>{
        square.classList.remove('skull')
     })

     let imgId=card[Math.floor(Math.random()*card.length)]
     imgId.classList.add('skull')
      skullId=imgId.getAttribute('id');
}
cardDisplay();

card.forEach((square)=>{
    square.addEventListener('click',(e)=>{
           let clickedId=e.currentTarget.getAttribute('id');
           if(skullId==clickedId){
                  score++;
                  result.textContent=score;
           }
    })
})

function timeLeft(){
    tleft--;
    timer.textContent=tleft;
    if(tleft==0){
        clearInterval(timeLeftId);
        clearInterval(timerId);
        alert("Game Over!!! You have scored- "+ score+" points")

    }
}

let timeLeftId=setInterval(timeLeft,1000);


function moveTarget(){
   timerId=setInterval(cardDisplay,700)
}

moveTarget()