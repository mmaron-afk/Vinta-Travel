/* ==========================================================
   VINTA TRAVEL
   JAVASCRIPT GENERAL
   ========================================================== */


/* ==========================================================
   1. DATOS DE LOS DESTINOS
   ========================================================== */

const destinos = {

    chichenItza: {

        tipo: "destino",

        clave: "chichenItza",

        nombre: "Chichén Itzá",

        destino: "Chichén Itzá",

        precio: 8500,

        dias: 4,

        descripcion:
            "Descubre uno de los destinos más importantes de México y disfruta de la cultura, historia y gastronomía de Yucatán.",

        actividades: [
            "Visita a Chichén Itzá",
            "Recorrido por Valladolid",
            "Visita a un cenote",
            "Experiencia gastronómica yucateca"
        ]

    },


    roma: {

        tipo: "destino",

        clave: "roma",

        nombre: "Roma",

        destino: "Roma",

        precio: 20000,

        dias: 5,

        descripcion:
            "Conoce la historia, arquitectura y gastronomía de una de las ciudades más importantes de Europa.",

        actividades: [
            "Visita al Coliseo",
            "Recorrido por el Foro Romano",
            "Visita a la Fontana di Trevi",
            "Paseo por el Vaticano",
            "Tiempo libre en el centro de Roma"
        ]

    },


    paris: {

        tipo: "destino",

        clave: "paris",

        nombre: "París",

        destino: "París",

        precio: 22500,

        dias: 5,

        descripcion:
            "Disfruta de París y conoce algunos de sus monumentos, museos y espacios más representativos.",

        actividades: [
            "Visita a la Torre Eiffel",
            "Recorrido por el río Sena",
            "Visita al Museo del Louvre",
            "Paseo por Montmartre",
            "Tiempo libre para conocer la ciudad"
        ]

    },


    tokio: {

        tipo: "destino",

        clave: "tokio",

        nombre: "Tokio",

        destino: "Tokio",

        precio: 28000,

        dias: 6,

        descripcion:
            "Vive una combinación de tecnología, tradición y cultura japonesa.",

        actividades: [
            "Shibuya y Harajuku",
            "Templo Senso-ji",
            "Akihabara",
            "Mercado y gastronomía local",
            "Visita a parques y zonas tradicionales"
        ]

    },


    tajMahal: {

        tipo: "destino",

        clave: "tajMahal",

        nombre: "Taj Mahal",

        destino: "Taj Mahal",

        precio: 30000,

        dias: 6,

        descripcion:
            "Descubre uno de los monumentos más famosos del mundo y conoce parte de la cultura e historia de India.",

        actividades: [
            "Visita al Taj Mahal",
            "Recorrido por Agra",
            "Visita a mercados locales",
            "Experiencia gastronómica",
            "Recorrido cultural"
        ]

    },


    murallaChina: {

        tipo: "destino",

        clave: "murallaChina",

        nombre: "Gran Muralla China",

        destino: "Gran Muralla China",

        precio: 32000,

        dias: 7,

        descripcion:
            "Conoce la Gran Muralla China y algunos de los principales atractivos culturales de Beijing.",

        actividades: [
            "Visita a la Gran Muralla China",
            "Ciudad Prohibida",
            "Plaza de Tiananmén",
            "Templo del Cielo",
            "Mercados tradicionales",
            "Experiencia gastronómica"
        ]

    },


    machuPicchu: {

        tipo: "destino",

        clave: "machuPicchu",

        nombre: "Machu Picchu",

        destino: "Machu Picchu",

        precio: 18000,

        dias: 5,

        descripcion:
            "Explora uno de los destinos arqueológicos más importantes de América Latina.",

        actividades: [
            "Recorrido por Cusco",
            "Visita al Valle Sagrado",
            "Viaje hacia Machu Picchu",
            "Visita guiada a Machu Picchu",
            "Experiencia gastronómica peruana"
        ]

    },


    petra: {

        tipo: "destino",

        clave: "petra",

        nombre: "Petra",

        destino: "Petra",

        precio: 29000,

        dias: 6,

        descripcion:
            "Descubre la antigua ciudad de Petra y diferentes espacios culturales de Jordania.",

        actividades: [
            "Recorrido por Petra",
            "Visita al Tesoro",
            "Experiencia en el desierto",
            "Recorrido histórico",
            "Gastronomía local"
        ]

    },


    cristoRedentor: {

        tipo: "destino",

        clave: "cristoRedentor",

        nombre: "Cristo Redentor",

        destino: "Río de Janeiro",

        precio: 16000,

        dias: 5,

        descripcion:
            "Conoce Río de Janeiro y visita algunos de sus principales atractivos turísticos.",

        actividades: [
            "Visita al Cristo Redentor",
            "Pan de Azúcar",
            "Playa de Copacabana",
            "Recorrido por la ciudad",
            "Experiencia gastronómica brasileña"
        ]

    }

};



