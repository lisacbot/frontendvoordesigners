var slideIndex = 1;
showSlides(slideIndex);

// Next/prev controls
function plusSlides (n) {
    showSlides(slideIndex += n);
}

function currentSlide (n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider");
    var dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active;"
}
//
// document.onkeydown = function(e) {
//        switch (e.keyCode) {
//            case 37:
//                //left
//                e.preventDefault();
//                slideIndex--;
//                showSlides(slideIndex);
//                break;
//            case 39:
//                //right
//                e.preventDefault();
//                slideIndex++;
//                showSlides(slideIndex);
//                break;
//        }
//    }