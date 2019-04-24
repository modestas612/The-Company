"use strict";
$(document).ready(function () {
    renderNewsblock(news_data);
    renderEventsblock(events_data);
    responsiveNAV();

    $('.news-slideshow').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
            breakpoint: 1250,
            settings: 
                {
                slidesToShow: 2,
                slidesToScroll: 2,
                }
            },
            {
            breakpoint: 800,
            settings: 
                {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    });

    $('.events-slideshow').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
            breakpoint: 800,
            settings: 
                {
                slidesToShow: 1,
                slidesToScroll: 1,
                }
            }
        ]
    });
});