var formulario = document.getElementById('formulario');
var respuesta = document.getElementById('respuesta');

formulario.addEventListener('submit', function(e){//el submit va a hacer una funcion al dar click
    e.preventDefault();
    console.log('click')

    var datos = new FormData(formulario);
    console.log(datos.get('usuario'))

    fetch('post.php',{
        method: 'POST',
        body: datos
    })
    .then( res => res.json())
    .then( data => {
        console.log(data)
        if (data === 'Error') {
            respuesta.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Llena todo los campos
            </div>`
        }else{
            respuesta.innerHTML = `
            <div class="alert alert-primary" role="alert">
                ${data}
            </div>`
        }
    })
})