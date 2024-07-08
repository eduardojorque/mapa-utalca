// Función para contar los valores true en un objeto
function contarValoresTrueEnObjeto(obj) {
    let totalTrue = -2;

    Object.values(obj).forEach(value => {
        if (Array.isArray(value) && value[0] === true) {
            totalTrue++;
        }
    });

    return totalTrue;
}

// Seleccionar el contenedor donde se agregarán los datos
const dataContainer = document.getElementById('data-container');

// Iterar sobre los elementos del array `datos`
datos.forEach(item => {
    // Contar los valores true en el objeto actual
    const totalTrue = contarValoresTrueEnObjeto(item);

    // Crear un nuevo div para cada elemento
    const div = document.createElement('div');
    
    // Añadir el contenido al div
    div.innerHTML = `
        <span>${item.id}</span>
        <a href="#" data-id="${item.id}">${item.nombre[1]}</a>
        <article>${totalTrue} de 8 <b>Recursos</b></article>
    `;
    
    // Añadir el div al contenedor
    dataContainer.appendChild(div);

    // Añadir un event listener al enlace para abrir el modal y mostrar los datos
    div.querySelector('a').addEventListener('click', function(event) {
        event.preventDefault();
        const id = parseInt(this.getAttribute('data-id'));
        mostrarDatos(id);
        $('.modalmapa').modal('show');
    });
});

// Código para hacer que el menú se quede fijo en la parte superior
document.addEventListener('DOMContentLoaded', function () {
    var menu = document.getElementById('menu');
    var sticky = menu.offsetTop;

    function stickMenu() {
        if (window.pageYOffset >= sticky) {
            menu.classList.add('sticky');
        } else {
            menu.classList.remove('sticky');
        }
    }

    window.onscroll = function () {
        stickMenu();
    };
});

// Efecto suave para bajar y subir
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('Service Worker registrado con éxito:', registration);
        })
        .catch(error => {
          console.log('Error al registrar el Service Worker:', error);
        });
    });
  }
