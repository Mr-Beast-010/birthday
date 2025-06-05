// Get the elements
const startMusicButton = document.getElementById("startMusic");
const startScreen = document.getElementById("startScreen");
const wrapper = document.getElementById("wrapper");
const bgMusic = document.getElementById("bgMusic");

// Add an event listener to the "Start Music" button
startMusicButton.addEventListener("click", () => {
    // Play the music
    bgMusic.play();

    // Hide the start screen
    startScreen.style.display = "none";

    // Show the main website content
    wrapper.style.display = "block";
});

    let datetxt = "It's 6th June🎂";
    let datatxtletter = "Hii, My Pagli! 🥰 Happy Birthday, Sweetheart! 🎉 Today, I celebrate you, your wonderful spirit, and the happiness you bring to everyone around you. Your friendship means so much to me, and I'm endlessly grateful for the joy, laughter, and warmth you add to my life. Wishing you a day filled with love, laughter, and memorable moments that make you smile from ear to ear. May all your dreams come true and your journey ahead be full of exciting adventures, limitless success, and endless positivity. You deserve the very best—today and always. Stay ambitious, stay free-spirited, and always hold onto the beautiful spark that makes you so unique. May this year be full of smiles, cherished memories, and everything your heart desires. Enjoy every single second of your special day—you deserve it more than words can say. Happy Birthday again, my dear Pagli! 🥳❤️💐"
    let titleLetter = "To you";
    let charArrDate = datetxt.split('');
    let charArrDateLetter = datatxtletter.split('');
    let charArrTitle = titleLetter.split('');
    let currentIndex = 0;
    let currentIndexLetter = 0;
    let currentIndexTitle = 0;
    let date__of__birth = document.querySelector(".date__of__birth span");
    let text__letter = document.querySelector(".text__letter p");
    setTimeout(function(){
        timeDatetxt = setInterval(function(){
            if(currentIndex < charArrDate.length){
                date__of__birth.textContent += charArrDate[currentIndex];
                currentIndex++;
            }
            else{
                let i = document.createElement("i");
                i.className = "fa-solid fa-star"
                document.querySelector(".date__of__birth").prepend(i)
                document.querySelector(".date__of__birth").appendChild(i.cloneNode(true))
                clearInterval(timeDatetxt)
            }
        },100)
    },12000)

    var intervalContent;
    var intervalTitle;
    $("#btn__letter").on("click", function(){
        $(".box__letter").slideDown()
        setTimeout(function(){
            $(".letter__border").slideDown();
        },1000)
        setTimeout(function(){
            intervalTitle = setInterval(function(){
                if(currentIndexTitle < charArrTitle.length){
                    document.querySelector(".title__letter").textContent += charArrTitle[currentIndexTitle];
                    let i = document.createElement("i");
                    i.className = "fa-solid fa-heart"
                    document.querySelector(".title__letter").appendChild(i)
                    currentIndexTitle++;
                }
                else{
                    clearInterval(intervalTitle)
                }
            },100)
        },2000)
        setTimeout(function(){
            document.querySelector("#heart__letter").classList.add("animationOp");
            document.querySelector(".love__img").classList.add("animationOp");
            document.querySelector("#mewmew").classList.add("animationOp");
        },2800)
        setTimeout(function(){
            document.querySelectorAll(".heart").forEach((item)=>{
                item.classList.add("animation")
            })
        },3500)
        setTimeout(function(){
            intervalContent = setInterval(function(){
                if(currentIndexLetter < charArrDateLetter.length){
                    text__letter.textContent += charArrDateLetter[currentIndexLetter];
                    currentIndexLetter++;
                }
                else{
                    clearInterval(intervalContent)
                }
            },50)
        },6000)
    })
    $(".close").on("click", function(){
        clearInterval(intervalContent)
        document.querySelector(".title__letter").textContent = "";
        text__letter.textContent = "";
        currentIndexLetter = 0
        currentIndexTitle = 0
        document.querySelector("#heart__letter").classList.remove("animationOp");
        document.querySelector(".love__img").classList.remove("animationOp");
        document.querySelector("#mewmew").classList.remove("animationOp");
        document.querySelectorAll(".heart").forEach((item)=>{
                item.classList.remove("animation")
            })
        $(".box__letter").slideUp();
        $(".letter__border").slideUp();
    })

