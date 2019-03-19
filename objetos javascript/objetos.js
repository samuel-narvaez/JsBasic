// var arreglo= ["HTML", 3, true];

// console.log(arreglo);

// var objecto = {
//     nombre : 'HTML',
//     duracion: 15,
//     estado: true,
//     capitulos:{
//         nombre: 'Introduccion',
//         videos: 20
//     }
// }

//  console.log(objecto.nombre);
// console.log(objecto.capitulos);
// console.log(objecto);

var arrayObjetos = [
    {
        nombre: 'HTML',
        estado:true
    },
    {
        nombre:'CSS',
        estado:true,
    },
    {
        nombre:'JS',
        estado:false
    }
]

// console.log(arrayObjetos);
// console.log(arrayObjetos[0].nombre);

for (let indice of arrayObjetos) {
    console.log(indice) 
}