/* ==========================================================
   2. DATOS DE LOS PAQUETES
   ========================================================== */

const paquetes = {

    mexico: {

        tipo: "paquete",

        clave: "mexico",

        nombre: "Paquete México",

        destino: "Chichén Itzá",

        precio: 8500,

        dias: 4,

        descripcion:
            "Una experiencia para descubrir la cultura y los principales atractivos de Yucatán.",

        incluye: [
            "Vuelo",
            "Hotel",
            "Tour"
        ],

        actividades: [
            "Llegada y recorrido por Valladolid",
            "Visita a Chichén Itzá",
            "Visita a un cenote",
            "Experiencia gastronómica"
        ]

    },


    europa: {

        tipo: "paquete",

        clave: "europa",

        nombre: "Paquete Europa",

        destino: "Roma",

        precio: 32000,

        dias: 7,

        descripcion:
            "Una experiencia europea con hospedaje, transporte y actividades para conocer algunos de sus principales atractivos.",

        incluye: [
            "Vuelo",
            "Hotel",
            "Traslados"
        ],

        actividades: [
            "Llegada y recorrido por Roma",
            "Coliseo y Foro Romano",
            "Ciudad del Vaticano",
            "Fontana di Trevi",
            "Recorrido cultural",
            "Tiempo libre para conocer la ciudad"
        ]

    },


    asia: {

        tipo: "paquete",

        clave: "asia",

        nombre: "Paquete Asia",

        destino: "Taj Mahal",

        precio: 35000,

        dias: 7,

        descripcion:
            "Una experiencia diseñada para descubrir algunos de los espacios culturales más representativos de Asia.",

        incluye: [
            "Vuelo",
            "Hotel",
            "Actividades"
        ],

        actividades: [
            "Llegada y traslado al hotel",
            "Recorrido cultural",
            "Visita al Taj Mahal",
            "Recorrido por Agra",
            "Mercados y gastronomía",
            "Actividad cultural adicional"
        ]

    }

};



/* ==========================================================
   3. FORMATO DE DINERO
   ========================================================== */

function formatoPrecio(precio) {

    return new Intl.NumberFormat(
        "es-MX",
        {
            style: "currency",
            currency: "MXN",
            maximumFractionDigits: 0
        }
    ).format(precio);

}



/* ==========================================================
   4. NIVEL DE EXPERIENCIA SEGÚN PRECIO
   ========================================================== */

function obtenerNivelExperiencia(precio, dias) {

    const valorDiario = precio / dias;


    if (valorDiario < 3000) {

        return "Económica";

    }


    if (valorDiario <= 5000) {

        return "Estándar";

    }


    return "Completa";

}



/* ==========================================================
   5. GENERAR ITINERARIO
   ========================================================== */

function generarItinerario(viaje) {

    const itinerario = [];

    const actividades = viaje.actividades || [];

    const nivel = obtenerNivelExperiencia(
        viaje.precio,
        viaje.dias
    );


    for (let dia = 1; dia <= viaje.dias; dia++) {


        let actividad;


        if (dia === 1) {

            actividad =
                "Llegada al destino, traslado, registro en el hospedaje y recorrido de reconocimiento.";

        }


        else if (dia === viaje.dias) {

            actividad =
                "Tiempo libre, últimas actividades y preparación para el regreso.";

        }


        else {

            const indiceActividad =
                (dia - 2) % actividades.length;


            actividad =
                actividades[indiceActividad] ||
                "Actividad turística y tiempo libre.";

        }


        itinerario.push({

            dia: dia,

            actividad: actividad,

            nivel: nivel

        });

    }


    return itinerario;

}



/* ==========================================================
   6. CREAR HTML DEL ITINERARIO
   ========================================================== */

