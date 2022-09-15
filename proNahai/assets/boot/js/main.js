$('.owl-carousel').owlCarousel({
    rtl:true,
    loop: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
        0:{
            items: 1.25,
        },
        576:{
            items: 2,
        },
        768:{
            items: 2.5,
        },
        992:{
            items: 2.75,
        },
        1200:{
            items: 4,
        },
        1400:{
            items: 4,
            loop: false,
        }
    }
});
$('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000
});