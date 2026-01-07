const enlaces = document.querySelectorAll(".btn--section");

enlaces.forEach(enlace => {
    enlace.addEventListener("click", () => {
    
    enlaces.forEach(el => el.classList.remove("activo"));
    enlace.classList.add("activo")
});
});
