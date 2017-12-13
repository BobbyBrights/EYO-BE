$( document ).ready(function(){
    let height = $(window).height();
    console.log(height);
    $("#home-sec1").css("height",height);
    $("#homepage-section1 img").css("height",height);
    $(".button-collapse").sideNav();
    $('ul.tabs').tabs();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        
    });
    autoplay()   
    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 4500);
    }

    AOS.init({
        duration: 3000
    })
})