let btnSurprise = document.querySelectorAll("#btn__letter")[1]; // Second button
let boxSurprise = document.querySelector(".box__surprise");
let closeSurprise = document.querySelector(".close__surprise");


btnSurprise.addEventListener("click", function () {
    boxSurprise.style.display = "flex";
});


closeSurprise.addEventListener("click", function () {
    boxSurprise.style.display = "none";
});
// Array of video sources
let videoSources = [
    "./videos/rm_bd.mp4",  // Video 1
    "./videos/pc_bd.mp4",  // Video 2
    "./videos/jk_bd.mp4"   // Video 3
];

let currentVideoIndex = 0; // Track the current video

// DOM Elements
const videoElement = document.getElementById("surpriseVideo");
const nextButton = document.getElementById("nextVideo");
const finishButton = document.getElementById("finishButton");
const surpriseButton = document.querySelectorAll("#btn__letter")[1]; // Second "Click here for Surprise" button
const boxSurprise1 = document.querySelector(".box__surprise");

// Initialize Button States
nextButton.style.display = "inline-block";
finishButton.style.display = "none";

// Event Listener for "Click here for Surprise" Button
if (surpriseButton) {
    surpriseButton.addEventListener("click", function () {
        // Show the modal
        boxSurprise.style.display = "flex";

        // Start playing the first video
        videoElement.querySelector("source").src = videoSources[currentVideoIndex];
        videoElement.load();
        videoElement.play();
    });
}

// Event Listener for "Next" Button
nextButton.addEventListener("click", function () {
    // Increment the video index
    currentVideoIndex++;

    // Ensure the index doesn't exceed the array length
    if (currentVideoIndex < videoSources.length) {
        // Update the video source and start playing the next video
        videoElement.querySelector("source").src = videoSources[currentVideoIndex];
        videoElement.load();
        videoElement.play();
    }

    // Handle button visibility
    if (currentVideoIndex === videoSources.length - 1) {
        nextButton.style.display = "none";
        finishButton.style.display = "inline-block";
    }
});

// Event Listener for "Finish" Button
finishButton.addEventListener("click", function () {
    // Stop the video
    videoElement.pause();
    videoElement.currentTime = 0; // Reset the video to the beginning

    // Close the modal
    boxSurprise.style.display = "none";

    // Reset state for future use
    currentVideoIndex = 0; // Reset to the first video
    nextButton.style.display = "inline-block"; // Show the "Next" button
    finishButton.style.display = "none"; // Hide the "Finish" button
});
window.addEventListener("DOMContentLoaded", () => {
    // Select elements
    const countdownContainer = document.getElementById("countdownContainer");
    const countdown = document.getElementById("countdown");
    const startMusicButton = document.getElementById("startMusic");

    document.body.classList.add("noscroll");

    // Set the target date and time (Example: March 30, 2025, at 15:30:00)
    const targetDate = new Date("June 06, 2025 00:00:01").getTime();

    // Countdown function
    const updateCountdown = setInterval(() => {
        const now = new Date().getTime(); // Current time
        const timeLeft = targetDate - now; // Time difference

        if (timeLeft > 0) {
            // Calculate days, hours, minutes, and seconds
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            // Update the countdown text
            countdown.textContent = `${days}d: ${hours}h: ${minutes}m: ${seconds}s`;
        } else {
            // When countdown ends
            clearInterval(updateCountdown); // Stop the countdown
            countdownContainer.style.display = "none"; // Hide countdown
            startMusicButton.style.display = "block"; // Show the button

            document.body.classList.remove("noscroll");

        }
    }, 1000); // Update every second
});