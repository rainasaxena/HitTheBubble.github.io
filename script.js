var timer=60;
var score=0;
var hitrn=0;

function makeBubble(){
    let count_bubble="";
for(let i=0;i<240;i++){
    let num= Math.floor(Math.random()*10);
    count_bubble+=`<div class="bubble">${num}</div>`;
}

document.querySelector("#pbtm").innerHTML=count_bubble;
}

makeBubble();


function runTimer(){
    var timerint=setInterval(function() {
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent=timer;
        }
        else{

            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;
        }
    }, 1000);
}

runTimer();


function getNewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}

getNewHit();

function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
// increaseScore();

//jispe click kroge wo element par event raise hog, aur event listener na milne par event element ke parent par listerner dhudhega wahan bhi na milne par event parent ke parent ke parent pe listener dhundhega

document.querySelector("#pbtm").addEventListener("click",function(dets){
    let clickedNum=Number(dets.target.textContent);
    if(clickedNum===hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
});


