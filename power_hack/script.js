var skip = document.getElementById("skip");
var score = document.getElementById("score");
var total = document.getElementById("total");
var countdown = document.getElementById("countdown");

var count = 0;
var scoreCount = 0;
var  duration = 0;
var qSet = document.querySelectorAll('.q_set');
var qAns = document.querySelectorAll('.q_set .q_ans input');

skip.addEventListener('click', function(){
   step();
   duration = 10
})

qAns.forEach ( function(qAnsSingle) {
    qAnsSingle.addEventListener('click', function(){
        setTimeout(function(){
            step();
            duration = 10
        },500)

        var valid = this.getAttribute ('valid');
        if(valid == 'valid'){
            scoreCount +=20;
            score.innerHTML = scoreCount;
            total.innerHTML = scoreCount;
        }
        else{
            scoreCount -=20;
            score.innerHTML = scoreCount;
            total.innerHTML = scoreCount;
        }
    })
});

function step (){
    count += 1;
    for( var i = 0; i < qSet.length; i++){
        qSet[i].className = 'q_set';
    }
    qSet[count].className = 'q_set active';    
    if( count == 5){
        skip.style.display = 'none';
        clearInterval(durationTime);
        countdown.innerHTML = 0;
    }
}
 
var durationTime = setInterval( function(){
    if(duration  == 10){
        duration = 0 ;
    }
    duration +=1;
    countdown.innerHTML = duration;
    if (countdown.innerHTML == '10'){
        step()
    }
},1000)