function crearHTMLItinerario(viaje) {

    const itinerario =
        generarItinerario(viaje);


    const valorDiario =
        viaje.precio / viaje.dias;


    const nivel =
        obtenerNivelExperiencia(
            viaje.precio,
            viaje.dias
        );


    let html = `

        <div class="alert alert-info">

            <strong>
                Duración sugerida:
            </strong>

            ${viaje.dias} días

            <br>

            <strong>
                Valor aproximado del paquete por día:
            </strong>

            ${formatoPrecio(valorDiario)}

            <br>

            <strong>
                Tipo de experiencia:
            </strong>

            ${nivel}

        </div>

        <h6 class="fw-bold mt-4">
            Itinerario sugerido
        </h6>

    `;


    itinerario.forEach(function(item) {

        html += `

            <div class="itinerario-dia p-3 mb-2 bg-light">

                <strong>
                    Día ${item.dia}
                </strong>

                <br>

                ${item.actividad}

            </div>

        `;

    });


    html += `

        <p class="small text-muted mt-3 mb-0">

            *El itinerario es una propuesta aproximada
            basada en la duración y precio del viaje.

        </p>

    `;


    return html;

}



/* ==========================================================
   7. MODAL DINÁMICO
   ========================================================== */

function crearModalItinerario() {


    if (
        document.getElementById(
            "modalItinerarioJS"
        )
    ) {

        return;

    }


    const modal = document.createElement("div");


    modal.innerHTML = `

        <div class="modal fade"
             id="modalItinerarioJS"
             tabindex="-1"
             aria-hidden="true">

            <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">

                <div class="modal-content">

                    <div class="modal-header bg-primary text-white">

                        <h2 class="modal-title fs-5"
                            id="tituloModalViaje">

                            Detalles del viaje

                        </h2>

                        <button type="button"
                                class="btn-close btn-close-white"
                                data-bs-dismiss="modal"
                                aria-label="Cerrar">
                        </button>

                    </div>


                    <div class="modal-body">

                        <div id="contenidoModalViaje">
                        </div>

                    </div>


                    <div class="modal-footer">

                        <button type="button"
                                class="btn btn-outline-secondary"
                                data-bs-dismiss="modal">

                            Cerrar

                        </button>


                        <button type="button"
                                class="btn btn-outline-primary"
                                id="btnAgregarCarrito">

                            🛒 Agregar al carrito

                        </button>


                        <button type="button"
                                class="btn btn-primary"
                                id="btnContinuarReservacion">

                            Continuar con reservación

                        </button>

                    </div>

                </div>

            </div>

        </div>

    `;


    document.body.appendChild(
        modal.firstElementChild
    );

}



/* ==========================================================
   8. MOSTRAR DESTINO O PAQUETE
   ========================================================== */

let viajeActual = null;


function mostrarViaje(viaje) {


    crearModalItinerario();


    viajeActual = viaje;


    const titulo =
        document.getElementById(
            "tituloModalViaje"
        );


    const contenido =
        document.getElementById(
            "contenidoModalViaje"
        );


    titulo.textContent =
        viaje.nombre;


    let incluidos = "";


    if (
        viaje.incluye &&
        viaje.incluye.length > 0
    ) {

        incluidos = `

            <h6 class="fw-bold mt-4">
                Incluye
            </h6>

            <ul>

                ${viaje.incluye
                    .map(
                        item => `<li>${item}</li>`
                    )
                    .join("")}

            </ul>

        `;

    }


    contenido.innerHTML = `

        <h3 class="h4 fw-bold">
            ${viaje.nombre}
        </h3>


        <p>
            ${viaje.descripcion}
        </p>


        <div class="row g-3 my-3">

            <div class="col-md-6">

                <div class="card h-100 border-0 bg-light">

                    <div class="card-body">

                        <strong>
                            🌎 Destino
                        </strong>

                        <br>

                        ${viaje.destino}

                    </div>

                </div>

            </div>


            <div class="col-md-6">

                <div class="card h-100 border-0 bg-light">

                    <div class="card-body">

                        <strong>
                            💰 Precio
                        </strong>

                        <br>

                        ${formatoPrecio(viaje.precio)}

                    </div>

                </div>

            </div>

        </div>


        ${incluidos}


        ${crearHTMLItinerario(viaje)}

    `;


    const modalElement =
        document.getElementById(
            "modalItinerarioJS"
        );


    const modalBootstrap =
        bootstrap.Modal.getOrCreateInstance(
            modalElement
        );


    modalBootstrap.show();

}



/* ==========================================================
   9. EVENTOS DESTINOS Y PAQUETES
   ========================================================== */

