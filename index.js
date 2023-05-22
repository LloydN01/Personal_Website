let project1Indx = 0;
let project2Indx = 0;
let project3Indx = 0;

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

// Function to display the next item in the carousel
function displayNextItem(carouselId, carouselIndx, carouselLength){
    $(carouselId).children().eq(carouselIndx).css("display", "none"); // Hide current video
    carouselIndx = (carouselIndx + 1) % carouselLength; // Increment index
    $(carouselId).children().eq(carouselIndx).fadeIn(1000); // Display next item
    return carouselIndx;
}

// Function to display the previous item in the carousel
function displayPrevItem(carouselId, carouselIndx, carouselLength){
    $(carouselId).children().eq(carouselIndx).css("display", "none"); // Hide current video
    carouselIndx = (carouselIndx - 1 + carouselLength) % carouselLength; // Decrement index
    $(carouselId).children().eq(carouselIndx).fadeIn(1000); // Display previous item
    return carouselIndx;
}

window.onload = () => {
    changeTitle(); // Change the job title every 3 seconds

    // // Hide the modals when the close button is clicked
    // $(".close-btn").click(function () {
    //     $(".popup").hide();
    //     $("#overlay").css("display", "none"); // activates overlay

    //     // Allows scrolling when modal is closed
    //     $("html").css("position", "static");
    //     $("html").css("overflow-y", "auto");
    // });

    // // When overlay is clicked, hide the modals
    // $("#overlay").click(function () {
    //     $(".popup").hide();
    //     $("#overlay").css("display", "none"); // activates overlay

    //     // Allows scrolling when modal is closed
    //     $("html").css("position", "static");
    //     $("html").css("overflow-y", "auto");
    // });

    /////////////////// Project 1 ///////////////////

    // Carousel buttons
    let prevBtn1 = document.getElementById("prev1");
    let nextBtn1 = document.getElementById("next1");

    $("#project1-carousel").children().eq(0).css("display", "block"); // Display first video
    let project1Length = $("#project1-carousel").children().length; // Get number of videos

    // EventListener for next button
    nextBtn1.addEventListener("click", () => {
        project1Indx = displayNextItem("#project1-carousel", project1Indx, project1Length);
    });

    // EventListener for previous button
    prevBtn1.addEventListener("click", () => {
        project1Indx = displayPrevItem("#project1-carousel", project1Indx, project1Length);
    });

    // // Display the video modal when video is clicked
    // $("#project1-carousel").click(function () {
    //     let videoElement = $('.video-container');
    //     let sourceElement = $('<source>');
    //     let currVideo1 = $("#project1-carousel").children().eq(project1Indx);
    //     console.log(project1Indx);
    //     sourceElement.attr('src', currVideo1.children().eq(0).attr("src"));
    //     sourceElement.attr('type', 'video/mp4');
    //     videoElement.append(sourceElement);

    //     $("#video-modal").fadeIn(600);
    //     $("#overlay").fadeIn(600);
    //     $("#video-modal").show();
    //     $("#overlay").css("display", "block"); // activates overlay
        
    //     // Prevents scrolling when modal is open
    //     $("html").css("position", "fixed");
    //     $("html").css("overflow-y", "scroll");
    // });    

    /////////////////// Project 2 ///////////////////

    // Carousel buttons
    let prevBtn2 = document.getElementById("prev2");
    let nextBtn2 = document.getElementById("next2");
  
    $("#project2-carousel").children().eq(0).css("display", "block"); // Display first image
    let project2Length = $("#project2-carousel").children().length; // Get number of images

    // EventListener for next button
    nextBtn2.addEventListener("click", () => {
        project2Indx = displayNextItem("#project2-carousel", project2Indx, project2Length);
    });

    // EventListener for previous button
    prevBtn2.addEventListener("click", () => {
        project2Indx = displayPrevItem("#project2-carousel", project2Indx, project2Length);
    });

    /////////////////// Project 3 ///////////////////

    // Carousel buttons
    let prevBtn3 = document.getElementById("prev3");
    let nextBtn3 = document.getElementById("next3");

    $("#project3-carousel").children().eq(0).css("display", "block"); // Display first image
    let project3Length = $("#project3-carousel").children().length; // Get number of images

    // EventListener for next button
    nextBtn3.addEventListener("click", () => {
        project3Indx = displayNextItem("#project3-carousel", project3Indx, project3Length);
    });

    // EventListener for previous button
    prevBtn3.addEventListener("click", () => {
        project3Indx = displayPrevItem("#project3-carousel", project3Indx, project3Length);
    });
}
