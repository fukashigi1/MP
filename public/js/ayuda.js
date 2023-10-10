$(document).ready(function(){
    $("#nombre").on("focus", function(){
        $("#nombreLabel").css("bottom", "-8px");
        $("#nombreLabel").css("background-color", "white");
    })
    $("#nombre").on("blur", function(){
        if($("#nombre").val() == ""){        
            $("#nombreLabel").css("bottom", "-31px");
            $("#nombreLabel").css("background-color", "transparent");
        }
    });

    // Crear nuevo proyecto formulario

    $('.elemento').click(function() {
        var icono = $(this).find('i');

        icono.toggleClass('rotado');
        $(this).find('.pregunta-respuesta').slideToggle();
    });
});

