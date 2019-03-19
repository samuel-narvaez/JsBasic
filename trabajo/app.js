
var Data1 = [
    "maquiavelo", "stewar", "principito", "matadero", "azul"
];

var Data2 = [
    1234, 5678, 9012, 3456, 7890
];

var Data3 = [
    '1995-08-18', '2000-05-06', '2002-09-07', '2006-04-03', '2009-03-01'
];

var Data4 = [
    "Terror", "Novelas", "Ciencia", "CienciaFiccion", "Cocina"
];

var posicion;
function mostra() {
    
    var text = document.getElementById('ingresartexto').value;
    var opc = document.getElementById('selectBuscar').value;
    if (opc == "nom") {
        for (var i = 0; i < Data1.length; i++) {
            if (Data1[i] == text) {
                var nom = document.getElementById('nombres');
                var cod = document.getElementById('codigo');
                var fecha = document.getElementById('fecha');
                var tipo = document.getElementById('tipo');
                nom.value = Data1[i];
                cod.value = Data2[i];
                fecha.value = Data3[i];
                tipo.value = Data4[i];
                posicion=i;
            }
        }
    } else {
        if (opc == "cod") {
            for (var i = 0; i < Data2.length; i++) {
                if (Data2[i] == text) {
                    var nom = document.getElementById('nombres');
                    var cod = document.getElementById('codigo');
                    var fecha = document.getElementById('fecha');
                    var tipo = document.getElementById('tipo');
                    nom.value = Data1[i];
                    cod.value = Data2[i];
                    fecha.value = Data3[i];
                    tipo.value = Data4[i];
                }
            }
        } else {
            if (opc == "fecha") {
                for (var i = 0; i < Data3.length; i++) {
                    if (Data3[i] == text) {
                        var nom = document.getElementById('nombres');
                        var cod = document.getElementById('codigo');
                        var fecha = document.getElementById('fecha');
                        var tipo = document.getElementById('tipo');
                        nom.value = Data1[i];
                        cod.value = Data2[i];
                        fecha.value = Data3[i];
                        tipo.value = Data4[i];
                    }
                }

            } else {
                if (opc == "tipo") {
                    for (var i = 0; i < Data4.length; i++) {
                        if (Data4[i] == text) {
                            var nom = document.getElementById('nombres');
                            var cod = document.getElementById('codigo');
                            var fecha = document.getElementById('fecha');
                            var tipo = document.getElementById('tipo');
                            nom.value = Data1[i];
                            cod.value = Data2[i];
                            fecha.value = Data3[i];
                            tipo.value = Data4[i];
                        }
                    }
                }
            }

        }

    }
}



function editar() {
    var nombresCap = document.getElementById('nombres').value;
    var codigoCap = document.getElementById('codigo').value;
    var fechaCap = document.getElementById('fecha').value;
    var tipoCap = document.getElementById('tipo').value;
    var terminosCap = document.getElementById('terminos').checked;

    var estado = true;

    if (nombresCap == "") {
        alert("Ingrese sus Nombres");
        estado = false;
    }

    if (codigoCap == "") {
        alert("Ingrese su Cedula ");
        estado = false;
    }
    if (fechaCap == "") {
        alert("Ingrese una Fecha");
        estado = false;
    }
    if (tipoCap == "Seleccione") {
        alert("Seleccione su libro favorito");
        estado = false;
    }
    if (terminosCap == "") {
        alert("Acepte los Terminos y condiciones");
        estado = false;
    }

    if (estado == true) {
        console.log(posicion);
        
        
            if (Data1[posicion] != nombresCap) {
                Data1[posicion] = nombresCap;  
                Data2[posicion] = codigoCap; 
                Data3[posicion] = fechaCap; 
                Data4[posicion] = tipoCap; 
                console.log(Data1[posicion]);
            }
    }

}