document.addEventListener(
    "click",
    function(event) {


        const botonDestino =
            event.target.closest(
                "[data-destino]"
            );


        if (botonDestino) {

            const clave =
                botonDestino.dataset.destino;


            if (destinos[clave]) {

                mostrarViaje(
                    destinos[clave]
                );

            }

        }


        const botonPaquete =
            event.target.closest(
                "[data-paquete]"
            );


        if (botonPaquete) {

            const clave =
                botonPaquete.dataset.paquete;


            if (paquetes[clave]) {

                mostrarViaje(
                    paquetes[clave]
                );

            }

        }

    }
);



/* ==========================================================
   10. LOCAL STORAGE DEL CARRITO
   ========================================================== */

function obtenerCarrito() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "vintaCarrito"
            )
        ) || [];

    }

    catch (error) {

        return [];

    }

}



function guardarCarrito(carrito) {

    localStorage.setItem(
        "vintaCarrito",
        JSON.stringify(carrito)
    );


    actualizarContadorCarrito();

}



/* ==========================================================
   11. AGREGAR AL CARRITO
   ========================================================== */

function agregarAlCarrito(viaje) {


    const carrito =
        obtenerCarrito();


    const existente =
        carrito.find(
            item =>
                item.tipo === viaje.tipo &&
                item.clave === viaje.clave
        );


    if (existente) {

        existente.cantidad += 1;

    }

    else {

        carrito.push({

            tipo: viaje.tipo,

            clave: viaje.clave,

            nombre: viaje.nombre,

            destino: viaje.destino,

            precio: viaje.precio,

            dias: viaje.dias,

            descripcion: viaje.descripcion,

            actividades: viaje.actividades,

            incluye: viaje.incluye || [],

            cantidad: 1

        });

    }


    guardarCarrito(carrito);


    mostrarMensaje(
        `${viaje.nombre} se agregó al carrito.`,
        "success"
    );

}



/* ==========================================================
   12. BOTONES DEL MODAL
   ========================================================== */

document.addEventListener(
    "click",
    function(event) {


        if (
            event.target.id ===
            "btnAgregarCarrito"
        ) {

            if (viajeActual) {

                agregarAlCarrito(
                    viajeActual
                );

            }

        }


        if (
            event.target.id ===
            "btnContinuarReservacion"
        ) {

            if (!viajeActual) {

                return;

            }


            localStorage.setItem(
                "vintaDestinoSeleccionado",
                JSON.stringify(
                    viajeActual
                )
            );


            window.location.href =
                "reservaciones.html";

        }

    }
);



/* ==========================================================
   13. CONTADOR DEL CARRITO
   ========================================================== */

function actualizarContadorCarrito() {


    const carrito =
        obtenerCarrito();


    const cantidad =
        carrito.reduce(
            function(total, producto) {

                return total +
                    (producto.cantidad || 1);

            },
            0
        );


    document
        .querySelectorAll(
            ".contador-carrito"
        )
        .forEach(
            function(contador) {

                contador.textContent =
                    cantidad;

            }
        );

}



/* ==========================================================
   14. ELIMINAR DEL CARRITO
   ========================================================== */

function eliminarDelCarrito(indice) {


    const carrito =
        obtenerCarrito();


    carrito.splice(
        indice,
        1
    );


    guardarCarrito(carrito);


    mostrarCarrito();


    mostrarMensaje(
        "El producto fue eliminado del carrito.",
        "warning"
    );

}



/* ==========================================================
   15. MOSTRAR CARRITO
   ========================================================== */

