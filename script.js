// Kate Keefe, Economic7Principles JavaScript functionality

/******************** HTML Components ********************/
const mainSlide = document.getElementById("mainSlide")
const slide2 = document.getElementById("slide2")
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
changeAccent("#2a2aa1") // Loads in nicely


/******************** Fill the Slide ********************/
var currentSlide = 0
var onMainSlide = true

function loadSlide(slide, number) {
    // Load info into the given slide
}

/******************** Move the Slides ********************/
// document.body.clientWidth // get the width of the screen

back.onclick = function() {
    console.log("switching back")
    // Disable arrow buttons
    // Move slides into position
    // Fill slides with correct info
    // Turn on transition-duration 2.0s
    // Move slides to new position
    // Switch classes for centerSlide
    // Update currentSlide #
    // Enable arrow buttons
}

forward.onclick = function() {
    console.log("switching forward")
}