window.addEventListener('load', main);

/**
 * @type {HTMLImageElement}
 */
let imageElement;

//state
const speed = 0.4;
const position = {
    top: 0,
    left:0,
}


function main() {
    imageElement = document.querySelector('img');
    setInterval(moveBird, 20);
}


function moveBird() {
    position.left += speed;
    if (position.left > 100) {
        position.left = -40;
    }
    imageElement.style.left = position.left + '%';
}