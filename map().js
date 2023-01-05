// ".map()" mapeia o array e altera individualmente para item 
// Funciona como mais uma estrutura de repetição, como o "for"

const notas = [10, 9, 8, 7, 6];

/* let notasAtualizadas = notas.map(function(nota) {
    return nota += 1;
}) */

 let notasAtualizadas = notas.map(atualizar);
function atualizar(nota) {
    return nota += 1;
}

console.log(notasAtualizadas)

// Aplicação prática com strings
let nomes = ['ana Julia', 'Caio vinicius', 'BIA silva'];

let nomesAtualizados = nomes.map(function(nome) {
    return nome.toUpperCase();
})

console.log(nomesAtualizados);

// Outro exemplo
const nome = "Alura";
let nomeMaiusculas = "";

for (let i = 0; i < nome.length; i++) {
 nomeMaiusculas += nome[i].toUpperCase();
}
console.log(nomeMaiusculas) //ALURA

// Callback com map - Declaração de funcão antes do map
const numeros = [1, 2, 3, 4];

let novosNumeros = numeros.map(multiplicaPorDez);
function multiplicaPorDez(num) {
    return num*10;
}

console.log(novosNumeros);
