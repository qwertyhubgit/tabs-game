const board = document.querySelector('#board');
const BLOCKS_COUNT = 944

const colors = ['#47fc62', '#d8fc47', '#fc9247', '#fa2323', '#fa2372', '#3523fa']

for (let i = 0; i < BLOCKS_COUNT; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('pointermove', () => setColor(square))
    square.addEventListener('pointerleave', () => removeColor(square))

    board.append(square);
}

function setColor(square) {
    const color = Math.floor(Math.random() * colors.length)
    square.style.boxShadow = `0 0 2px ${colors[color]}, 0 0 10px ${colors[color]}`
    square.style.background = `${colors[color]}`
}

function removeColor(square) {
    square.style.boxShadow = ''
    square.style.background = '#1d1d1d'
}