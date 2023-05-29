let project1Indx = 0;
let project2Indx = 0;
let project3Indx = 0;

const titleArray = [
    "Software Engineer", "Data Analyst",
    "Fullstack Developer", "Data Analyst", 
    "Avid Learner", "Problem Solver",
    "Team Player"
];
    
// Function to change the job title every 3.5 seconds
function changeTitle() {
    let indx = 0;
    const title = document.getElementById("title");
    for (let i = 0; i < titleArray[0].length; i++){
        setTimeout(() => {
            title.innerHTML = titleArray[0].substring(0, i + 1);
        }, 100 * i);
    }

    function displayNextItem(){
        title.classList.remove("show");
        setTimeout(() => {
            let newJobTitle = titleArray[++indx % titleArray.length];
            for (let i = 0; i < newJobTitle.length; i++){
                setTimeout(() => {
                    title.innerHTML = newJobTitle.substring(0, i + 1);
                }, 150 * i);
            }
            title.classList.add("show");
        }, 1000);
    }

    setInterval(displayNextItem, 3500);
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

// Iterate through the skills and bounce them
function bounceSkills() {
    let skillItems = document.getElementById("skills-content").children;
    let skillCounts = skillItems.length;
    let i = 0;
    setInterval(function(){
        skillItems[i % skillCounts].classList.add("bounce");
        setInterval(function(){
            skillItems[i % skillCounts].classList.remove("bounce");
        }, 1000);
        i++;
    }, 1000);
}

window.onscroll = () => {
    // Progress bar
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

window.onload = () => {
    changeTitle(); // Change the job title every 3 seconds
    bounceSkills(); // Bounce the skills

    // Display the Projects when scrolled to
    window.addEventListener("scroll", () => {
        let screenPos = window.innerHeight - 350; // Get the height of the screen

        let guide = document.getElementById("scroll-guide"); // Get the scroll guide
        let skillContent = document.getElementById("skills"); // Get the skills header
        let skillPos = skillContent.getBoundingClientRect().top; // Get the position of the skills header

        // Display the skills when scrolled to
        if (skillPos < screenPos) {
            guide.classList.add("fade-in");
            skillContent.classList.add("show");
        } else {
            guide.classList.remove("fade-in");
            skillContent.classList.remove("show");
        }

        let projectHeader = document.getElementById("project-header"); // Get the projects header
        let first = document.getElementById("project1");
        let firstPos = first.getBoundingClientRect().top;

        let second = document.getElementById("project2");
        let secondPos = second.getBoundingClientRect().top;

        let third = document.getElementById("project3");
        let thirdPos = third.getBoundingClientRect().top;

        // Display the projects when scrolled to
        if (firstPos < screenPos) {
            first.classList.add("show");
            projectHeader.classList.add("show");
        } else {
            first.classList.remove("show");
            projectHeader.classList.remove("show"); 
        }

        if (secondPos < screenPos) {
            second.classList.add("show");
        } else {
            second.classList.remove("show");
        }

        if (thirdPos < screenPos) {
            third.classList.add("show");
        } else {
            third.classList.remove("show");
        }

        let experienceHeader = document.getElementById("experience-header");

        let firstJob = document.getElementById("job-content1");
        let firstJobPos = firstJob.getBoundingClientRect().top;

        let secondJob = document.getElementById("job-content2");
        let secondJobPos = secondJob.getBoundingClientRect().top;

        if (firstJobPos < screenPos) {
            experienceHeader.classList.add("show");
            firstJob.classList.add("show");
        } else {
            experienceHeader.classList.remove("show");
            firstJob.classList.remove("show");
        }

        if (secondJobPos < screenPos) {
            secondJob.classList.add("show");
        } else {
            secondJob.classList.remove("show");
        }

        let transcriptContent = document.getElementById("transcript");
        let transcriptPos = transcriptContent.getBoundingClientRect().top;

        if (transcriptPos < screenPos) {
            transcriptContent.classList.add("show");
        } else {
            transcriptContent.classList.remove("show");
        }
    });

    // Display the menu when the menu button is clicked
    $("#menu-btn").click(function () {
        $("#menu").css("visibility", "visible");
        $("#menu a").css("display", "block");
        $("#overlay").css("display", "block"); // activates overlay

        // Prevents scrolling when menu is open
        $("html").css("position", "fixed");
        $("html").css("overflow-y", "scroll");
    });

    // Hide the menu when the overlay is clicked
    $("#overlay").click(function () {
        $("#menu").css("visibility", "hidden");
        $("#menu a").css("display", "none");
        $("#overlay").css("display", "none"); // activates overlay

        // Allows scrolling when menu is closed
        $("html").css("position", "static");
        $("html").css("overflow-y", "auto");
    });

    // Hide the menu when any of the menu links are clicked
    $("#menu a").click(function () {
        $("#menu").css("visibility", "hidden");
        $("#menu a").css("display", "none");
        $("#overlay").css("display", "none"); // activates overlay
        
        // Allows scrolling when menu is closed
        $("html").css("position", "static");
        $("html").css("overflow-y", "auto");
    });

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
