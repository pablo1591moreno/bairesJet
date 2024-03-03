

//--------------------------------------------------------- MENU HAMBURGUESA
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

//--------------------------------------------------------- MODAL
var avionesDatabaseIn = {
    1: {
        title: "Gulfstream 5",
        description: "The G5 is a large private jet, ideal for long-range flights. Its spacious and luxurious cabin can accommodate up to 8-10 passengers in reclining seats. Equipped with a full galley and a spacious bathroom, as well as a rear luggage compartment and APU for greater ground comfort.<br> *Colors, materials, and models may vary depending on aircraft layout.",
        images: 2
    },
    2: {
        title: "Challenger 600",
        description: "Explore excellence in long-distance travel with the Challenger 600. With a cruising speed of approximately 850 km/h and a range of around 7,400 km, this luxury aircraft can accommodate 9 to 19 passengers. Equipped with two General Electric CF34 engines, the Challenger 600 redefines long-distance flight.<br> *Colors, materials, and models may vary depending on aircraft layout.",
        images: 2
    },
    3: {
        title: "Learjet 60",
        description: "Experience the unmatched speed of the Learjet 60, with a cruising speed of 860 km/h. This luxury aircraft has a range of 4,000 km, seating for 8-9 passengers, and is equipped with powerful Pratt & Whitney engines. Discover luxury in motion.<br> *Colors, materials, and models may vary depending on aircraft layout.",
        images: 2
    },
    4: {
        title: "Learjet 45",
        description: "The Learjet 45 is a modern luxury aircraft with a comfortable cabin that can accommodate up to 8 passengers in a double club configuration. Equipped with a full galley and toilet, as well as a luggage compartment and APU for greater comfort and convenience on the ground.<br> *Colors, materials, and models may vary depending on aircraft layout.",
        images: 2
    },
    5: {
        title: "Learjet 35",
        description: "Immerse yourself in the elegance and performance of the Learjet 35. With a cruising speed of 850 km/h and a range of 3,500 km, this high-end aircraft offers seating for 6-8 passengers. Equipped with two Garrett TFE731 engines, the Learjet 35 is the definition of luxury in flight.<br> *Colors, materials, and models may vary depending on aircraft layout.",
        images: 2
    },
    6: {
        title: "Learjet 31",
        description: "Discover the efficiency of the Learjet 31, a high-end air ambulance with a cruising speed of 820 km/h and a range of 3,000 km. Equipped with two Garrett TFE731-2 engines, it offers a reliable solution for transporting patients comfortably and safely. Its compact design and state-of-the-art medical equipment ensure a safe and comfortable flight for the patient and companion.<br>*Colors, materials, and models may vary depending on aircraft layout.",
        images: 2
    },
    7: {
        title: "Cessna Citation III",
        description: "Experience the power and efficiency of the Cessna Citation III. With a cruising speed of 850 km/h and a range of 3,600 km, this executive aircraft offers seating for 6-8 passengers. Equipped with two Garrett TFE731 engines, the Citation III is the perfect choice for business travel.<br> *Colors, materials, and models may vary depending on aircraft layout.",
        images: 2
    },
    8: {
        title: "King Air 200",
        description: "Discover the elegance and efficiency of the King Air 200. With a cruising speed of 525 km/h and a range of 3,800 km, this aircraft offers comfort to 7-9 passengers. Equipped with Pratt & Whitney PT6A engines, the King Air 200 redefines business travel.<br> *Colors, materials, and models may vary depending on aircraft layout.",
        images: 2
    },
    9: {
        title: "King Air 90",
        description: "Explore the versatility of the King Air 90, with a variable cruising speed of approximately 400 km/h. Perfect for short flights with a range of 2,100 km, this aircraft offers seating for 4-6 passengers and features Pratt & Whitney PT6A engines.<br> *Colors, materials, and models may vary depending on aircraft layout.",
        images: 2
    },
    10: {
        title: "Fairchild Metroliner III",
        description: "Discover the comfort and spaciousness of the Fairchild Metroliner III. With a variable cruising speed of around 500 km/h and a range of 2,300 km, this aircraft can accommodate up to 19 passengers. Equipped with Pratt & Whitney Canada PT6A engines, it redefines high-end group travel.<br> *Colors, materials, and models may vary depending on aircraft layout.",
        images: 2
    },
    11: {
        title: "Navajo 350",
        description: "Discover the versatility of the Navajo 350, with a cruising speed of 420 km/h and a range of 2,800 km. This aircraft can accommodate up to 8 passengers, offering a comfortable and efficient flight experience for smaller groups.<br> *Colors, materials, and models may vary depending on aircraft layout.",
        images: 2
    }
};


