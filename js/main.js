

//--------------------------------------------------------- MENU HAMBURGUESA
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

//--------------------------------------------------------- MODAL
var avionesDatabase = {
    1: {
        title: "Gulfstream 5",
        description: "El G5 es un jet privado de gran tamaño, ideal para vuelos de largo alcance. Su cabina espaciosa y lujosa puede acomodar hasta 8-10 pasajeros en asientos reclinables. Equipado con un galley completo y un amplio baño, además de una bodega de equipaje trasera y APU para mayor comodidad en tierra.<br> *Los colores, materiales y modelos pueden variar según la disposición de las aeronaves.",
        images: 6
    },
    2: {
        title: "Challenger 600",
        description: "Explora la excelencia en viajes de larga distancia con el Challenger 600. Con una velocidad de crucero de aproximadamente 850 km/h y un alcance de alrededor de 7,400 km, este avión de lujo puede acomodar de 9 a 19 pasajeros. Equipado con dos motores General Electric CF34, el Challenger 600 redefine el vuelo de larga distancia.<br> *Los colores, materiales y modelos pueden variar según la disposición de las aeronaves.",
        images: 8
    },
    3: {
        title: "Learjet 60",
        description: "Experimenta la velocidad incomparable del Learjet 60, con una velocidad de crucero de 860 km/h. Este avión de lujo tiene un alcance de 4,000 km, capacidad para 8-9 pasajeros y está equipado con potentes motores Pratt & Whitney. Descubre el lujo en movimiento.<br> *Los colores, materiales y modelos pueden variar según la disposición de las aeronaves.",
        images: 6
    },
    4: {
        title: "Learjet 45",
        description: "El Learjet 45 es una aeronave de lujo y estilo moderno, con la cabina confortable que puede acomodar hasta 8 pasajeros en una configuración de doble club. Equipado con un galley completo y toilette, además de una bodega de equipaje y APU para mayor confort y comodidad en tierra.<br> *Los colores, materiales y modelos pueden variar según la disposición de las aeronaves.",
        images: 6
    },
    5: {
        title: "Learjet 35",
        description: "Sumérgete en la elegancia y rendimiento del Learjet 35. Con una velocidad de crucero de 850 km/h y un alcance de 3,500 km, este avión de alta gama ofrece capacidad para 6-8 pasajeros. Equipado con dos motores Garrett TFE731, el Learjet 35 es la definición de lujo en vuelo.<br> *Los colores, materiales y modelos pueden variar según la disposición de las aeronaves.",
        images: 6
    },
    6: {
        title: "Cessna Citation III",
        description: "Experimenta la potencia y eficiencia del Cessna Citation III. Con una velocidad de crucero de 850 km/h y un alcance de 3,600 km, este avión ejecutivo ofrece capacidad para 6-8 pasajeros. Equipado con dos motores Garrett TFE731, el Citation III es la elección perfecta para viajes de negocios.<br> *Los colores, materiales y modelos pueden variar según la disposición de las aeronaves.",
        images: 8
    },
    7: {
        title: "King air 200",
        description: "Descubre la elegancia y eficiencia del King Air 200. Con una velocidad de crucero de 525 km/h y un alcance de 3,800 km, este avión ofrece comodidad a 7-9 pasajeros. Equipado con motores Prat & Whitney PT6A, el King Air 200 redefine el viaje de negocios.<br> *Los colores, materiales y modelos pueden variar según la disposición de las aeronaves.",
        images: 8
    },
    8: {
        title: "King air 90",
        description: "Explora la versatilidad del King Air 90, con una velocidad de crucero variable de aproximadamente 400 km/h. Perfecto para vuelos cortos con un alcance de 2,100 km, este avión ofrece capacidad para 4-6 pasajeros y cuenta con motores Pratt & Whitney PT6A.<br> *Los colores, materiales y modelos pueden variar según la disposición de las aeronaves.",
        images: 8
    },
    9: {
        title: "Fairchild Metroliner III",
        description: "Descubre la comodidad y amplitud del Fairchild Metroliner III. Con una velocidad de crucero variable de alrededor de 500 km/h y un alcance de 2,300 km, este avión puede acomodar hasta 19 pasajeros. Equipado con motores Pratt & Whitney Canada PT6A, redefine el viaje grupal de alta gama.<br> *Los colores, materiales y modelos pueden variar según la disposición de las aeronaves.",
        images: 8
    },
    10: {
        title: "Navajo 350",
        description: "Descubre la versatilidad del Navajo 350, con una velocidad de crucero de 420 km/h y un alcance de 2,800 km. Este avión puede acomodar hasta 8 pasajeros, ofreciendo una experiencia de vuelo cómoda y eficiente para grupos más pequeños.<br> *Los colores, materiales y modelos pueden variar según la disposición de las aeronaves.",
        images: 6
    }
}


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
        img.src = 'img/' + avionInfo.title + '/' + i + '.png';
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


//--------------------------------------------------------- Whatsapp

document.getElementById('botonFlotante').addEventListener('click', function () {
    // Reemplaza el número de teléfono con el que deseas comunicarte en el siguiente enlace.
    var telefono = "+15612991396"; // Cambia esto con tu número de teléfono

    // Construir el enlace de WhatsApp
    var enlaceWhatsApp = "https://wa.me/" + telefono;

    // Abrir enlace en una nueva pestaña
    window.open(enlaceWhatsApp);
});




//---------------------------------------------------------- Animacion 

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(function(element) {
        if (isElementInViewport(element)) {
          element.classList.add('appear');
        }
      });
    });
  
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  });
  

  