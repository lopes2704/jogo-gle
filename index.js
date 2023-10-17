const gle = document.querySelector('.gle');
const tubo = document.querySelector('.tubo');
const pulo = () => {
    gle.classList.add('pulo');

    setTimeout(() => {
        gle.classList.remove('pulo');

    }, 500);

}



const loop = setInterval(() => {
    const tuboPosition = tubo.offsetLeft;
    const glePosition = +window.getComputedStyle(gle).bottom.replace('px', '');
    if (tuboPosition <= 120 && tuboPosition > 0 && glePosition < 128) {

        tubo.style.animation = 'none';
        tubo.style.left = `${tuboPosition}px`;

        gle.style.animation = 'none';
        gle.style.bottom = `${glePosition}px`;
    }
}, 10)



document.addEventListener('keydown', pulo);

