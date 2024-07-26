function viajar(destino){
    if(destino === 'Brasil'){
        console.log('Gire a la izquierda');
    } else if(destino === 'Argentina'){
        console.log('Gira a la derecha');
    } else{
        console.log('Nos perdimos!!');
    }
}

viajar('Uruguay')

function puedeManejar(edad){
    if(edad >= 18){
        console.log(true);
    } else{
        console.log(false);
    }
}
puedeManejar(15)
puedeManejar(20)