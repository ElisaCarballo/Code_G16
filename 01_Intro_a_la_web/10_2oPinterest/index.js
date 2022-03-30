const navToggle = document.querySelector(".nav-toggle");
const navmenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click" ,() => {
    navmenu.classList.toggle("nav-menu_visible");

    if (navmenu.classList.contains(("nav-menu_visible")) {
        navToggle.setAttribute("arial-label", "Cerrar menu");
        } else {
        navToggle.setAttribute("arial-label", "abrir menu");
    }
});