function mostrarCarrito() {


    const lista =
        document.getElementById(
            "listaCarrito"
        );


    if (!lista) {

        return;

    }


    const carrito =
        obtenerCarrito();


    const resumen =
        document.getElementById(
            "resumenCarrito"
        );


    const modalResumen =
        document.getElementById(
            "resumenModalCarrito"
        );


    lista.innerHTML = "";


    if (carrito.length === 0) {


        lista.innerHTML = `

            <tr>

                <td colspan="5"
                    class="text-center py-5">

                    <h3 class="h5">
                        Tu carrito está vacío
                    </h3>

                    <p class="text-muted mb-3">
                        Explora nuestros destinos y paquetes.
                    </p>

                    <a href="destinos.html"
                       class="btn btn-primary">

                        Ver destinos

                    </a>

                </td>

            </tr>

        `;


        if (resumen) {

            resumen.innerHTML = `

                <div class="list-group-item text-center">

                    No hay productos seleccionados.

                </div>


                <div class="list-group-item d-flex justify-content-between">

                    <strong>
                        Total
                    </strong>

                    <strong class="text-primary"
                            id="totalCarrito">

                        $0 MXN

                    </strong>

                </div>

            `;

        }


        if (modalResumen) {

            modalResumen.innerHTML = `

                <p class="mb-0">

                    No hay productos en el carrito.

                </p>

            `;

        }


        return;

    }



    carrito.forEach(
        function(producto, indice) {


            const fila =
                document.createElement(
                    "tr"
                );


            fila.innerHTML = `

                <td class="fw-semibold">

                    ${producto.nombre}

                </td>


                <td>

                    ${producto.destino}

                </td>


                <td>

                    ${formatoPrecio(
                        producto.precio
                    )}

                </td>


                <td>

                    ${producto.cantidad || 1}

                </td>


                <td>

                    <button type="button"
                            class="btn btn-sm btn-outline-danger"
                            data-eliminar-carrito="${indice}">

                        Eliminar

                    </button>

                </td>

            `;


            lista.appendChild(
                fila
            );

        }
    );



    const subtotal =
        carrito.reduce(
            function(total, producto) {

                return total +
                    producto.precio *
                    (producto.cantidad || 1);

            },
            0
        );


    const impuestos =
        subtotal * 0.16;


    const total =
        subtotal + impuestos;



    if (resumen) {


        let contenidoResumen = "";


        carrito.forEach(
            function(producto) {

                contenidoResumen += `

                    <div class="list-group-item d-flex justify-content-between">

                        <span>

                            ${producto.nombre}

                            ${
                                producto.cantidad > 1
                                ?
                                ` x${producto.cantidad}`
                                :
                                ""
                            }

                        </span>


                        <strong>

                            ${formatoPrecio(
                                producto.precio *
                                (producto.cantidad || 1)
                            )}

                        </strong>

                    </div>

                `;

            }
        );


        contenidoResumen += `

            <div class="list-group-item d-flex justify-content-between">

                <span>
                    Subtotal
                </span>

                <strong id="subtotalCarrito">

                    ${formatoPrecio(subtotal)}

                </strong>

            </div>


            <div class="list-group-item d-flex justify-content-between">

                <span>
                    Impuestos
                </span>

                <strong id="impuestosCarrito">

                    ${formatoPrecio(impuestos)}

                </strong>

            </div>


            <div class="list-group-item d-flex justify-content-between">

                <strong>
                    Total
                </strong>

                <strong class="text-primary"
                        id="totalCarrito">

                    ${formatoPrecio(total)}

                </strong>

            </div>

        `;


        resumen.innerHTML =
            contenidoResumen;

    }



    if (modalResumen) {


        let productosModal = "";


        carrito.forEach(
            function(producto) {

                productosModal += `

                    <li>

                        ${producto.nombre}:

                        ${formatoPrecio(
                            producto.precio *
                            (producto.cantidad || 1)
                        )}

                    </li>

                `;

            }
        );


        modalResumen.innerHTML = `

            <p>

                Estás a punto de continuar
                con tu reservación.

            </p>


            <ul>

                ${productosModal}

                <li>

                    Impuestos:
                    ${formatoPrecio(impuestos)}

                </li>

            </ul>


            <p>

                <strong>

                    Total:
                    ${formatoPrecio(total)}

                </strong>

            </p>


            <p class="mb-0">

                Revisa los datos antes de continuar.

            </p>

        `;

    }

}



/* ==========================================================
   16. EVENTO ELIMINAR CARRITO
   ========================================================== */

document.addEventListener(
    "click",
    function(event) {


        const boton =
            event.target.closest(
                "[data-eliminar-carrito]"
            );


        if (!boton) {

            return;

        }


        const indice =
            Number(
                boton.dataset.eliminarCarrito
            );


        eliminarDelCarrito(
            indice
        );

    }
);



/* ==========================================================
   17. RESERVACIÓN
   ========================================================== */

