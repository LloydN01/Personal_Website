const titleArray = [
    "Software Engineer", "Fullstack Developer",
    "Data Analyst", "Avid Learner", "Problem Solver",
    "Team Player"
];
    
// Function to change the job title every 3 seconds
function changeTitle() {
    let indx = 0;
    const title = document.getElementById("title");
    title.innerHTML = titleArray[0];

    function displayNextItem(){
        title.classList.remove("show");
        setTimeout(() => {
            title.innerHTML = titleArray[++indx % titleArray.length];
            title.classList.add("show");
        }, 1000);
    }

    setInterval(displayNextItem, 3000);
}

window.onload = () => {
    changeTitle();
}
