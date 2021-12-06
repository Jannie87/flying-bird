window.addEventListener('load', main);

/**
 * @type {HTMLImageElement}
 */
let imageElement;

//state
const size = 20;
const speed = 0.4;
const position = {
    top: 0,
    left:-size,
}


function main() {
    imageElement = document.querySelector('img');
    imageElement.style.width = size + '%';
    setInterval(moveBird, 20);
}


function moveBird() {
    position.left += speed;
    if (position.left > 100) {
        position.left = -size;
    }
    imageElement.style.left = position.left + '%';
}