const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector( "#score");
const button = document.getElementById("timer__btn");

let result = 0;
let hitPosition; 
let currentTime = 10;
let timerId = null;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove("mole");
    });

    let randomSquare = squares[Math.floor(Math.random() * squares.length)];
    randomSquare.classList.add("mole");

    hitPosition = randomSquare.id;
}

squares.forEach(square =>{
    square.addEventListener("mousedown", () => {
        if(square.id == hitPosition){
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
})

function resetTimer(){
    currentTime = 10;

}

function moveMole(){
    timerId = setInterval(randomSquare, 800);
}


button.addEventListener("click", () =>{
    let countDownTimerId = setInterval(countDown, 1000);
    moveMole();
    
    function countDown(){
        currentTime--;
        timeLeft.textContent = currentTime;
        
        if(currentTime == 0) {
            clearInterval(countDownTimerId);
            clearInterval(timerId);
            alert(`Fim de Jogo. Seu resultado foi de ${result}`);
            resetTimer();
            timeLeft.textContent = currentTime;
            score.textContent = 0;
        }
    }
});
