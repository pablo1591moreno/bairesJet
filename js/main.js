document.addEventListener("DOMContentLoaded", function () {
    var body = document.body;

    // Agregar la clase 'is-preload' al cargar la página
    body.classList.add("is-preload");

    // Eliminar la clase 'is-preload' después de un tiempo (en este caso, 100ms)
    setTimeout(function () {
        body.classList.remove("is-preload");
    }, 100);
});


//--------------------------------------------------------- MENU HAMBURGUESA
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

var avionesDatabase = {
    1: {
        title: "Avion1",
        description: "Descripción del Avion 1",
        images: 6
    },
    2: {
        title: "Avion2",
        description: "Descripción del Avion 2",
        images: 8
    },
    3: {
        title: "Avion3",
        description: "Descripción del Avion 3",
        images: 8
    },
    4: {
        title: "Avion4",
        description: "Descripción del Avion 4",
        images: 8
    }
};

var articles = document.querySelectorAll('.tipos article');

// Agregar un evento de clic a cada artículo
articles.forEach(function (article) {
    article.addEventListener('click', function (event) {
        // Prevenir la acción predeterminada del enlace
        event.preventDefault();

        // Obtener el ID del avión desde el atributo data-id
        var id = article.dataset.id;

        // Obtener la información del avión desde la base de datos
        var avionInfo = avionesDatabase[id];

        // Mostrar el modal con la información del avión
        showModal(avionInfo);
    });
});

// Función para mostrar el modal con la información del avión
function showModal(avionInfo) {
    // Obtener el contenedor de imágenes del modal
    var modalImages = document.getElementById('modal-images');

    // Eliminar cualquier imagen existente del modal
    modalImages.innerHTML = '';

    // Agregar las imágenes al modal (puedes personalizar esto según tus necesidades)
    for (var i = 1; i <= avionInfo.images; i++) {
        var img = document.createElement('img');
        img.src = '/img/'+ avionInfo.title +'/'+ i +'.png';
        modalImages.appendChild(img);
    }

    // Mostrar el modal
    var modal = document.getElementById('myModal');
    modal.classList.add('show');

    // Agregar el título y la descripción al modal
    var modalTitle = document.getElementById('modal-title');
    modalTitle.innerHTML = avionInfo.title;

    var modalDescription = document.getElementById('modal-description');
    modalDescription.innerHTML = avionInfo.description;

    // Cerrar el modal al hacer clic en la "x" o fuera del contenido del modal
    var closeModal = document.querySelector('.close');
    closeModal.addEventListener('click', closeModalHandler);
    window.addEventListener('click', closeModalHandler);

    function closeModalHandler(event) {
        if (event.target === modal || event.target === closeModal) {
            modal.classList.remove('show');
            // Remover el h3 del modal al cerrarlo
            modalContent.removeChild(modalContent.firstChild);
            // Remover los event listeners para evitar problemas de duplicación
            closeModal.removeEventListener('click', closeModalHandler);
            window.removeEventListener('click', closeModalHandler);
        }
    }
}
//--------------------------------------------------------- form

function validateNumberInput(input) {
    input.value = input.value.replace(/\D/g, ''); // Eliminar caracteres no numéricos
  }
  

