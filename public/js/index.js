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
      
      let vid = document.getElementById("background-video"); 
      $('.botonPausa').on('click', function(){
          if ($('.botonPausa').text() == "Pausa"){
              $('.botonPausa').text("Reproducir");
              vid.pause();
          }else{
              $('.botonPausa').text("Pausa");
              vid.play();
          }
      });
      $("#probar").on("click", function(){
        window.location.href = 'login'; 
      });

      $("#terminos").on("click", function(){
        window.location.href = 'terminos'; 
      });

      // Desplazamiento barra de navegación
      
      $("#actualizaciones").click(function() {
          // Obtener la posición del elemento de destino
          var targetPosition = $("#actualizacionesParrafo").offset().top;
          // Realizar el desplazamiento suave con transición
          $("html, body").animate({
            scrollTop: targetPosition-120
          }, 500); 
      });
      $("#comoFunciona").click(function() {
          var targetPosition = $("#comoFuncionaParrafo").offset().top;
          $("html, body").animate({
            scrollTop: targetPosition-120
          }, 500); 
      });
      $("#quienesSomos").click(function() {
          var targetPosition = $("#quienesSomosParrafo").offset().top;
          $("html, body").animate({
            scrollTop: targetPosition-120
          }, 500); 
      });
      $("#que").click(function() {
          var targetPosition = $("#queParrafo").offset().top;
          $("html, body").animate({
            scrollTop: targetPosition-120
          }, 500); 
      });
      
});