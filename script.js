// Kate Keefe, Economic7Principles JavaScript functionality

/******************** HTML Components ********************/
const mainSlide = document.getElementById("mainSlide")
const secondSlide = document.getElementById("slide2")
const thirdSlide = document.getElementById("slide3")
const back = document.getElementById("back")
const forward = document.getElementById("forward")

/******************** Change Accent Color ********************/
// Print Color
// console.log(getComputedStyle(document.body).getPropertyValue('--accent'))

function changeAccent(color) {
    document.documentElement.style.setProperty('--accent', color)
}

/******************** Fill the Slide ********************/
// Copy first slide for three
secondSlide.innerHTML = mainSlide.innerHTML
thirdSlide.innerHTML = mainSlide.innerHTML

var currentSlide = 0

// Load info into the given slide
function loadSlide(slide, info) {
    // Title
    slide.children[0].innerHTML = info.title
    // Description
    slide.children[2].rows[0].cells[0].children[1].innerHTML = info.description
    // Image
    slide.children[2].rows[0].cells[1].firstChild.setAttribute("src", info.image)
    // Example 1
    slide.children[2].rows[1].cells[0].children[1].innerHTML = info.example1
    // Example 2
    slide.children[2].rows[1].cells[1].children[1].innerHTML = info.example2
    // Color
    changeAccent(info.color)

    // Change current slide number
    document.getElementById("slidesCount").innerHTML = slideIndex + 1
}

/******************** Move the Slides ********************/
var position = ["-700px", "calc(50% - 325px)", "105%"]
var allSlides = [secondSlide, mainSlide, thirdSlide]
var current = 1;

for (let s = 0; s < allSlides.length; s++) {
    allSlides[s].style.left = position[s]
}

// Transitions work/tested on chrome, rip other browsers but chrome's different
function changeSlide(direction) {
    if (direction == -1) {
        for (let s = 0; s < allSlides.length; s++) {
            if (allSlides[s].style.left == position[0]) {
                allSlides[s].style.left = position[1]
                current = s
                allSlides[s].classList.remove("hiddenSlide")
            } else if (allSlides[s].style.left == position[1]) {
                allSlides[s].style.left = position[2]
                allSlides[s].classList.add("hiddenSlide")
            } else if (allSlides[s].style.left == position[2]) {
                allSlides[s].style.left = position[0]
            }
        }
    } else {
        for (let s = 0; s < allSlides.length; s++) {
            if (allSlides[s].style.left == position[0]) {
                allSlides[s].style.left = position[2]
            } else if (allSlides[s].style.left == position[1]) {
                allSlides[s].style.left = position[0]
                allSlides[s].classList.add("hiddenSlide")
            } else if (allSlides[s].style.left == position[2]) {
                allSlides[s].style.left = position[1]
                current = s
                allSlides[s].classList.remove("hiddenSlide")
            }
        }
    }

    // console.log(allSlides[current].id)    
}
// Initially load in the slides
changeSlide(1)
changeSlide(1)
changeSlide(1)
loadSlide(allSlides[current], slides[slideIndex])

back.onclick = function() {
    if (slideIndex != 0) {
        slideIndex--
        changeSlide(-1)
        loadSlide(allSlides[current], slides[slideIndex])
    }

    // Disable arrow buttons
    // (done) Move slides into position
    // (done) Fill slides with correct info
    // (done) Turn on transition-duration 2.0s
    // (done) Move slides to new position
    // (done) Switch classes for centerSlide
    // (done) Update currentSlide #
    // Enable arrow buttons
}

forward.onclick = function() {
    if (slideIndex != slides.length - 1) {
        slideIndex++
        changeSlide(1)
        loadSlide(allSlides[current], slides[slideIndex])
    }
}

/******************** Call Slides Through Nav Buttons ********************/
function callSlide(index) {
    if (slideIndex != index) {
        slideIndex = index
        changeSlide(1)
        loadSlide(allSlides[current], slides[slideIndex])
    }
}