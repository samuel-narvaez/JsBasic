//Array
var arreglo=[1,2,3,'samuel'];

    //for
    for(var i=0; i<4; i++){
        console.log(arreglo[i]);    
    }

    //while
    var i=0;

    while(i<10){
        console.log(i);
        i++;
    }

    // do while
    do{
        console.log(i);
        i++;
    }while(i<10);

    //switch

    var hora = 15;
    switch (hora) {
        case 10:
            console.log('son las 10 de la mañana');
            break;
        case 15:
            console.log('son las 15 de la tarde');
            break;
        default:
            console.log('no tengo saludo a esa hora');
            break;
    }

    //funciones

    function suma(num1,num2) {
        return console.log(num1+num2);
    }

    suma(10,53);