// ---------------- SELECTORES ----------------

// Enlaces de servicios (cards)
const enlaces = document.querySelectorAll(".btn--section");
const botones = document.querySelectorAll(".btn--section");

// Select del formulario
const selectServicio = document.querySelector("#transport");

// Ventana modal
const ventanilla = document.querySelector(".ventana");
const btnReserva = document.querySelector(".reserva--btn");
const cerrar = document.querySelector(".cerrar_ventana");

// Inputs del formulario
const inputFecha = document.querySelector('input[type="date"]');
const inputHora = document.querySelector('input[type="time"]');
const inputNombre = document.querySelector("#name_usuario");
const inputCorreo = document.querySelector("#correo_electronico");

// Contenedor donde se imprimen los datos
const confirmacionCita = document.querySelector(".confirmacion_cita");
const mensaje = document.querySelector(".email_cita")

// ---------------- ACTIVAR SERVICIO (CARDS) ----------------

enlaces.forEach(enlace => {
    enlace.addEventListener("click", () => {

        // Quita la clase activa de todos
        enlaces.forEach(el => el.classList.remove("activo"));

        // Activa solo el clickeado
        enlace.classList.add("activo");
    });
});


// ---------------- PASAR SERVICIO AL SELECT ----------------

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const servicio = boton.dataset.servicio;
        selectServicio.value = servicio;
    });
});


// ---------------- ABRIR MODAL + MOSTRAR DATOS ----------------

btnReserva.addEventListener("click", () => {
    if (
        selectServicio.value ==="" ||
        inputFecha.value === ""  ||
        inputHora.value === "" ||
        inputNombre.value === "" ||
        inputCorreo.value ===""
    ){
        alert("Por favor complete todos los datos");
        return;
    }

    const servicio = selectServicio.options[selectServicio.selectedIndex].text;
    const fecha = inputFecha.value;
    const hora = inputHora.value;
    const nombre = inputNombre.value;
    const correo = inputCorreo.value;

    const detalles = `
        <p><strong>Servicio</strong><br>${servicio}</p>
        <p><strong>Fecha</strong><br>${fecha}</p>
        <p><strong>Hora</strong><br>${hora}</p>
        <hr>
            <p><strong>Paciente</strong><br>${nombre}</p>
            <p><strong>Correo</strong><br>${correo}</p>
            <div>

    `;
    
    const detalleFinal =`
        <p>
            Hemos enviado un correo de confirmación a su correo
            <strong>${correo}</strong> con todos los detalles de su cita.
        </p>
        `;

    //LOCAL STORAGE

    const reserva = {
        servicio,
        fecha,
        hora,
        nombre,
        correo
    };

    localStorage.setItem("reserva", JSON.stringify(reserva));


    // Insertar los datos en la ventana
    confirmacionCita.innerHTML = detalles;
    mensaje.innerHTML = detalleFinal;

    // Mostrar ventana
    ventanilla.classList.add("activa");

    document.querySelector  (".form").reset();

    enlaces.forEach(el => el.classList.remove("activo"))
});


    ventanilla.addEventListener("click",(e) => {
        if(e.target === ventanilla){
            ventanilla.classList.remove("activa")
        }
    })

// ---------------- CERRAR MODAL ----------------

cerrar.addEventListener("click", () => {
    ventanilla.classList.remove("activa");
});