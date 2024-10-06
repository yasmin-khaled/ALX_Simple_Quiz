
function checkAnswer() {
    let correctAnswer = "4"; 
    const checkedRadioButton = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = checkedRadioButton.value;
    const feedbackParagraph = document.getElementById('feedback');
    if(userAnswer === correctAnswer){
        feedbackParagraph.textContent = "Correct! Well done.";
    } else {
        feedbackParagraph.textContent = "That's incorrect. Try again!";
    }
}

const sumbitButton = document.getElementById('submit-answer');
sumbitButton.addEventListener('click', checkAnswer);
