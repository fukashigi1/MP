$(document).ready(function(){
    $(document).ready(function(){
        $('html, body').animate({scrollTop:0}, '1');
    
        $(window).scroll(function() {
            var distanciaTop = $(window).scrollTop();
            if (distanciaTop >= 20) {
              $(".header").css("background-color", "#16161a");
            } else {
              $(".header").css("background-color", "#ffffff00");
            }
          });
    
          $('.imgLogo, #volverArriba').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, '300');
          });
          
          $("#probar").on("click", function(){
            window.location.href = 'login'; 
          });
    
          $("#inicio").on("click", function(){
            window.location.href = '/'; 
          });
          
    });
})