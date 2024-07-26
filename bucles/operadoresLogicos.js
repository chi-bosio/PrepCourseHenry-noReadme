// AND
function mayorYMenor(num){
    if(num > 5 && num < 10) console.log(true);
    else console.log(false);
}

mayorYMenor(2)
mayorYMenor(7)

// OR
function operadorOr(str){
    if(str === 'Henry' || str.length < 2) console.log(true);
    else console.log(false);
}
operadorOr('Henry')
operadorOr('Javascript')
operadorOr('js')

// NOT
function negacion(permiso){
    if(!permiso) console.log('Tiene permiso');
}
negacion(true)
negacion(false)

// Condición compleja
function condicionCompleja(num){
    if(num > 9 && num % 2 === 0 || num === 3) console.log(true);
    else console.log(false);
}
condicionCompleja(10)
condicionCompleja(6)
condicionCompleja(3)
condicionCompleja(5)