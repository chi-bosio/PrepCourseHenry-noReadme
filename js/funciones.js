function sumaTres(x){
    console.log(x + 3);
}
sumaTres(5)

// Formas de declarar una función
// Primera:
function sumaTres(x){
    return x + 3
}

// Segunda:
var sumaTres = function(x){
    return x + 3
}

// Tercera:
var sumaTres = x => {
    return x + 3
}


// return != console.log()
function cuidadoConElConsoleLog(nombre){
    console.log(nombre);
    return nombre
}

function cuidadoConElReturn(nombre){
    return nombre
    console.log(nombre)
}