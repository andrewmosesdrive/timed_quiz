// Global constants
const takeQuizButton = document.querySelector(".take-the-quiz");
const viewScoresButton = document.querySelector(".scoreboard");
const quizContainer = document.querySelector("#quiz");
const resultsContainer = document.querySelector("#results");
const submitButton = document.querySelector("#submit");
const previousButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
// Initial array for all questions
const questionsArray = [{}, {}, {}, {}, {}, {}, {}, {}, {}];


// Function that only executes "startQuiz" quiz once navbar button is pressed
function takeQuiz() {

};

// Function that begins the quiz
function createQuiz() {

};

// Function that shows the answers
function showResults() {

};

// Function to convert questions into slides for pagination
function showSlide() {
    // If/else if/else statements for showing/hiding slides
};

// Show the current slide
showSlide(currentSlide);

// Function for increment of slide position
function showNextSlide() {
    showSlide(currentSlide++)
};

// Function for decrement of slide position
function showPreviousSlide() {
    showSlide(currentSlide--)
};

// Function to view scoreboard with locally stored scores
function viewScoreboard() {

};


// addEventListeners for button clicks
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
submitButton.addEventListener("click", showResults);
takeQuizButton.addEventListener("click", takeQuiz);
viewScoresButton.addEventListener("click", viewScoreboard);

