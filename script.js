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

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const slider = document.querySelector("#slider");
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

// Chooses a random rgb color
function randomColor() {
    let ltrs = "0123456789ABCDEF";
    let finalColor = "#";
    for (let i = 0; i < 6; i++) {
        finalColor += ltrs[Math.floor(Math.random() * 16)];
    }
    return finalColor;
}

// Lets user pick one of black, rgb or set their own color to doodle with
let options = document.querySelectorAll("button");
options.forEach(button => {
    button.addEventListener('click', function (e) {
        choice = e.target.getAttribute('id');
        console.log(choice);
        if (choice === 'blk') {
            makeGrid("black");
        } else if (choice === 'erase') {
            makeGrid("white");
        } else if (choice === 'rgb') {
            makeGrid("rgb");
        } else if (choice === "col") {
            const chooseColor = document.querySelector("#col");
            chooseColor.addEventListener('input', function () {
                //console.log(chooseColor.value);
                makeGrid(chooseColor.value);
            });
        }
    })
});

// lets user use the color chosen on the grid
function makeGrid(col) {
    let val = document.getElementById("slider").value;
    let cell = grid.children;
    for (let i = 0; i < (val * val); i++) {
        cell[i].addEventListener('mouseover', function (e) {
            if (col === "rgb") {
                e.target.style.backgroundColor = randomColor();
            } else {
                e.target.style.backgroundColor = col;
            }
        })
    }
}
// Allows user to reset the grid
const clear = document.querySelector("#reset");
reset.addEventListener('click', function () {
    let cell = grid.children;
    for (let i = 0; i < cell.length; i++) {
        cell[i].style.backgroundColor = "white";
    }
})

defaultGrid();