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


document.addEventListener('wheel', handleScroll);

function handleScroll(event) {
    // Check if the scrolling event originated from the .board element
    const isScrollOnBoard = event.target.closest('.board') === board;

    if (isScrollOnBoard) {
        // Determine the direction of the scroll
        const direction = event.deltaY > 0 ? 'down' : 'up';

        // Update the number based on the scroll direction
        if (direction === 'up') {
            num++;
        } else {
            if (num > 0) {
                num--;
            }
        }

        // Update the displayed number
        board.textContent = num;

        // Prevent the default scroll behavior
        event.preventDefault();
    }
}