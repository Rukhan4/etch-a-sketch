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
slider.addEventListener('input', function (col) {
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

const clear = document.querySelector("#reset");
reset.addEventListener('click', function () {
    let cell = grid.children;
    for (let i = 0; i < cell.length; i++) {
        cell[i].style.backgroundColor = "white";
    }
})

function randomColor() {
    let ltrs = "0123456789ABCDEF";
    let finalColor = "#";
    for (let i = 0; i < 6; i++) {
        finalColor += ltrs[Math.floor(Math.random() * 16)];
    }
    return finalColor;
}

let options = document.querySelectorAll("button");

options.forEach(button => {
    button.addEventListener('click', function (e) {
        let col = "";
        choice = e.target.getAttribute("id");
        //console.log(choice);
        if (choice === "blk") {
            col = "black";
        } else if (choice === "rgb") {
            col = randomColor();
            //console.log(col);
        }
    })
})


defaultGrid();