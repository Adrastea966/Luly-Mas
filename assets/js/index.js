document.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const main = document.querySelector('.main');

    const mainTop = main.getBoundingClientRect().top;

    if (mainTop < 0) {
        header.classList.add('scrolled');
        changeColorToMarron();
    } else {
        header.classList.remove('scrolled');
        resetColor();
    }
});

function changeColorToMarron() {
    const logo = document.querySelector('.logo');
    const navItems = document.querySelectorAll('.link-navbar');
    const socialIcons = document.querySelectorAll('.red');

    logo.style.color = '#A09082';
    logo.addEventListener('mouseenter', () => {
        logo.style.color = '#FF9CA2';
    });
    logo.addEventListener('mouseleave', () => {
        logo.style.color = '#A09082';
    });
    
    navItems.forEach(item => {
        item.style.color = '#A09082'; 
        item.style.fontWeight = '500';
        item.addEventListener('mouseenter', () => {
            item.style.color = '#FF9CA2'; 
        });
        item.addEventListener('mouseleave', () => {
            item.style.color = '#A09082';
        });
    });
    
    socialIcons.forEach(icon => {
        icon.style.color = '#A09082'; 
        icon.style.fontWeight = '500';
        icon.addEventListener('mouseenter', () => {
            icon.style.color = '#FF9CA2'; 
        });
        icon.addEventListener('mouseleave', () => {
            icon.style.color = '#A09082';
        });
    });
}

function resetColor() {
    const logo = document.querySelector('.logo');
    const navItems = document.querySelectorAll('.link-navbar');
    const socialIcons = document.querySelectorAll('.red');

    logo.style.color = ''; 
    
    logo.removeEventListener('mouseenter', null);
    logo.removeEventListener('mouseleave', null);
    
    navItems.forEach(item => {
        item.style.color = ''; 
        item.style.fontWeight = '';
        item.removeEventListener('mouseenter', null);
        item.removeEventListener('mouseleave', null);
    });
    
    socialIcons.forEach(icon => {
        icon.style.color = ''; 
        icon.style.fontWeight = '';
        icon.removeEventListener('mouseenter', null);
        icon.removeEventListener('mouseleave', null);
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