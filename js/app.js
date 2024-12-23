const prevbtn = document.getElementById('buttonprev')
const nextbtn = document.getElementById('buttonnext')
const prevbtn1 = document.getElementById('buttonprev1')
const nextbtn1 = document.getElementById('buttonnext1')
const prevbtn2 = document.getElementById('buttonprev2')
const nextbtn2 = document.getElementById('buttonnext2')
const prevbtn3 = document.getElementById('buttonprev3')
const nextbtn3 = document.getElementById('buttonnext3')



/* scroll multiple */
var itemWidth = $('#carousel .carousel-item').width()

var scrollPosition = 0

/* usando botones personalizados */
nextbtn.addEventListener('click', () => {
    scrollPosition = scrollPosition + itemWidth
    $('#carousel .carousel-inner').animate({scrollLeft: scrollPosition}, 600)
})

prevbtn.addEventListener('click', () => {
    scrollPosition = scrollPosition - itemWidth
    $('#carousel .carousel-inner').animate({scrollLeft: scrollPosition}, 600)
})

/* Carrusel 2 */
var itemWidth = $('#carousel1 .carousel-item').width()

var scrollPosition = 0

/* usando botones personalizados */
nextbtn1.addEventListener('click', () => {
    scrollPosition = scrollPosition + itemWidth
    $('#carousel1 .carousel-inner').animate({scrollLeft: scrollPosition}, 600)
})

prevbtn1.addEventListener('click', () => {
    scrollPosition = scrollPosition - itemWidth
    $('#carousel1 .carousel-inner').animate({scrollLeft: scrollPosition}, 600)
})

/* Carrusel 3 */
var itemWidth = $('#carousel2 .carousel-item').width()

var scrollPosition = 0

/* usando botones personalizados */
nextbtn2.addEventListener('click', () => {
    scrollPosition = scrollPosition + itemWidth
    $('#carousel2 .carousel-inner').animate({scrollLeft: scrollPosition}, 600)
})

prevbtn2.addEventListener('click', () => {
    scrollPosition = scrollPosition - itemWidth
    $('#carousel2 .carousel-inner').animate({scrollLeft: scrollPosition}, 600)
})

/* Carrusel 4 */
var itemWidth = $('#carousel3 .carousel-item').width()

var scrollPosition = 0

/* usando botones personalizados */
nextbtn3.addEventListener('click', () => {
    scrollPosition = scrollPosition + itemWidth
    $('#carousel3 .carousel-inner').animate({scrollLeft: scrollPosition}, 600)
})

prevbtn3.addEventListener('click', () => {
    scrollPosition = scrollPosition - itemWidth
    $('#carousel3 .carousel-inner').animate({scrollLeft: scrollPosition}, 600)
})