$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 2,
        margin: 30,
        nav: true,
        navText: ['<i class="fas fa-long-arrow-alt-left bg-primary rounded-0 rounded-end rounded-pill text-light py-2 px-3"></i>', '<i class="fas fa-long-arrow-alt-right bg-primary rounded-0 rounded-start rounded-pill text-light py-2 px-3"></i>'],
        dots: false,
        loop: true,
        autoplay: true,
        responsive: {
            100: {
                items: 1,
                autoplay: false

            },
            960: {
                items: 2,
                autoplay: true

            }
        }

    });

});