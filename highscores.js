// constants
const mainList = document.querySelector("#main-list");
// console.log("hello world")

// onload function to populate page immediately after getting data
window.onload = () => {
    // console.log("quickcheck")
    let highScoresList = JSON.parse(window.localStorage.getItem("high-scores"));

    // forEach function to pull initials and scores from existing data
    highScoresList.forEach((item) => {
        
        let li = document.createElement("li");
        li.textContent = item.initials + " : " + item.score;
        console.log(item.score);
        mainList.appendChild(li);
    });
    // console.log(highScoresList)
    
};

