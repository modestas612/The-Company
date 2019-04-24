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
                </div>\ '
    return html;
}

function responsiveNAV(){
    $('.menu-toggle').click(function(){
        $('#header_nav').toggleClass('active');
    })
}