function activarReservaciones() {


    const formulario =
        document.getElementById(
            "formReservacion"
        );


    if (!formulario) {

        return;

    }


    const resumen =
        document.getElementById(
            "resumenItinerario"
        );


    const destinoSeleccionado =
        localStorage.getItem(
            "vintaDestinoSeleccionado"
        );


    let viaje = null;


    if (destinoSeleccionado) {


        try {

            viaje =
                JSON.parse(
                    destinoSeleccionado
                );

        }

        catch (error) {

            viaje = null;

        }

    }



    if (
        viaje &&
        resumen
    ) {


        resumen.innerHTML = `

            <div class="card border-0 shadow-sm">

                <div class="card-body p-4">

                    <span class="badge bg-info text-dark mb-3">

                        VIAJE SELECCIONADO

                    </span>


                    <h2 class="h4 fw-bold">

                        ${viaje.nombre}

                    </h2>


                    <p>

                        <strong>
                            Destino:
                        </strong>

                        ${viaje.destino}

                    </p>


                    <p>

                        <strong>
                            Precio:
                        </strong>

                        ${formatoPrecio(viaje.precio)}

                    </p>


                    ${crearHTMLItinerario(viaje)}

                </div>

            </div>

        `;



        const selectDestino =
            document.getElementById(
                "destino"
            );


        if (selectDestino) {


            const opciones =
                Array.from(
                    selectDestino.options
                );


            const encontrada =
                opciones.find(
                    opcion =>
                        opcion.textContent
                            .trim()
                            .toLowerCase()
                        ===
                        viaje.destino
                            .trim()
                            .toLowerCase()
                );


            if (encontrada) {

                selectDestino.value =
                    encontrada.value;

            }

            else {


                const opcionNueva =
                    document.createElement(
                        "option"
                    );


                opcionNueva.value =
                    viaje.destino;


                opcionNueva.textContent =
                    viaje.destino;


                opcionNueva.selected =
                    true;


                selectDestino.appendChild(
                    opcionNueva
                );

            }

        }


        const paqueteSeleccionado =
            document.getElementById(
                "paqueteSeleccionado"
            );


        if (paqueteSeleccionado) {

            paqueteSeleccionado.value =
                viaje.nombre;

        }

    }



    formulario.addEventListener(
        "submit",
        function(event) {


            event.preventDefault();


            if (!formulario.checkValidity()) {


                formulario.classList.add(
                    "was-validated"
                );


                mostrarMensaje(
                    "Completa todos los datos necesarios antes de continuar.",
                    "danger"
                );


                return;

            }



            const salida =
                document.getElementById(
                    "salida"
                );


            const regreso =
                document.getElementById(
                    "regreso"
                );


            if (
                salida &&
                regreso &&
                salida.value &&
                regreso.value &&
                regreso.value <
                salida.value
            ) {


                mostrarMensaje(
                    "La fecha de regreso no puede ser anterior a la fecha de salida.",
                    "danger"
                );


                return;

            }



            formulario.classList.add(
                "was-validated"
            );


            mostrarMensaje(
                "¡Solicitud enviada correctamente! Vinta Travel se pondrá en contacto contigo.",
                "success"
            );


            const modal =
                document.getElementById(
                    "modalReservacion"
                );


            if (modal) {


                const modalBootstrap =
                    bootstrap.Modal.getOrCreateInstance(
                        modal
                    );


                modalBootstrap.show();

            }

        }
    );

}



/* ==========================================================
   18. CONTACTO CON FORMSPREE
   ========================================================== */

function activarContacto() {

    const formulario =
        document.getElementById(
            "formContactoFormspree"
        );


    if (!formulario) {

        return;

    }


    /*
       El formulario ahora se envía directamente a Formspree
       mediante action y method="POST" en contacto.html.

       No se usa event.preventDefault(), porque eso impediría
       que Formspree reciba el formulario.
    */

}



/* ==========================================================
   19. BUSCADOR DE DESTINOS DEL INDEX
   ========================================================== */

function activarBuscadorDestinos() {


    const buscador =
        document.getElementById(
            "buscadorDestinos"
        );


    if (!buscador) {

        return;

    }


    const tarjetas =
        document.querySelectorAll(
            ".destino-card"
        );


    buscador.addEventListener(
        "input",
        function() {


            const textoBusqueda =
                buscador.value
                    .toLowerCase()
                    .trim();


            tarjetas.forEach(
                function(tarjeta) {


                    const titulo =
                        tarjeta.querySelector(
                            "h3"
                        );


                    if (!titulo) {

                        return;

                    }


                    const nombreDestino =
                        titulo.textContent
                            .toLowerCase();


                    const contenedor =
                        tarjeta.closest(
                            ".col, .col-sm-6, .col-md-6, .col-lg-3, .col-lg-4, .col-md-4"
                        )
                        ||
                        tarjeta.parentElement;


                    if (
                        nombreDestino.includes(
                            textoBusqueda
                        )
                    ) {

                        contenedor.style.display =
                            "";

                    }

                    else {

                        contenedor.style.display =
                            "none";

                    }

                }
            );

        }
    );

}



