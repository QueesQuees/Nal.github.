// My silde Hot News
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function slideFunction(n) {
    showSlides(slideIndex += n);
}


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    // ẩn hết các slide
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    //chỉ hiênj một slide
    slides[slideIndex - 1].style.display = "block";
}


// Sticky navbar
window.onscroll = function() { stickyFunction() };
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky-top")
    } else {
        navbar.classList.remove("sticky-top")
    }
}