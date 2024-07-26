var colores = ['amarillo', 'azul']

// Agrega elemento al último
colores.push('rojo')
console.log(colores);

// Agrega elemento al principio
colores.unshift('verde')
console.log(colores);

// Elimina último elemento
colores.pop()
console.log(colores);

// Elimina primer elemento
colores.shift()
console.log(colores);

// Incluye elemento
var pintores = ['Picasso', 'Velazquez', 'Van Gogh', 'Dali']

var incluyeDali = pintores.includes('Dali')
console.log('Incluye Dali?', incluyeDali);

var incluyeMonet = pintores.includes('Monet')
console.log('Incluye Monet?', incluyeMonet);

// Verificar si todos cumplen x función
var num = [1, 6, 8, 9]
var cumpleCondicion = num.every(num => num > 5)
console.log('Cumple la condición?', cumpleCondicion);

// Separar elementos / Unir elementos
var palabra = 'Henri'
var palabraSeparada = palabra.split('')
console.log('Separo palabra:', palabraSeparada);

palabraSeparada.pop()
palabraSeparada.push('y')
console.log('Cambio "i" por "y":', palabraSeparada);

var palabraArreglada = palabraSeparada.join('')
console.log('Unifico letras:', palabraArreglada);

// FOREACH
var numeros = [1, 2, 3, 4]
numeros.forEach(num => console.log(num))
numeros.forEach(num =>{
    if(num === 3){
        console.log(num);
    }
})

// Map
var numero = [1, 2, 3, 4]
var masUno = numero.map(num => num + 1)
console.log(masUno);