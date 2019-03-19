$(document).ready(function () {

    // $('h1').html('etiqueta h1');
    // $('.display-4').html('hey');
    // $('#idh1').html('what?');

    // document.querySelector('h1').innerHTML= 'Etiqueta h1';

    // $('.container h1').html('cambio de texto');
    // $('.container h1:first').html('cambio de texto');
    // $('.container h1:last').html('cambio de texto');

 // ----------------------------------------------------------------

    // $('#idh1').addClass('text-danger');
    // $('#idh1').removeClass('display-4');

    // $('#contenido').append('<h1>the end</h1>'); //para que el texto vaya al final
    // $('#contenido').prepend('<h1>welcome</h1>'); // para que el texto vaya al principio

    // $('#color-azul').css('color', 'blue');
    // $('#color-azul').css({color: 'blue', background: 'salmon', padding: '20px'});

    // // $('#color-azul').remove(); //no aparece en el Dom
    // //  $('#color-azul').hide(); // si aparece en Dom

// ----------------------------------------------------------------

    // $('img').attr('src', 'https://codeorigin.jquery.com/jquery-wp-content/themes/jquery/content/books/learning-jquery-4th-ed.jpg');
    // $('img:last').attr("width", "50px");

// ----------------------------------------------------------------

//                 eventos a los botones
// var parrafo = $('#resultado p');

// $('.btn-primary').click(function () { 
//     parrafo.addClass('display-4');
    
// });

// $('.btn-danger').click(function () { 
//     parrafo.removeClass('display-4');
    
// });

// $('.btn-warning').click(function () { 
//     parrafo.toggleClass('display-4');
    
// });

// ----------------------------------------------------------------

// $('#formulario').submit(function (e) { 
//     e.preventDefault();
//     var nombre = $('#nombre').val();
//     console.log(nombre);
// });

// ----------------------------------------------------------------

                // efecto a los botones 

    var resultado = $('#resultado');

$('.btn-primary').click(function () { 
    resultado.hide(1000);
    
});

$('.btn-danger').click(function () { 
   resultado.show();
    
});

$('.btn-warning').click(function () { 
    resultado.toggle(1000);
    
});

});