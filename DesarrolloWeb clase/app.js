var arregloSumas = [];
var i = 0;


function sumar() {
    var num1 = document.getElementById('n1').value;
    var num2 = document.getElementById('n2').value;

    var suma = parseInt(num1) + parseInt(num2);

    document.getElementById('resultado').value = suma;

    console.log(num1);
    console.log(num2);
    
    

    arregloSumas.push(suma);

    /*  var c = document.getElementById('contenedor');
     c.innerHTML = "texto";
     c.style.border = "4px solid red";
    */
    
    

    /* arregloSumas.push(suma);

     function mostrar() {
         for (i =0;  i<arregloSumas.length ; i++) {
             valor = arregloSumas[i];
             alert(valor);
         }
     }
 */
    
}


function mostrar() {
    arregloSumas.forEach(function(valor){
        console.log(valor);
    });
}

function data(terminos1,termino2){
    this.termino1 = termino1;
    this.termino2 = termino2;
}

var TerCap = document.getElementById('termino1').checked;
var Tercap = document.getElementById('termino2').checked;


var estado = true;
var sexoCap = document.getElementById('sexo').value;
    var sexoCap = document.formulario.sexo;
    for (let i = 0; i < sexoCap.length; i++) {
        if (sexoCap[i].checked) {
            var sexoCapturado = sexoCap[i].value;
        }
    }