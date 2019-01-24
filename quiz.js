    // Quiz database.
    var quiz = {
        question:["whats striped black and white and lives in Africa.","What is the primitive ancestor of the human race.","Which animal lives in Africa and uses its long neck to eat leaves from tall trees."],
        answer:["Zebra","Monkeys","Giraffe"],
    };
    // UserInput database.
    var userAnswer = [[],[],[]];
    // Initializing variables.
    let questionDisplay = document.getElementById("question-display");
    let questionCount = document.getElementById("question-count");
    let points = document.getElementById("points");
    let input = document.getElementById("input");
    let submit = document.getElementById("submit");
    let modalScoreScreen = document.getElementById("modal-container");
    let modalBody = document.getElementById("modal-body");
    let closeModal = document.getElementById("close-modal");
    let nextButton = document.getElementById("right-arrow");
    let backButton = document.getElementById("left-arrow");
    let body = document.getElementsByTagName("body");
    var tempArr;
    
    
    // num is the currentQuestion index.
    var num = 0;
    var numArr = -1;
    var totalPoints = 0;
    // Initializing Buttons.
    backButton.addEventListener("click", back);
    nextButton.addEventListener("click", next);
    submit.addEventListener("click", storeUserAnswer);
    input.addEventListener("keyup", function(event){
        event.preventDefault();
        if(event.keyCode === 13){
            submit.click();
            
        }
    });
    closeModal.addEventListener("click", closeScoreScreen);
    window.addEventListener("keyup", function(event){
        event.preventDefault();
        if(event.keyCode === 27){
            closeModal.click();
        }
    });
    // Where the quiz starts.
function play(){
    questionDisplay.innerHTML = quiz.question[0];
    questionCount.innerHTML = num +1 + "/" + quiz.question.length;
    //var userAnswer = [[],[],[]];
    //return userAnswer;
    
};
    // Moves to the next question.
function next(){
    if(num == quiz.question.length - 1){
        return false;
    }
    numArr++
    num++;console.log(num);
    
    questionDisplay.innerHTML = quiz.question[num];questionCount.innerHTML = num + 1 + "/" + quiz.question.length;
    return num;
}
    // Moves to the previous question.
function back(){
    if(num <= 0){
        return false;
    }
    numArr--
    num--;console.log(num);
    
    questionDisplay.innerHTML = quiz.question[num];questionCount.innerHTML = num + 1 + "/" + quiz.question.length;
}
    // takes the users answer and pushes it to userAnswer database.
function storeUserAnswer(){
    let last = userAnswer.length -1;
    
    if(userAnswer[num].length  >= 1 ){
        alert("you already gave your answer, please go to the next question.");
        input.value = "";
        return false;
    }
    if(input.value == ""){
        alert("ERROR you need to enter something");
        return false;
    }
    console.log(userAnswer);
    userAnswer[num].push(input.value);
    input.value = "";
    compareAnswer();
    next();
    console.log(userAnswer[last]);
    if(userAnswer[last].length == 1){
        scoreScreen();
    }
}
    // check if userInput == quiz.answer
function compareAnswer(){
    if(userAnswer[num] == quiz.answer[num]){
        totalPoints += 100;
        points.innerHTML = totalPoints;
    }
}
    // Resets the Quiz.
function replay(){
    userAnswer = [[],[],[]];
    num = 0;
    totalPoints = 0;
    console.log(userAnswer);
    questionDisplay.innerHTML = quiz.question[0];
    console.log(questionDisplay.innerHTML = quiz.question[0]);
    questionCount.innerHTML = num +1+ "/" + quiz.question.length;
    points.innerHTML = totalPoints;
    console.log(questionCount.innerHTML = num +1+ "/" + quiz.question.length);
}
    // Scorescreen that is shown at the end of the game.
function scoreScreen(){
    modalScoreScreen.style.display = "block";
    replay();
}
function closeScoreScreen(){
    modalScoreScreen.style.display = "none";
}
    // Ends the game.
function endGame(){}
// start the quiz.
play();
