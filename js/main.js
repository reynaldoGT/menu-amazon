const btnDepartamento = document.getElementById('btn-departamentos');
const grid = document.getElementById('grid');

const esDispositivoMovil = () => {
    return window.innerWidth <= 800;
}

btnDepartamento.addEventListener('mouseover', () => {
    if (!esDispositivoMovil()) {
        grid.classList.add('active');
    }
})
btnDepartamento.addEventListener('mouseleave', () => {
    if (!esDispositivoMovil()) {
        grid.classList.remove('active');
    }
})
// =============================
// Para acceder a cada elemmento dentro de la categoria
// =============================
document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
    elemento.addEventListener('mouseenter', (e) => {
        console.log(e.target.dataset.categoria);

        document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {

            console.log(categoria.dataset.categoria);

            //quitar categoria antes de mostrar otra catagoria
            categoria.classList.remove('active');

            //cuando el data set sea igual se va activar el activo
            if (categoria.dataset.categoria === e.target.dataset.categoria) {

                categoria.classList.add('active');

            }
        })

    })
});

// listener para movile responsive

const contenedorEnlacesNav = document.querySelector('#menu .container-enlaces-nav');

document.querySelector('#btn-menu-barras').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target);
    // si el contenedor esta abierto se cierra y biceversa
    if (contenedorEnlacesNav.classList.contains('active')) {
        document.querySelector('body').style.overflow = 'visible';
        // si no esta abierto se va a poder scroll
        contenedorEnlacesNav.classList.remove('active')
    } else {
        document.querySelector('body').style.overflow = 'hidden';
        contenedorEnlacesNav.classList.add('active');
    }



});