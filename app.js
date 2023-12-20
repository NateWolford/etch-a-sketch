function createGrid(size) {
    const container = document.getElementById('grid-container');
    container.innerHTML = ''; 

    const squareSize = 440 / size; 
    container.style.width = '440px'; 

    let isMouseDown = false; 

    document.addEventListener('mousedown', function(e) {
        if (e.button === 0) {
            isMouseDown = true; 
            if (e.target.className === 'square') {
                e.target.style.backgroundColor = '#555';
            }
        }
    }, false);

    document.addEventListener('mouseup', function() {
        isMouseDown = false;
    }, false);

    const totalSquares = size * size;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        
        square.addEventListener('mouseenter', function() {
            if (isMouseDown) {
                this.style.backgroundColor = '#555';
            }
        });

        container.appendChild(square);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    createGrid(16); 

    document.getElementById('grid-container').addEventListener('dragstart', function(e) {
        e.preventDefault();
    });

    document.getElementById('new-grid').addEventListener('click', function() {
        let gridSize = prompt("Enter the number of squares per side for the new grid (max 100):", 16);
        
        if (!gridSize || isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
            alert("Please enter a number between 1 and 100.");
            return; 
        }

        gridSize = parseInt(gridSize, 10);
        createGrid(gridSize);
    });
});

document.getElementById('clear-grid').addEventListener('click', function() {

    document.querySelectorAll('.square').forEach(square => {
        square.style.backgroundColor = 'white';
    });
});
