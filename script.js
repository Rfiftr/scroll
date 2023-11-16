const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const board = document.querySelector('.board')

let num = 0
plus.addEventListener('click', plusNumber)
minus.addEventListener('click', minusNumber)

function plusNumber() {
    num = parseInt(board.textContent)
    num++
    board.textContent = num
}

function minusNumber() {
    num = parseInt(board.textContent)
    num--
    board.textContent = num
}


let touchStartY;

board.addEventListener('touchstart', handleTouchStart);
board.addEventListener('touchmove', handleTouchMove);

function handleTouchStart(event) {
    // Store the initial touch position
    touchStartY = event.touches[0].clientY;
}

function handleTouchMove(event) {
    // Determine the direction of the touch move
    const touchMoveY = event.touches[0].clientY;
    const direction = touchMoveY > touchStartY ? 'down' : 'up';

    // Update the number based on the touch direction
    if (direction === 'up') {
        num++;
    } else {
        num--;
    }

    // Update the displayed number
    board.textContent = num;

    // Update the initial touch position for the next move
    touchStartY = touchMoveY;

    // Prevent the default touch move behavior
    event.preventDefault();
}
