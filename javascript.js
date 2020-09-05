// Quiz structure

// Array of questions with question, answer options, and correct answer in each object
const questionArray = [
    {
        question: "blah",
        a: "okay",
        b: "nah",
        c: "duh",
        d: "yup",
        correct: "c",
    },

    {
        question: "yeet",
        a: "okay",
        b: "nah",
        c: "duh",
        d: "yup",
        correct: "d",

    },

    {
        question: "lit",
        a: "okay",
        b: "nah",
        c: "duh",
        d: "yup",
        correct: "a",

    },

    {
        question: "whoa",
        a: "okay",
        b: "nah",
        c: "duh",
        d: "yup",
        correct: "b",

    },

    {
        question: "neato",
        a: "okay",
        b: "nah",
        c: "duh",
        d: "yup",
        correct: "c",

    },

];

// constants
// note: must use getElementById for corresponding radio buttons in HTML; querySelector will return null
// quiz related
const quiz = document.getElementById("quiz")
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question");
const submitBtn = document.getElementById("submit");

// timer related
const timer = document.getElementById("timer");
const btnStart = document.getElementById("btn-start");
const btnStop = document.getElementById("btn-stop");

// set timer length as count; declare intervalID
let count = 60;
let intervalID;

// set "currentQuiz" and "score both to 0"
let currentQuestion = 0;
let score = 0;

// to set the quiz as hidden
function hideQuiz() {
    document.getElementById("quiz").style.visibility = "hidden";
}

// hidden is default
hideQuiz();

// to show the quiz once the start button is clicked
function showQuiz() {
    document.getElementById("quiz").style.visibility = "visible";
}

// to create the quiz 
function loadQuiz() {

    showQuiz();

    // call function "deselectAnswers" to deselect answers previously clicked
    deselectAnswers();

    // set "currentQuizData" to the value of the current quiz within the "quizData" array 
    const currentQuestionData = questionArray[currentQuestion];

    // when the quiz loads, set the inner text of the question element to the "question" within the current object
    questionEl.innerText = currentQuestionData.question;

    // set the inner text of a-d to the corresponding a-d options of the current object
    a_text.innerText = currentQuestionData.a;
    b_text.innerText = currentQuestionData.b;
    c_text.innerText = currentQuestionData.c;
    d_text.innerText = currentQuestionData.d;

};

// when "getSelected" is called,  
function getSelected() {

    // set answer to empty string vs returning undefined, 
    let answer = "";

    // then for each answer, if the answer is checked
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    })

    // return answer (undefined)
    return answer;
};

// for each answer element, is checked answer false
function deselectAnswers() {

    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
};



// event listener on click

// start timer, stop if it reaches 0
btnStart.addEventListener("click", function () {

    // call primary function "loadQuiz"
    loadQuiz();

    intervalID = setInterval(() => {
        count--;
        timer.textContent = count;

        // if timer drops to 0
        if (count <= 0) {
            clearInterval(intervalID);

            // show score
            quiz.innerHTML =

                `<h2>Time's up! You answered ${score}/${questionArray.length} questions correctly. </h2>

                <button onclick="location.reload()">Reload</button>
               
            `;
        };
    }, 1000);


});


submitBtn.addEventListener("click", () => {

    // set answer to "getSelected"
    const answer = getSelected();

    // if 
    if (answer) {

            // the chosen answer is correct on submit, increase the score
        if (answer === questionArray[currentQuestion].correct) {
            score++;
        }

        // if it is not correct
        else if (answer !== questionArray[currentQuestion].correct) {

            // reduce the time remaining by 10 seconds
            count = count - 10;

            // then update the timer on the page
            timer.textContent = count;
            
        };
       
        // then go to next question within the array
        currentQuestion++;

        // if the current question is within array length
        if (currentQuestion < questionArray.length) {
            
            // keep loading quiz
            loadQuiz();
        }

        // otherwise
        else {

            // give a message and stop the timer
            quiz.innerHTML =

                `<h2>Done with ${count} seconds to spare! You answered ${score}/${questionArray.length} questions correctly. </h2>

                <button onclick="location.reload()">Reload</button> `;

                clearInterval(intervalID);
        };

        
        
    };

    
});

// -----------------------------------------------






