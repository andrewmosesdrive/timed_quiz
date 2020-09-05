function sayHello() {
    console.log("Hello");


};

// setTimeout(sayHello, 1000);

var timer = document.getElementById("timer");
var btnStart = document.getElementById("btn-start");
var btnStop = document.getElementById("btn-stop");
var count = 5;
var intervalID;



btnStart.addEventListener("click", function () {
    intervalID = setInterval(() => {
        count -= 1;
        timer.textContent = count;
    }, 1000);

        if (count <= 0) {
           clearInterval(intervalID);
        };
}, 1000);



btnStop.addEventListener("click", function () {
    clearInterval(intervalID);
});

