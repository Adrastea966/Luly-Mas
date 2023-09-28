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

//Carrusel
$(document).ready(function () {
    $('.tarjetas-productos').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

//Mapa
function iniciarMap() {
    // Array de coordenadas
    let coordenadas = [
        { lat: -34.6518378, lng: -58.6937442 },
        { lat: -34.662345, lng: -58.701234 },
        { lat: -34.673456, lng: -58.712345 },
    ];

    // URL del icono personalizado (marcador rosa en formato SVG)
    let rosaIconUrl = '../../assets/image/location-point.svg';

    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: coordenadas[0] 
    });

    for (let i = 0; i < coordenadas.length; i++) {
        let marker = new google.maps.Marker({
            position: coordenadas[i],
            map: map,
            icon: {
                url: rosaIconUrl, // URL del icono personalizado
                scaledSize: new google.maps.Size(40, 40) // Tamaño personalizado del icono
            }
        });
    }

    // Selector para todas las etiquetas <a> con la clase "ver-mapa"
    $('.ver-mapa').on('click', function (event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace

        // Obtiene las coordenadas de los atributos de datos
        let lat = $(this).siblings('span').data('lat');
        let lng = $(this).siblings('span').data('lng');

        // Crea un objeto de coordenadas
        let coordenada = new google.maps.LatLng(lat, lng);

        // Establece el zoom deseado (por ejemplo, 15) para hacer zoom en la coordenada
        map.setZoom(15);

        // Centra el mapa en la coordenada seleccionada
        map.setCenter(coordenada);

        // Crea un marcador en la coordenada seleccionada
        let marker = new google.maps.Marker({
            position: coordenada,
            map: map,
            icon: {
                url: rosaIconUrl, // URL del icono personalizado
                scaledSize: new google.maps.Size(40, 40) // Tamaño personalizado del icono
            }
        });
    });
}

//Tutoriales
let btnTutoUno = document.querySelector('.btn-tuto-1');
let btnTutoDos = document.querySelector('.btn-tuto-2');
let btnTutoTres = document.querySelector('.btn-tuto-3');
let tipsTutoUno = document.querySelector('.tips1');
let tipsTutoDos = document.querySelector('.tips2');
let tipsTutoTres = document.querySelector('.tips3');
let videoUno = document.querySelector('.videos');
let videoDos = document.querySelector('.videos2');
let videoTres = document.querySelector('.videos3');

btnTutoUno.addEventListener('click', function(){
    tipsTutoUno.classList.remove('show')
    tipsTutoDos.classList.add('show');
    tipsTutoTres.classList.add('show');
    videoUno.classList.remove('show');
    videoDos.classList.add('show');
    videoTres.classList.add('show');
})

btnTutoDos.addEventListener('click', function(){
    tipsTutoDos.classList.remove('show');
    tipsTutoUno.classList.add('show');
    tipsTutoTres.classList.add('show');
    videoDos.classList.remove('show');
    videoUno.classList.add('show');
    videoTres.classList.add('show');
})

btnTutoTres.addEventListener('click', function(){
    tipsTutoTres.classList.remove('show');
    tipsTutoUno.classList.add('show');
    tipsTutoDos.classList.add('show');
    videoDos.classList.add('show');
    videoUno.classList.add('show');
    videoTres.classList.remove('show');
})
