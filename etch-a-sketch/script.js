const gridWidth = 600;
let container = document.querySelector('.container');

// initial grid size
for (let i = 0; i < 16 ** 2; i++) {
    let square = document.createElement('div');
    square.style.width = `${gridWidth / 16}px`;
    square.style.height = `${gridWidth / 16}px`;
    square.classList.add('square');
    square.addEventListener('mouseover', (event) => {
        event.target.classList.add('hovering');
    })
    container.appendChild(square);
}

let gridSizeBtn = document.getElementById('gridSizeBtn');
gridSizeBtn.addEventListener("click", changeGridSize);

function changeGridSize() {
    gridSize = Number(prompt("How many squares per side?"));
    container.innerHTML = '';
    for (let i = 0; i < gridSize ** 2; i++) {
        let square = document.createElement('div');
        square.style.width = `${gridWidth / gridSize}px`;
        square.style.height = `${gridWidth / gridSize}px`;
        square.classList.add('square');
        square.addEventListener('mouseover', (event) => {
            event.target.classList.add('hovering');
        })
        container.appendChild(square);
    }
}