// JS for Navigation (goes with navigation.css)
// Creates navigation buttons so they don't have to be copied

const navBtn = document.getElementById("navBtn")

const navTitles = ["Scarcity Forces Tradeoffs", "Cost vs. Benefits", "People Think at the Margin", "Incentives Matter", "Trade Makes People Better", "Markets Coordinate Trade", "Future Consequences Count"]

let navDots = document.createElement("h2")
navDots.innerHTML = "..."
navBtn.appendChild(navDots)

var navigationDiv = document.createElement("div")
navigationDiv.setAttribute("id", "navigation")

for (let i = 0; i < navTitles.length; i++) {
    console.log("doing the thing")
    let row = document.createElement("button")
    row.innerHTML = navTitles[i]

    // row.setAttribute("onclick", ("callSlides(i)"))

    navigationDiv.appendChild(row)
}
navBtn.appendChild(navigationDiv)