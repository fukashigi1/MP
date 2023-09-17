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

      $('#volverArriba').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
      });

    $.ajax({
        url: '/lobby/name', // Reemplaza con la ruta correcta hacia tu función getUsuarios
        method: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        success: function(data) {
            console.log(data);
            desplegarNombre(data);
        },
        error: function(error) {
            console.error(error);
        }
    });
    

    // Nav
    $('.imgLogo').on('click', function(e) {
        window.location.href = '/';
      });
    $("#inicio").on("click", function(){
        window.location.href = '/lobby';
    });
    $("#misProyectos").on("click", function(){
        window.location.href = '/proyectos';
    });
    $("#miCuenta").on("click", function(){
        window.location.href = '/cuenta';
    });
    $("#cerrarSesion").on("click", function(){
        window.location.href = 'cuenta/salir';
    });
});
function desplegarNombre(nombre){
    $('#test').text(nombre.name);
}