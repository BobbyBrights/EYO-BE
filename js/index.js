$( document ).ready(function(){
    let height = $(window).height();
    let width = $(window).width();
    

    // $('.carousel').carousel();

    if(width>768){
        $("#homepage-section3").css("height",height); 
        $("#homepage-section2").css("height",height);
        $("#homepage-section1").css("height",height);
    }

    $("#homepage-section").css("height",height);
    $("#homepage-section img").css("height",height);
    $("#homepage-section.carousel.carousel-slider.initialized").css("height",height);

    if(width<768){
        $("#homepage-section").css("height",height/2);
        $("#homepage-section img").css("height",height/2);
        $("#homepage-section.carousel.carousel-slider.initialized").css("height",height/2);  
    }
    console.log("WIDTH: " +width);
    console.log("HEIGHT: " +height);
    //$("body").css("width",width)
    $("#get-form").css("width",width);
    $("#get-form").css("height",height);
    
    //$("#homepage-section3").css("height",height);
    $("#homepage-section1 img").css("height","100%");
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
        duration: 3000,
        disable: 'mobile'
    })
})




$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

// $('#myModal').modal(options)



