const juegosContainer = document.querySelector('.juegos-container');

let isDown = false;
let startX;
let scrollLeft;

juegosContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    juegosContainer.classList.add('active');
    startX = e.pageX - juegosContainer.offsetLeft;
    scrollLeft = juegosContainer.scrollLeft;
});

juegosContainer.addEventListener('mouseleave', () => {
    isDown = false;
    juegosContainer.classList.remove('active');
});

juegosContainer.addEventListener('mouseup', () => {
    isDown = false;
    juegosContainer.classList.remove('active');
});

juegosContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return; // Si no se está arrastrando, salir
    e.preventDefault();
    const x = e.pageX - juegosContainer.offsetLeft;
    const walk = (x - startX) * 2; // Ajusta la velocidad de desplazamiento
    juegosContainer.scrollLeft = scrollLeft - walk;
});
