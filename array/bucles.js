// FOR
var arr = [1, 2, 3, 4, 5]

for(var i = 0; i < arr.length ; i++){
    console.log(arr[i]);
}


function encontrarLetraP(str){
    var letras = str.split('')

    for(let i = 0; i < letras.length; i++){
        if(letras[i] === 'p'){
            console.log('Si contiene a P');
        }
    }
}

encontrarLetraP('Javascript')
encontrarLetraP('Henry')


// WHILE
var arr = []

while(arr.length < 5){
    arr.push('BOOM')
}
console.log(arr);


// BUCLE INFINITO
var arr = []
var n = 1

while(n < 3){
    arr.push(Math.random())
}