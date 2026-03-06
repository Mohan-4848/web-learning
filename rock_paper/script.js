const r = document.getElementById("r");
const p = document.getElementById("p");
const s = document.getElementById("s");
const up = document.getElementById("up");
const cp = document.getElementById("cp");
const quote = document.getElementById("status");

const choices = ["Rock", "Paper", "Scissors"];
const icons = [r,p,s];


let userScore = 0;
let compScore = 0;

let userChoice;

r.addEventListener("click",()=>{
    userChoice = 0;
    play();
})
p.addEventListener("click",()=>{
    userChoice = 1;
    play();
})
s.addEventListener("click",()=>{
    userChoice = 2;
    play();
})

function play(){
    let computerChoice = Math.floor(Math.random()*3);

    const playerIcon = icons[userChoice];
    const computerIcon = icons[computerChoice];

    if(userChoice === computerChoice){
        const cc = choices[computerChoice];
        quote.innerText = `It's a tie! Both chose ${cc}`;
    }
    else if((userChoice === 0 && computerChoice === 2) || (userChoice === 1 && computerChoice === 0) || (userChoice === 2 && computerChoice === 1)){
        userScore++;
        up.innerText = userScore;
        const uc = choices[userChoice];
        const cc = choices[computerChoice];
        quote.innerText = `You win! ${uc} beats ${cc}`;
        playerIcon.classList.add("win-anim");
        computerIcon.classList.add("lose-anim");
    }
    else{
        compScore++;
        cp.innerText = compScore;
        const uc = choices[userChoice];
        const cc = choices[computerChoice];
        quote.innerText = `You lose! ${cc} beats ${uc}`;
        playerIcon.classList.add("lose-anim");
        computerIcon.classList.add("win-anim");
    }
    setTimeout(()=>{
        playerIcon.classList.remove("win-anim","lose-anim");
        computerIcon.classList.remove("win-anim","lose-anim");
    },500);
}


