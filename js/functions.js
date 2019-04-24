function renderNewsblock(newsData){ 
    var html = '';
    for ( var i=0; i<newsData.length; i++) {
        html += renderBox( newsData[i] );
    }
    $('#news_slides').html(html);
    return;
}

function renderEventsblock(eventsData){
    var html = '';
    for ( var i=0; i<eventsData.length; i++) {
        html += renderBox( eventsData[i] );
    }
    $('#events_slides').html(html);
    return;
}

function renderBox( data ) {
    var html = ' <div class="box">\
                    <h4>'+data.date+'</h4>\
                    <p>'+data.text+'</p>\
                </div>'
    return html;
}

function responsiveNAV(){
    $('.menu-toggle').click(function(){
        $('#header_nav').toggleClass('active');
    })
}

function newsSlideShow(){
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
}

function eventsSlideShow(){
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
}

