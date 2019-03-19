const pelicula = {
    nombre: 'Sam',
    id: 01,
    reproducir(){
        return `Reproduciendo pelicula... ${this.nombre}`;
    }
}

// console.log(pelicula);

class Pelicula {
    constructor(nombre, id){
        this.nombre = nombre;
        this.id = id;
    }

    reproducir(){
        return `Reproduciendo pelcula ${this.nombre}`
    }
}

class Serie extends Pelicula{

    constructor(nombre,id,cap){
        super(nombre,id);
        this.cap = cap;
    }

    reproducircap(){
        return `Reproduciendo Capitulo... ${this.cap}...${this.nombre}`
    }
}

const peliculaUno = new Pelicula('sam', 1);
const peliculaDos = new Pelicula('david', 2);
const SerieUno = new Serie('flash', 3, 8);


console.log(peliculaUno.reproducir());
console.log(peliculaDos.reproducir());
console.log(SerieUno.reproducircap());