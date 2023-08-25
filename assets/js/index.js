//Header
document.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const main = document.querySelector('.main');

    // Obtener la posición de la parte superior de la sección main
    const mainTop = main.getBoundingClientRect().top;

    // Si la parte superior de la sección main está fuera de la vista
    if (mainTop < 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

//Botón scroll arriba
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

//scroll seccion nosotros
window.addEventListener('scroll', function () {
    let nosotrosSection = document.getElementById('motivos');
    let scrollTopButton = document.querySelector('.scroll-top-button');

    let nosotrosSectionPosition = nosotrosSection.getBoundingClientRect().top;

    if (nosotrosSectionPosition <= 0) {
        scrollTopButton.classList.add('show');
    } else {
        scrollTopButton.classList.remove('show');
    }
});