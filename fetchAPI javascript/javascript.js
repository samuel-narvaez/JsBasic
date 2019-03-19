/* var contenido = document.querySelector('#contenido');
         function traer() {
              contenido.innerHTML = `<p>samuel david</p>`
             fetch('texto.txt')//hace promesas 
            transforma el data en un archivo txt
             .then(data => data.text())//necesita capturar algo pero me prometes q me traes una respuesta
             .then(data => {
                 console.log(data)
                 contenido.innerHTML = `${data}`
             })
        }
*/

var contenido = document.querySelector('#contenido');

        function traer() {
            fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                contenido.innerHTML = `<img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle">
                <p>Nombre: ${data.results['0'].name.last} </p>`
            })
        }
