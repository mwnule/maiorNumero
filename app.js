const prompt = require('prompt-sync')();

let numero = prompt("Informe um número: ").trim();
let algarismos = numero.split('')

function maior() {
    let maiorNum = parseInt(algarismos.sort((a, b) => b - a).join(''))
    return maiorNum
}

let maiorN = maior(algarismos)
console.log(maiorN)







// 1. Criar um algoritmo que tenha a capcidade de reorganizar e ler os algarismos inteiros de um número
// 2. Entender os algarismos dos números como números separados, não somente como um só
// 3. Criar uma lógica, talvez com um laço de repetição, para reorganizar os algarismos

// Ideias:
// - Criar um array para separar cada algarismo de um número 

