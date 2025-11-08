const typingText = document.querySelector("#text-area p")
const resetBtn = document.getElementById("restart-btn")
const totalWord = document.getElementById("total-word")
const inputField = document.getElementById("input")
const currentWord = document.getElementById("current-word")
const wpm = document.getElementById("wpm")

let charIndex = 0
let randIndex
let startTime
let wpmDis = 0

function reset(){
    typingText.innerHTML = ''
    randIndex = Math.floor(Math.random()*para.length)
    para[randIndex].split("").forEach(span => {
        let spanTag = `<span>${span}</span>`
        typingText.innerHTML += spanTag
    })
    inputField.value = ''
    charIndex = 0
    const totalWords = para[randIndex].split(" ").length;
    const timeTaken = (endTime - startTime) / 1000 / 60;
    wpmDis = Math.round(totalWords / timeTaken);
    wpm.innerText = wpmDis;

}


resetBtn.addEventListener("click",()=>{
    reset()
})

document.addEventListener("keydown", ()=>{
    inputField.focus()
})
typingText.addEventListener("click", ()=>{
    inputField.focus()
})
let correctChars = 0;

function calculateAccuracy() {
    const accuracy = (correctChars / charIndex) * 100 || 0;
    document.getElementById("accuracy").textContent = accuracy.toFixed(2);
}



function initTyping(){
    const charecters = typingText.querySelectorAll("span")
    let typedChar = inputField.value.split("")[charIndex]

    if(charIndex==0){
        startTime = Date.now()
    }

    if (typedChar == null && charIndex > 0) {
    charIndex--;
    charecters[charIndex].classList.remove("incorrect", "correct")
        charecters.forEach(span => span.classList.remove("active"))
        charecters[charIndex].classList.add("active")
    }
    else{
        if(charecters[charIndex].innerText === typedChar){
            charecters[charIndex].classList.add("correct")
        }
        else{
            charecters[charIndex].classList.add("incorrect")
        }
    charIndex++

    currentWord.innerText = charIndex
    charecters.forEach(span => span.classList.remove("active"))
    try{
        charecters[charIndex].classList.add("active")
    }
    catch{

    }
    }
    if(charIndex == para[randIndex].length){
        const endTime = Date.now()
        wpm.innerText = wpmDis = Math.round(para[randIndex].length/(5*((endTime-startTime)/1000))*60)
    }
    if (charecters[charIndex].innerText === typedChar) {
    charecters[charIndex].classList.add("correct");
    correctChars++;
    } else {
    charecters[charIndex].classList.add("incorrect");
    }
    calculateAccuracy();


    
}

reset()
inputField.addEventListener("input",initTyping)

