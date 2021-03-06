// Quiz structure
window.onload = () => {
  if (!window.localStorage.getItem("high-scores")) {
    window.localStorage.setItem("high-scores", "[]");
  } else {
  }
};

// Array of questions with question, answer options, and correct answer within each object
const questionArray = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    a: "<js>",
    b: "<script>",
    c: "<javascript>",
    d: "<scripting>",
    correct: "b",
  },

  {
    question: "Where is the correct place to insert a JavaScript?",
    a: "<head>",
    b: "<head> and <body>",
    c: "<body>",
    d: "none of the above",
    correct: "b",
  },

  {
    question: "How do you write 'Hello World' in an alert box?",
    a: "alertBox('Hello World')",
    b: "msg('Hello World')",
    c: "alert('Hello World')",
    d: "msgBox('Hello World')",
    correct: "c",
  },

  {
    question: "How do you create a function in JavaScript?",
    a: "function myFunction()",
    b: "function = myFunction()",
    c: "function:myFunction()",
    d: "[] =>",
    correct: "a",
  },

  {
    question: "How do you call a function named 'myFunction()",
    a: "myFunction()",
    b: "call function = myFunction()",
    c: "call myFunction()",
    d: "oh function, myFunction()",
    correct: "a",
  },
];

// constants

// quiz related
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const submitBtn = document.getElementById("submit");

// timer related
const timer = document.getElementById("timer");
const btnStart = document.getElementById("btn-start");
const btnStop = document.getElementById("btn-stop");

// form related
const form = document.getElementById("Scoreboard");
const initials = document.querySelector("#initials");
const submitResults = document.querySelector("#submitBtn_initials");

// set timer length as count; declare intervalID
let count = 60;
let intervalID;

// set "currentQuiz" and "score" both to 0
let currentQuestion = 0;
let score = 0;

// hidden is default for quiz and form
hideQuiz();
hideForm();

// to set the quiz as hidden
function hideQuiz() {
  document.getElementById("quiz").style.visibility = "hidden";
};

// to show the quiz once the start button is clicked
function showQuiz() {
  document.getElementById("quiz").style.visibility = "visible";
};

// hide the form until the user completes the quiz
function hideForm() {
  document.getElementById("Scoreboard").style.visibility = "hidden";
};

// show form once quiz is completed with all correct answers
function showForm() {
  document.getElementById("Scoreboard").style.visibility = "visible";
};

// to load the quiz
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
  });

  // return answer
  return answer;
};

// for each answer element, is checked answer false
function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
};

// start timer, stop if it reaches 0
btnStart.addEventListener("click", () => {
  document.getElementById("btn-start").style.display = "none";

  // call primary function "loadQuiz"
  loadQuiz();

  intervalID = setInterval(() => {
    count--;
    timer.textContent = count + " Seconds";

    // if timer drops to 0
    if (count < 1) {
      // stop timer
      clearInterval(intervalID);

      // template literal to show score and create reload button
      quiz.innerHTML = `<h2>Time's up! You answered ${score}/${questionArray.length} questions correctly. </h2>
                <button onclick="location.reload()">Reload</button>`;
    }
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
      timer.textContent = count + " Seconds";
    }

    // then go to next question within the array
    currentQuestion++;

    // if the current question is within array length
    if (currentQuestion < questionArray.length) {
      // keep loading quiz
      loadQuiz();
    }

    // otherwise
    else {
      // give a message, stop the timer, and show the form for user input to be saved with another template literal
      quiz.innerHTML = `<h2>Done with ${count} seconds to spare! You answered ${score}/${questionArray.length} questions correctly. </h2>`;

      // stop timer
      clearInterval(intervalID);

      // show form for initials input
      showForm();
    }
  }
});

// Submit initials and render scores for score page
let submitScoreButton = document.getElementById("submitBtn_initials");
submitScoreButton.addEventListener("click", (event) => {
  // Prevent bubbling
  event.preventDefault();

  let initials = document.getElementById("initials");
  //   console.log(initials.value);

  //   if initials is not an empty string, parse out high scores
  if (initials !== "") {
    let initialsValue = initials.value;
    let highScores = JSON.parse(window.localStorage.getItem("high-scores"));
    let toPush = {
      score: count,
      initials: initialsValue,
    };

    // push to highScores
    highScores.push(toPush);
    // console.log(highScores);

    window.localStorage.setItem("high-scores", JSON.stringify(highScores));
  }; 
  // then reload page
  location.reload();
});
