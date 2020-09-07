const mainList = document.querySelector("ul");
console.log("hello world")


window.onload = () => {
    console.log("poop")
    let highScoresList = JSON.parse(window.localStorage.getItem("high-scores"));

    highScoresList.forEach((item) => {
        
        let li = document.createElement("li");
        li.textContent = item.initials + ":" + item.score;
        console.log(item.score);
        mainList.appendChild(li);
    })
    console.log(highScoresList)
    
};

