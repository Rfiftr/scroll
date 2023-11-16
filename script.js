const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const board = document.querySelector('.board');
const boardPlus = document.querySelector('.board-plus');
const boardMinus = document.querySelector('.board-minus');

let num = 0;

plus.addEventListener('click', plusNumber);
minus.addEventListener('click', minusNumber);

function plusNumber() {
    num++;
    board.textContent = num;
    updateNumbers();
}

function minusNumber() {
    if (num > 0) {
        num--;
        board.textContent = num;
        updateNumbers();
    }
}

function updateNumbers() {
    boardPlus.textContent = num + 1;

    if (num > 0) {
        boardMinus.textContent = num - 1;
    } else {
        boardMinus.textContent = 'ㅤ';
    }
}

document.addEventListener('wheel', handleScroll);
document.addEventListener('touchstart', handleTouchStart);
document.addEventListener('touchmove', handleTouchMove);

let touchStartY;

function handleScroll(event) {
    const isScrollOnBoard = event.target.closest('.board') === board;
    if (isScrollOnBoard) {
        const direction = event.deltaY > 0 ? 'down' : 'up';
        if (direction === 'up') {
            num++;
            updateNumbers();
        } else {
            if (num > 0) {
                num--;
                updateNumbers();
            }
        }
        board.textContent = num;
        event.preventDefault();
    }
}

function handleTouchStart(event) {
    touchStartY = event.touches[0].clientY;
}

function handleTouchMove(event) {
    const touchMoveY = event.touches[0].clientY;
    const direction = touchMoveY > touchStartY ? 'down' : 'up';

    if (direction === 'up') {
        num++;
        updateNumbers();
    } else {
        if (num > 0) {
            num--;
            updateNumbers();
        }
    }

    touchStartY = touchMoveY;

    event.preventDefault();
}
