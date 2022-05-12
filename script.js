const grid = document.querySelector(".grid");

function defaultGrid() {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        div.classList.add('cell');
        div.addEventListener('mouseover', function (e) {
            e.target.style.backgroundColor = "black";
        })
        grid.appendChild(div);
    }
};

function makeRGB() {
    let ltrs = "0123456789ABCDEF";
    let finalColor = "#";
    for (let i = 0; i < 6; i++) {
        finalColor += ltrs[Math.floor(Math.random() * 16)];
    }
    return finalColor;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const slider = document.querySelector(".slider");
const sliderValue = document.querySelector(".value");
slider.addEventListener('input', function () {
    let val = document.getElementById("slider").value;
    sliderValue.textContent = val;
    removeAllChildNodes(grid);
    grid.setAttribute("style", `grid-template-columns: repeat(${val}, 2fr);
    grid-template-rows: repeat(${val}, 2fr);`);
    for (let j = 0; j < (val * val); j++) {
        const div = document.createElement("div");
        div.classList.add("cell");
        div.addEventListener("mouseover", function (e) {
            e.target.style.backgroundColor = "black";
        })
        grid.appendChild(div);
    }
});

defaultGrid();