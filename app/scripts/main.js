$(document).ready(function(){

    //header city dropdown 
    $("#header .city-dropdown .dropdown-top .name").click(function(){
        $(this).closest(".city-dropdown").find(".dropdown-bottom").slideToggle();
    })
    $("#header .city-dropdown .dropdown-bottom .dropdown-item").click(function(){
        var clickedValue=$(this).text().replace(/\s/g, '');
        $(this).closest(".city-dropdown").find(".dropdown-top").find('.name').text(clickedValue);
        $(this).closest(".dropdown-bottom").slideUp();
    })

    //slider 
    $("#categories .slider-container").owlCarousel({
        items:1,
        dots:true,
        loop:true,
    })

    //BackToTop
    $(window).scroll(function(){
      if($(this).scrollTop()>200)  {
        $(".back-to-top").fadeIn();
      }else{
        $(".back-to-top").fadeOut(); 
      }
    })

    $(".back-to-top").click(function(){
        $('html,body').animate({scrollTop:0},450);
    })

    //popups
    $('.login-popup').click(function(){
        $(".active-registration-overlay").fadeIn();
        $(".registration").fadeIn();
    })
    $('.exit-icon').click(function(){
        $(".active-registration-overlay").fadeOut();
        $(".registration").fadeOut();
    })

    //registration accardion
    $('.reg-content-accardion').click(function(){
        if(!$(this).hasClass("active")){
            $('.reg-content-accardion').removeClass("active");
            $('.accardion-content').removeClass("active");
            $(".accardion-content").eq($(this).index()).addClass('active');
            $(this).addClass('active'); 
        }
        
    })
   
    
})