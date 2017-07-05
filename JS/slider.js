var index = 0,
    currentIndex = 0,
    i,
    slides = document.getElementsByClassName("slide");

for (i = 0; i < slides.length; i += 1) {
    window.console.log(i);
    slides[i].style.display = "none";
}

slides[0].style.display = "block";

function displaySlide(slideIndex) {
    "use strict";
    if (slideIndex >= slides.length) {

        index = 0;

    } else if (slideIndex < 0) {

        index = slides.length - 1;

    } else {

        index = slideIndex;

    }

    slides[index].style.display = "block";
    slides[currentIndex].style.display = "none";

    currentIndex = index;

}

function nextSlide(num) {
    "use strict";
    index += num;
    displaySlide(index);
}

function previousSlide(num) {
    "use strict";
    index -= num;
    displaySlide(index);
}



