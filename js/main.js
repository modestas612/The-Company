"use strict";
$(document).ready(function () {
    renderNewsblock(news_data);
    renderEventsblock(events_data);
    responsiveNAV();
    newsSlideShow();
    eventsSlideShow();
});


function closeNav() {
    document.getElementById("header_nav").style.top = "-500px";
}

function openNav() {
    document.getElementById("header_nav").style.top = "60px";
}