var slideIndex = 1;
showSlides(slideIndex);

/* FUNCTIONS */

function showSlides(index) {
    console.log("Entering showSlides " + index);
    var slides = document.getElementsByClassName("slide-image");
    var circles = document.getElementsByClassName("circle");
    if (index > slides.length) {
        slideIndex = 1;
    } else if (index < 1) {
        slideIndex = slides.length;
    } else {
        slideIndex = index;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (var i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace(" white", "");
    }
    slides[slideIndex-1].style.display = "block";
    circles[slideIndex-1].className += " white";
    console.log("Exiting showSlides " + index);
}

//*CREATE CIRCLE FUNCTIONALITY *//
var circles = document.querySelectorAll('.circle');

circles.forEach(circleFunctionality); 

function circleFunctionality(item, index) {
        index = index;
        index += 1;
    item.addEventListener("click", function() {
        showSlides(index);
        console.log('Circle ' + index + ' clicked');
    })
}




/* EVENT LISTENERS */

var leftArrow = document.getElementById("left-arrow");
var rightArrow = document.getElementById("right-arrow");

if (leftArrow.addEventListener) {
    leftArrow.addEventListener("click", function() {
        showSlides(slideIndex-=1)
    }, false);
    rightArrow.addEventListener("click", function() {
        showSlides(slideIndex+=1)
    }, false);
} else if (leftArrow.attachEvent) {
    leftArrow.attachEvent("onclick", function() {
        showSlides(slideIndex-=1)
    });
    rightArrow.attachEvent("onclick", function() {
        showSlides(slideIndex+=1)
    });
}