var avionesDatabaseEs = {
    1: {
        title: "Gulfstream 5",
        description: "El G5 es un jet privado de gran tamaño, ideal para vuelos de largo alcance. Su cabina espaciosa y lujosa puede acomodar hasta 8-10 pasajeros en asientos reclinables. Equipado con un galley completo y un amplio baño, además de una bodega de equipaje trasera y APU para mayor comodidad en tierra.<br> *Los colores, materiales y modelos pueden variar según la disposición de las aeronaves.",
        images: 2
    },
    2: {
        title: "Challenger 600",
        description: "Explora la excelencia en viajes de larga distancia con el Challenger 600. Con una velocidad de crucero de aproximadamente 850 km/h y un alcance de alrededor de 7,400 km, este avión de lujo puede acomodar de 9 a 19 pasajeros. Equipado con dos motores General Electric CF34, el Challenger 600 redefine el vuelo de larga distancia.<br> *Los colores, materiales y modelos pueden variar según la disposición de las aeronaves.",
        images: 2
    },
    3: {
        title: "Learjet 60",
        description: "Experimenta la velocidad incomparable del Learjet 60, con una velocidad de crucero de 860 km/h. Este avión de lujo tiene un alcance de 4,000 km, capacidad para 8-9 pasajeros y está equipado con potentes motores Pratt & Whitney. Descubre el lujo en movimiento.<br> *Los colores, materiales y modelos pueden variar según la disposición de las aeronaves.",
        images: 2
    },
    4: {
        title: "Learjet 45",
        description: "El Learjet 45 es una aeronave de lujo y estilo moderno, con la cabina confortable que puede acomodar hasta 8 pasajeros en una configuración de doble club. Equipado con un galley completo y toilette, además de una bodega de equipaje y APU para mayor confort y comodidad en tierra.<br> *Los colores, materiales y modelos pueden variar según la disposición de las aeronaves.",
        images: 2
    },
    5: {
        title: "Learjet 35",
        description: "Sumérgete en la elegancia y rendimiento del Learjet 35. Con una velocidad de crucero de 850 km/h y un alcance de 3,500 km, este avión de alta gama ofrece capacidad para 6-8 pasajeros. Equipado con dos motores Garrett TFE731, el Learjet 35 es la definición de lujo en vuelo.<br> *Los colores, materiales y modelos pueden variar según la disposición de las aeronaves.",
        images: 2
    },
    6: {
        title: "Learjet 31",
        description: "Descubre la eficiencia del Learjet 31, un avión ambulancia de alta gama con una velocidad de crucero de 820 km/h y un alcance de 3.000 km. Equipado con dos motores Garrett TFE731-2, ofrece una solución confiable para trasladar pacientes con comodidad y seguridad. Su diseño compacto y equipamiento médico de última generación garantizan un vuelo seguro y confortable para el paciente y el acompañante.<br>*Los colores, materiales y modelos pueden variar según la disposición de las aeronaves.",
        images: 2
    },
    7: {
        title: "Cessna Citation III",
        description: "Experimenta la potencia y eficiencia del Cessna Citation III. Con una velocidad de crucero de 850 km/h y un alcance de 3,600 km, este avión ejecutivo ofrece capacidad para 6-8 pasajeros. Equipado con dos motores Garrett TFE731, el Citation III es la elección perfecta para viajes de negocios.<br> *Los colores, materiales y modelos pueden variar según la disposición de las aeronaves.",
        images: 2
    },
    8: {
        title: "King air 200",
        description: "Descubre la elegancia y eficiencia del King Air 200. Con una velocidad de crucero de 525 km/h y un alcance de 3,800 km, este avión ofrece comodidad a 7-9 pasajeros. Equipado con motores Prat & Whitney PT6A, el King Air 200 redefine el viaje de negocios.<br> *Los colores, materiales y modelos pueden variar según la disposición de las aeronaves.",
        images: 2
    },
    9: {
        title: "King air 90",
        description: "Explora la versatilidad del King Air 90, con una velocidad de crucero variable de aproximadamente 400 km/h. Perfecto para vuelos cortos con un alcance de 2,100 km, este avión ofrece capacidad para 4-6 pasajeros y cuenta con motores Pratt & Whitney PT6A.<br> *Los colores, materiales y modelos pueden variar según la disposición de las aeronaves.",
        images: 2
    },
    10: {
        title: "Fairchild Metroliner III",
        description: "Descubre la comodidad y amplitud del Fairchild Metroliner III. Con una velocidad de crucero variable de alrededor de 500 km/h y un alcance de 2,300 km, este avión puede acomodar hasta 19 pasajeros. Equipado con motores Pratt & Whitney Canada PT6A, redefine el viaje grupal de alta gama.<br> *Los colores, materiales y modelos pueden variar según la disposición de las aeronaves.",
        images: 2
    },
    11: {
        title: "Navajo 350",
        description: "Descubre la versatilidad del Navajo 350, con una velocidad de crucero de 420 km/h y un alcance de 2,800 km. Este avión puede acomodar hasta 8 pasajeros, ofreciendo una experiencia de vuelo cómoda y eficiente para grupos más pequeños.<br> *Los colores, materiales y modelos pueden variar según la disposición de las aeronaves.",
        images: 2
    }
}


