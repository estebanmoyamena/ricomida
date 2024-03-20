$(document).ready(function(){

    $('#enviarcorreo').mouseenter(function () {
        $(this).tooltip("Enviar por correo");
    });

    $("#enviarcorreo").click(function () {
        alert("El correo fue enviado correctamente");
    });

    $('#botonañadirafavoritos').mouseenter(function () {
        $(this).tooltip("Añadir a favoritos");
    });

    $("#INGREDIENTES,#PREPARACIÓN").dblclick(function(){
    $(this).css({
    "color": "red",
    });
    });
    
    $(".card-body").on ("click",function(){
        $(this).toggle();
    });

    });