/* ==========================================================
   20. BUSCADOR DEL BLOG
   ========================================================== */

function activarBuscadorBlog() {


    const formulario =
        document.getElementById(
            "formBuscarBlog"
        );


    const buscador =
        document.getElementById(
            "buscar"
        );


    if (
        !formulario ||
        !buscador
    ) {

        return;

    }


    const articulos =
        document.querySelectorAll(
            ".articulo-blog"
        );


    function buscarArticulos() {


        const texto =
            buscador.value
                .toLowerCase()
                .trim();


        articulos.forEach(
            function(articulo) {


                const contenido =
                    articulo.textContent
                        .toLowerCase();


                if (
                    contenido.includes(
                        texto
                    )
                ) {

                    articulo.style.display =
                        "";

                }

                else {

                    articulo.style.display =
                        "none";

                }

            }
        );

    }


    formulario.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            buscarArticulos();

        }
    );


    buscador.addEventListener(
        "input",
        buscarArticulos
    );

}



/* ==========================================================
   21. WHATSAPP FLOTANTE
   ========================================================== */

function crearWhatsApp() {


    if (
        document.querySelector(
            ".whatsapp-flotante"
        )
    ) {

        return;

    }


    const whatsapp =
        document.createElement(
            "a"
        );


    whatsapp.href =
        "https://wa.me/525540783368?text=Hola%20Vinta%20Travel,%20quiero%20información%20sobre%20un%20viaje.";


    whatsapp.target =
        "_blank";


    whatsapp.rel =
        "noopener noreferrer";


    whatsapp.className =
        "whatsapp-flotante";


    whatsapp.innerHTML =
        "💬";


    whatsapp.setAttribute(
        "aria-label",
        "Contactar a Vinta Travel por WhatsApp"
    );


    whatsapp.title =
        "Contactar por WhatsApp";


    document.body.appendChild(
        whatsapp
    );

}



/* ==========================================================
   22. MENSAJES DE CONFIRMACIÓN
   ========================================================== */

function mostrarMensaje(
    texto,
    tipo = "success"
) {


    const anterior =
        document.querySelector(
            ".toast-vinta"
        );


    if (anterior) {

        anterior.remove();

    }


    const mensaje =
        document.createElement(
            "div"
        );


    mensaje.className =
        `alert alert-${tipo} shadow toast-vinta`;


    mensaje.setAttribute(
        "role",
        "alert"
    );


    mensaje.innerHTML = `

        <div class="d-flex align-items-center justify-content-between gap-3">

            <span>
                ${texto}
            </span>

            <button type="button"
                    class="btn-close"
                    aria-label="Cerrar">
            </button>

        </div>

    `;


    document.body.appendChild(
        mensaje
    );


    const cerrar =
        mensaje.querySelector(
            ".btn-close"
        );


    cerrar.addEventListener(
        "click",
        function() {

            mensaje.remove();

        }
    );


    setTimeout(
        function() {

            if (
                document.body.contains(
                    mensaje
                )
            ) {

                mensaje.remove();

            }

        },
        4000
    );

}



/* ==========================================================
   23. LOGIN
   ========================================================== */

function activarLogin() {


    const formulario =
        document.getElementById(
            "formLogin"
        );


    if (!formulario) {

        return;

    }


    formulario.addEventListener(
        "submit",
        function(event) {


            event.preventDefault();


            if (!formulario.checkValidity()) {


                formulario.classList.add(
                    "was-validated"
                );


                mostrarMensaje(
                    "Completa tu correo y contraseña.",
                    "danger"
                );


                return;

            }


            mostrarMensaje(
                "Inicio de sesión simulado correctamente.",
                "success"
            );

        }
    );

}



/* ==========================================================
   24. INICIALIZACIÓN
   ========================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {


        actualizarContadorCarrito();


        mostrarCarrito();


        activarReservaciones();


        activarContacto();


        activarBuscadorDestinos();


        activarBuscadorBlog();


        activarLogin();


        crearWhatsApp();

    }
);