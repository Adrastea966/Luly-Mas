//Header
document.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const main = document.querySelector('.main');

    const mainTop = main.getBoundingClientRect().top;

    if (mainTop < 0) {
        header.classList.add('scrolled');
        changeColorToMarron(true);
    } else {
        header.classList.remove('scrolled');
        changeColorToMarron(false);
    }
});

function changeColorToMarron(isScrolled) {
    const textColor = isScrolled ? '#A09082' : '#FFF5EC';
    const hoverColor = isScrolled ? '#FF9CA2' : '#FF9CA2';
    const hoverEndColor = isScrolled ? textColor : '#FFF5EC';

    const logo = document.querySelector('.logo');
    const navItems = document.querySelectorAll('.link-navbar');
    const socialIcons = document.querySelectorAll('.red');

    logo.style.color = textColor;
    logo.addEventListener('mouseenter', () => {
        logo.style.color = hoverColor;
    });
    logo.addEventListener('mouseleave', () => {
        logo.style.color = hoverEndColor;
    });

    navItems.forEach(item => {
        item.style.color = textColor;
        item.style.fontWeight = isScrolled ? '500' : '';
        item.addEventListener('mouseenter', () => {
            item.style.color = hoverColor;
        });
        item.addEventListener('mouseleave', () => {
            item.style.color = hoverEndColor;
        });
    });

    socialIcons.forEach(icon => {
        icon.style.color = textColor;
        icon.style.fontWeight = isScrolled ? '500' : '';
        icon.addEventListener('mouseenter', () => {
            icon.style.color = hoverColor;
        });
        icon.addEventListener('mouseleave', () => {
            icon.style.color = hoverEndColor;
        });
    });
}

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