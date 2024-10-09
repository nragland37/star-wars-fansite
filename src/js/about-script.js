let slideIndex = 1; // Start with the first slide
let slideInterval; // Store the interval

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides and remove active classes from dots
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active-slide");
        dots[i].classList.remove("active");
    }

    // Move to the next slide
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Show the current slide and activate the corresponding dot
    slides[slideIndex - 1].classList.add("active-slide");
    dots[slideIndex - 1].classList.add("active");

    // Automatically change slides every 3 seconds
    slideInterval = setTimeout(showSlides, 3000);
}

// Navigate to the specific slide based on the dot clicked
function currentSlide(n) {
    slideIndex = n;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active-slide");
        dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].classList.add("active-slide");
    dots[slideIndex - 1].classList.add("active");

    // Clear previous interval and restart slideshow
    clearTimeout(slideInterval);
    slideInterval = setTimeout(showSlides, 3000);
}

// Initialize dots dynamically based on the number of slides
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.getElementsByClassName("mySlides");
    let dotContainer = document.querySelector(".dot-container");

    for (let i = 0; i < slides.length; i++) {
        let dot = document.createElement("span");
        dot.classList.add("dot");
        dot.setAttribute("onclick", "currentSlide(" + (i + 1) + ")");
        dotContainer.appendChild(dot);
    }

    // Initially activate the first slide and dot
    currentSlide(1);
});

// Start the slideshow
showSlides();
