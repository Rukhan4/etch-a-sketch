const grid = document.querySelector(".grid");

function createGrid() {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        div.classList.add('cell');
        div.addEventListener('mouseover', function (e) {
            e.target.style.backgroundColor = "black";
        })
        grid.append(div);
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