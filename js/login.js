const IniSesion = document.getElementById('login')
const original = document.getElementById('logout')
const contenedor = document.getElementById('contenedor')

const Sesion = document.getElementById('Sesion')

/* Simulacro de sesión iniciada (sólo funciona en el index) */
IniSesion.addEventListener('click', ()=>{
    /* Esconder los elementos anteriores */
    original.parentNode.removeChild(original)
    contenedor.parentNode.removeChild(contenedor)

    /* Mostrar el nuevo */
    Sesion.style.display = 'flex'
})

