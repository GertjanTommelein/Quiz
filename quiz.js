    const quiz = {
        question:["whats striped black and white and lives in Africa.","What is the primitive ancestor of the human race.","Which animal lives in Africa and uses its long neck to eat leaves from tall trees."],
        answer:["Zebra","Monkeys","Giraffe"],
    };
    let questionDisplay = document.getElementById("question-display");
    let questionCount = document.getElementById("question-count");
    let points = document.getElementById("points");
    let input = document.getElementById("input");
    let submit = document.getElementById("submit");
    let nextButton = document.getElementById("right-arrow");
    let backButton = document.getElementById("left-arrow");
    
    // num is the currentQuestion index.
    let num = 0;
    backButton.addEventListener("click", back);
    nextButton.addEventListener("click", next);
    // Where the quiz starts.
function play(){
    questionDisplay.innerHTML = quiz.question[0];
    
};
    // Moves to the next question.
function next(){
    num++;
    questionDisplay.innerHTML = quiz.question[num];
}
    // Moves to the previous question.
function back(){
    num--;
    questionDisplay.innerHTML = quiz.question[num];
}
// start the quiz.
play();