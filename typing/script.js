const typingText = document.querySelector("#text-area p")
const resetBtn = document.getElementById("restart-btn")
const totalWord = document.getElementById("total-word")
const inputField = document.getElementById("input")
const currentWord = document.getElementById("current-word")
const wpm = document.getElementById("wpm")
const accuracy = document.getElementById("accuracy")

let charIndex = 0
let randIndex
let startTime
let wpmDis = 0
let incorrect = 0

function reset(){
    typingText.innerHTML = ''
    randIndex = Math.floor(Math.random()*para.length)
    para[randIndex].split("").forEach(span => {
        let spanTag = `<span>${span}</span>`
        typingText.innerHTML += spanTag
    })
    inputField.value = ''
    charIndex = 0
    totalWord.innerText = para[randIndex].length
    currentWord.innerText = charIndex
    wpm.innerText = wpmDis
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

function initTyping(){
    const charecters = typingText.querySelectorAll("span")
    let typedChar = inputField.value.split("")[charIndex]

    if(charIndex==0){
        startTime = Date.now()
    }

    if(typedChar == null){
        charIndex --
        currentWord.innerText = charIndex
        if(charecters[charIndex].classList.contains("incorrect")){
            incorrect--
        }
        charecters[charIndex].classList.remove("incorrect","correct")
        charecters.forEach(span => span.classList.remove("active"))
        charecters[charIndex].classList.add("active")
        accuracy.innerText = Math.round(((charIndex - incorrect) / charIndex) * 100>=0?((charIndex - incorrect) / charIndex) * 100:0)
    }
    else{
        if(charecters[charIndex].innerText === typedChar){
            charecters[charIndex].classList.add("correct")
        }
        else{
            charecters[charIndex].classList.add("incorrect")
            incorrect++
        }
    charIndex++
    accuracy.innerText = Math.round(((charIndex - incorrect) / charIndex) * 100>=0?((charIndex - incorrect) / charIndex) * 100:0)

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

    
}

reset()
inputField.addEventListener("input",initTyping)