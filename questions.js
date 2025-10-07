let numQuestions = 0;
let count = 0;
let score = 0;

numQuestions = localStorage.getItem("numQuestions");

const questionText = document.getElementById("question");
const answerInput = document.getElementById("answer");
const submitButton = document.getElementById("submit-button");
const timeText = document.getElementById("time-text");

let timerInterval;

startTimer();

function startTimer() {
    let timeLeft = 6;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        timeText.innerHTML = "Time Left: " + String(timeLeft)
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitButton.click();
        }
    }, 1000);
}

question();
function question(){
    if(count <= numQuestions){
        let nums = generateQuestion();
        questionText.innerHTML = String(nums[0] + " x " + nums[1])
        count += 1;
    }
}

function generateQuestion() {
    let first = Math.floor(Math.random() * 10) + 1;
    let second = Math.floor(Math.random() * 10) + 1;
    return [first, second];
}

submitButton.addEventListener("click", function() {
    const [first, second] = questionText.innerHTML.split(" x ").map(Number);
    const userAnswer = Number(answerInput.value);
    const correctAnswer = first * second;

    if (userAnswer === correctAnswer) {
        score++;
    }

    if (count < numQuestions) {
        clearInterval(timerInterval);
        question();
        timeText.innerHTML = "Time Left: 6";
        answerInput.value = "";
        startTimer();
    } else {
        alert(`Game over! Your score: ${score}/${numQuestions}`);
        submitButton.disabled = true;
        answerInput.disabled = true;
        window.location.href = "index.html";
    }
});

answerInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        submitButton.click();
    }
});