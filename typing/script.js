const typingText = document.querySelector("#text-area p");
const resetBtn = document.getElementById("restart-btn");
const totalWord = document.getElementById("total-word");
const inputField = document.getElementById("input");
const currentWord = document.getElementById("current-word");
const wpm = document.getElementById("wpm");

let charIndex = 0;
let randIndex;
let startTime;
let wpmDis = 0;
let correctChars = 0;

function reset() {
    typingText.innerHTML = '';
    randIndex = Math.floor(Math.random() * para.length);
    para[randIndex].split("").forEach(span => {
        let spanTag = `<span>${span}</span>`;
        typingText.innerHTML += spanTag;
    });
    inputField.value = '';
    charIndex = 0;
    correctChars = 0;
    totalWord.innerText = para[randIndex].split(" ").length;
    currentWord.innerText = 0;
    wpm.innerText = 0;
    document.getElementById("accuracy").textContent = "100";
}

function calculateAccuracy() {
    const accuracy = (correctChars / charIndex) * 100 || 0;
    document.getElementById("accuracy").textContent = accuracy.toFixed(2);
}

function initTyping() {
    const characters = typingText.querySelectorAll("span");
    let typedChar = inputField.value.split("")[charIndex];

    if (charIndex == 0) startTime = Date.now();

    if (typedChar == null && charIndex > 0) {
        charIndex--;
        characters[charIndex].classList.remove("incorrect", "correct");
    } else {
        if (characters[charIndex].innerText === typedChar) {
            characters[charIndex].classList.add("correct");
            correctChars++;
        } else {
            characters[charIndex].classList.add("incorrect");
        }
        charIndex++;
    }

    characters.forEach(span => span.classList.remove("active"));
    if (characters[charIndex]) characters[charIndex].classList.add("active");
    currentWord.innerText = charIndex;
    calculateAccuracy();

    if (charIndex == para[randIndex].length) {
        const endTime = Date.now();
        const totalWords = para[randIndex].split(" ").length;
        const timeTaken = (endTime - startTime) / 1000 / 60;
        wpmDis = Math.round(totalWords / timeTaken);
        wpm.innerText = wpmDis;
    }
}

resetBtn.addEventListener("click", reset);
document.addEventListener("keydown", () => inputField.focus());
typingText.addEventListener("click", () => inputField.focus());

window.onload = () => {
    reset();
    inputField.focus();
    inputField.addEventListener("input", initTyping);
};
