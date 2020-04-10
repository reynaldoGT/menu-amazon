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
grid.addEventListener('mouseleave', () => {
    if (!esDispositivoMovil()) {
        grid.classList.remove('active');
    }
})
// =============================
// Para acceder a cada elemmento dentro de la categoria
// =============================
document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
    elemento.addEventListener('mouseenter', (e) => {

        if (!esDispositivoMovil()) {
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
        }
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
        contenedorEnlacesNav.classList.add('active');
        document.querySelector('body').style.overflow = 'hidden';
    }
});

// =============================
// click en boton para mostrar todos los departamentos
// en modo movil
// =============================
const btnCerrarMenu = document.getElementById('btn-menu-cerrar');

btnDepartamento.addEventListener('click', (e) => {
    e.preventDefault();
    grid.classList.add('active');
    btnCerrarMenu.classList.add('active');
});

// =============================
// boton de regresar en el meniu de categoria
// =============================

document.querySelector('#grid .categorias .btn-regresar').addEventListener('click', (e) => {
    e.preventDefault();
    grid.classList.remove('active');
    btnCerrarMenu.classList.remove('active');
})

const contenedorSubCategorias = document.querySelector('#grid .container-subcategorias');

document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
    elemento.addEventListener('click', (e) => {
        if (esDispositivoMovil()) {
            console.log('agregaste el active')
            contenedorSubCategorias.classList.add('active')

            document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
                categoria.classList.remove('active');
                if (categoria.dataset.categoria == e.target.dataset.categoria) {
                    console.log('agregaste el active')
                    categoria.classList.add('active');
                }
            });
        }
    });
});

document.querySelectorAll('#grid .container-subcategorias .btn-regresar').forEach((boton) => {
    boton.addEventListener('click', (e) => {
        e.preventDefault();
        contenedorSubCategorias.classList.remove('active');
    });

});

btnCerrarMenu.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('#menu .active').forEach((elemento) => {
        elemento.classList.remove('active');
    });

    document.querySelector('body').style.overflow = 'visible';

})