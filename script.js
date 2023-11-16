
// Crear un arreglo de números aleatorios
const numeros = [5, 2, 9, 3, 7, 6, 1, 8, 4];

// Ordenar el arreglo de números
numeros.sort((a, b) => a - b);

// Recorrer el arreglo con map
const numerosDobles = numeros.map(numero);

console.log(numerosDobles);
