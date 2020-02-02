// Kate Keefe, Economic7Principles JavaScript functionality

/******************** HTML Components ********************/
const mainSlide = document.getElementById("mainSlide")
const slide2 = document.getElementById("slide2")
const slide3 = document.getElementById("slide3")
// const title = document.getElementById("slideTitle")
// const description = document.getElementById("description")
// const example1 = document.getElementById("example1")
// const example2 = document.getElementById("example2")
const back = document.getElementById("back")
const forward = document.getElementById("forward")

/******************** Change Accent Color ********************/
// Print Color
// console.log(getComputedStyle(document.body).getPropertyValue('--accent'))

function changeAccent(color) {
    document.documentElement.style.setProperty('--accent', color)
}
changeAccent("#2ea9ab") // Loads in nicely


/******************** Fill the Slide ********************/
var currentSlide = 0
// var onMainSlide = true

// Load info into the given slide
function loadSlide(slide, info) {
    // Title
    slide.children[0].innerHTML = info.title
    // Description
    slide.children[2].rows[0].cells[0].firstChild.innerHTML = info.description
    // Image
    slide.children[2].rows[0].cells[1].firstChild.setAttribute("src", info.image)
    // Example 1
    slide.children[2].rows[1].cells[0].firstChild.innerHTML = info.example1
    // Example 2
    slide.children[2].rows[1].cells[1].firstChild.innerHTML = info.example2
    // Color
    changeAccent(info.color)

    // console.log(allSlides[current].children[2].rows[1].cells[0].firstChild.innerHTML)
}

/******************** Move the Slides ********************/
// document.body.clientWidth // get the width of the screen

var position = ["-700px", "calc(50% - 325px)", "100%"]
var allSlides = [slide2, mainSlide, slide3]
var current = 1;

for (let s = 0; s < allSlides.length; s++) {
    allSlides[s].style.left = position[s]
}

function changeSlide(direction) {
    // current += direction
    // if (current > 2)
    //     current = 0
    // else if (current < 0)
    //     current = 2

    // let hidden = 0
    if (direction == -1) {
        for (let s = 0; s < allSlides.length; s++) {
            if (allSlides[s].style.left == position[0]) {
                allSlides[s].style.left = position[1]
                current = s
                allSlides[s].classList.remove("hiddenSlide")
            } else if (allSlides[s].style.left == position[1]) {
                allSlides[s].style.left = position[2]
                // hidden = s
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
                // hidden = s
                allSlides[s].classList.add("hiddenSlide")
            } else if (allSlides[s].style.left == position[2]) {
                allSlides[s].style.left = position[1]
                current = s
                allSlides[s].classList.remove("hiddenSlide")
            }
        }
    }

    console.log(allSlides[current].id)    
}
changeSlide(1)
changeSlide(1)
changeSlide(1)

back.onclick = function() {
    // console.log("switching back")
    
    changeSlide(-1)

    
    loadSlide(allSlides[current], slides[0])


    // Disable arrow buttons
    // (done) Move slides into position
    // Fill slides with correct info
    // (done) Turn on transition-duration 2.0s
    // (done) Move slides to new position
    // (done) Switch classes for centerSlide
    // (done) Update currentSlide #
    // Enable arrow buttons
}

forward.onclick = function() {
    // console.log("switching forward")

    changeSlide(1)
}