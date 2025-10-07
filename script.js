let slider = document.getElementById("questionRange");
let sliderText = document.getElementById("slider-value");

let startGameButton = document.getElementById("start-game-button");


sliderText.innerHTML = slider.value + " questions";

slider.oninput = function() {
    sliderText.innerHTML = this.value + ((this.value < 2) ? " question" : " questions");
}

startGameButton.onclick = function() {
    localStorage.setItem("numQuestions", slider.value);
    window.location.href="questions.html"
}
