var timer = 60;
var score=0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;

}

function makeBubble(){
    
    var clutter= "";
    
    for(var i =1 ;i<101 ; i++){
        var rn = Math.floor(Math.random()*10)
        clutter += `<div class="bubble"> ${rn} </div>`;
        
    }
    
    document.querySelector("#panelbottom").innerHTML = clutter;
}

function runTimer(){
    var timerinterval = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent= timer;
        }
        else{
            clearInterval(timerinterval);
            document.querySelector("#panelbottom").innerHTML = `<h1> Game Over </h1>`;
        }
    },1000);
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#HitVal").textContent = hitrn;
}

document.querySelector("#panelbottom").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if (clickednum=== hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }

});

makeBubble();
getNewHit();
runTimer();