document.addEventListener("DOMContentLoaded", function() {
    // Obtener el modal
    var modal = document.getElementById("myModal");

    // Obtener todos los elementos con la clase "image" dentro de los artículos
    var images = document.querySelectorAll(".fade-in .image");

    // Iterar sobre cada elemento y añadir un evento de clic
    images.forEach(function(image) {
        image.addEventListener("click", function(event) {
            // Prevenir la acción predeterminada del enlace
            event.preventDefault();
            // Obtener el artículo padre del elemento clicado
            var article = image.closest("article");
            // Obtener el id del artículo
            var articleId = article.getAttribute("data-id");
            // Obtener la información del artículo de la base de datos según el idioma
            var articleInfo;
            if (window.location.pathname.includes('/in/')) { // Si está en la versión en inglés
                articleInfo = avionesDatabaseIn[articleId];
            } else { // Si está en la versión en español
                articleInfo = avionesDatabaseEs[articleId];
            }
            // Establecer el título y la descripción en el modal
            document.getElementById("modal-title").innerText = articleInfo.title;
            document.getElementById("modal-description").innerHTML = articleInfo.description;

            // Vaciar el contenedor de imágenes del modal
            var modalImagesContainer = document.getElementById("modal-images");
            modalImagesContainer.innerHTML = "";

            // Agregar las imágenes al contenedor del modal
            for (var i = 1; i <= articleInfo.images; i++) {
                var img = document.createElement("img");
                img.src = "/img/" + articleInfo.title + "/" + i + ".png";
                modalImagesContainer.appendChild(img);
            }

            // Mostrar el modal
            modal.classList.add("show");
        });
    });

    // Obtener el elemento de cierre del modal
    var closeBtn = document.getElementsByClassName("close")[0];

    // Añadir evento de clic al botón de cierre
    closeBtn.addEventListener("click", function(event) {
        // Ocultar el modal
        modal.classList.remove("show");
        // Prevenir la propagación del evento
        event.stopPropagation();
    });

    // Cerrar el modal si se hace clic fuera del contenido del modal
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.classList.remove("show");
        }
    });
});

//--------------------------------------------------------- idioma

function changeLanguage(language) {
    if (language === 'es') {
        window.location.href = "/index.html"; // redirige a la página en español
    } else if (language === 'en') {
        window.location.href = "/in/index.in.html"; // redirige a la página en inglés
    }
}


//--------------------------------------------------------- form


// Función para limpiar los campos del formulario
function clearFormFields() {
    const fields = form.querySelectorAll('input, select');
    fields.forEach(function(field) {
        field.value = ''; // Limpiar el valor del campo
    });
}

// Obtener el formulario
const form = document.getElementById('cotizacionForm');

// Validar el formulario antes de enviarlo
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    // Verificar si todos los campos están completos
    const fields = form.querySelectorAll('input, select');
    let isValid = true;
    fields.forEach(function(field) {
        if (!field.checkValidity()) {
            isValid = false;
        }
    });

    if (isValid) {
        // Si el formulario es válido, enviarlo
        form.submit();
        // Limpiar los campos del formulario
        clearFormFields();
        // Mostrar el modal
        document.getElementById('modalForm').style.display = 'block';
    } else {
        // Si el formulario no es válido, mostrar un mensaje de error o tomar alguna otra acción
        alert("Por favor completa todos los campos correctamente.");
    }
});


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

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(function (element) {
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


