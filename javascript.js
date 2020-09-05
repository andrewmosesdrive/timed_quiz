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
const quiz = document.getElementById("quiz")
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question");
const submitBtn = document.getElementById("submit");

// set "currentQuiz" and "score both to 0"
let currentQuestion = 0;
let score = 0;

// call primary function "loadQuiz"
loadQuiz();

function loadQuiz() {

    // call function "deselctAnswers" to deselect answers previously clicked
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

    // return nothing (empty string)
    return answer;
};

// for each answer element, is checked answer false
function deselectAnswers() {

    answerEls.forEach((answerEl) => {

        answerEl.checked = false;
    });
};



// event listener on click
submitBtn.addEventListener("click", () => {

    // set answer to "getSelected"
    const answer = getSelected();

    // if the chosen answer is correct on submit, increase the score
    if (answer) {

        if (answer === questionArray[currentQuestion].correct) {
            score++
        };

        // then go to next question within the array
        currentQuestion++;

        // if the current quiz question object is less than the length of the array, load quiz
        if (currentQuestion < questionArray.length) {

            loadQuiz();

          // otherwise,  
        } else {

            // show how many were correctly answered and create "Reload" button
            quiz.innerHTML =
                
            `<h2>You answered correctly at ${score}/${questionArray.length} questions. </h2>

                <button onclick="location.reload()">Reload</button>
               
            `;
        };

    };
});

// -----------------------------------------------

// Countdown clock/timer structure