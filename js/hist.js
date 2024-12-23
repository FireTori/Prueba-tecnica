const juegosContainer = document.querySelector('.juegos-container');

// Variables para controlar el estado del arrastre
let isDown = false; // Indica si el mouse está presionado
let startX; // Almacena la posición inicial del mouse en el eje X
let scrollLeft;

// Evento que se activa al presionar el botón del mouse sobre el contenedor
juegosContainer.addEventListener('mousedown', (e) => {
    isDown = true; // Cambia el estado a "arrastrando"
    juegosContainer.classList.add('active'); // Añade una clase para indicar que está activo
    startX = e.pageX - juegosContainer.offsetLeft; // Calcula la posición inicial del mouse
    scrollLeft = juegosContainer.scrollLeft; // Guarda la posición de desplazamiento actual
});

// Evento que se activa cuando el mouse sale del contenedor
juegosContainer.addEventListener('mouseleave', () => {
    isDown = false; // Cambia el estado a "no arrastrando"
    juegosContainer.classList.remove('active'); // Elimina la clase activa
});

// Evento que se activa al soltar el botón del mouse
juegosContainer.addEventListener('mouseup', () => {
    isDown = false; // Cambia el estado a "no arrastrando"
    juegosContainer.classList.remove('active'); // Elimina la clase activa
});

// Evento que se activa al mover el mouse sobre el contenedor
juegosContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return; // Si no se está arrastrando, salir de la función
    e.preventDefault(); // Previene el comportamiento predeterminado del mouse
    const x = e.pageX - juegosContainer.offsetLeft; // Calcula la posición actual del mouse
    const walk = (x - startX) * 2; // Calcula la distancia de desplazamiento (ajustando la velocidad)
    juegosContainer.scrollLeft = scrollLeft - walk; // Actualiza la posición de desplazamiento del contenedor
});