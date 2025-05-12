
// Create Array
const frutas = ["maçã", "banana", "limão"];
const animais = ["cachorro", "gato", "cavalo", "boi"];
const numeros = [4, 453, 54, 32]
const misturado = ["bola", 3, false];

// Acess Array
console.log(`Mostrando os elementos array de frutas: ${frutas}`);
console.log(`Mostrando o elemento 1 do array de frutas: ${frutas[0]}
    `);

// Modify Array
frutas[0] = "abacaxi"
console.log(`Troquei o elemento 1 do array de frutas por "abacaxi" : ${frutas}
    `);


// COMMON METHODS

// push (adiciona no final do array)
frutas.push('melancia')
console.log(`Adicionei "melancia" ao array de frutas: ${frutas}
    `);

// pop (remove o ultimo elemento e salva em uma variavel)
let ultimaFruta = frutas.pop()
console.log(`Removendo o ultimo elemento do array de frutas: ${frutas}`);
console.log(`Salvei o ultimo elemento em uma variavel: ${frutas}
    `);

// shift (remove o primeiro elemento e salva em uma variavel)
let primeiraFruta = frutas.shift()
console.log(`Removendo o primeiro elemento do array de frutas: ${frutas}`);
console.log(`Salvei o primeiro elemento em uma variavel: ${primeiraFruta}
    `);

// unshift (adiciona 1 ou mais elementos ao inicio do array)
frutas.unshift("laranja", "uva")
console.log(`Adicionei mais 2 elementos ao array de frutas: ${frutas}
    `);

// lenght (retorna o numeoros de elementos do array)
console.log(`O array de frutas tem ${frutas.length} elementos
    `);

// splice (remove, insere ou substitui elementos de um array)
frutas.splice(1, 1)
console.log(`Removeu 1 elemento a partir do indice 1 : ${frutas}`);

frutas.splice(2, 0, "goiaba")
console.log(`Adicionando 1 elemento no indice 2 : ${frutas}`);

frutas.splice(3, 1, "jabuticaba")
console.log(`Subistitui 1 elemento no indice 3 por outro: ${frutas}`);

removidoFruta = frutas.splice(0, 1)
console.log(`Removendo 1 elemento no indece 0 : ${frutas}`);
console.log(`Salvando o elemento em uma variavel: ${removidoFruta}
    `);

// slice (retorna uma parte do array sem modificar o arry original)
parteFrutas = frutas.slice(0, 2)
console.log(`Pegando parte do array de frutas: ${parteFrutas}
    `);


// forEach (pecorre ou intera cada elemento do array fazendo uma função)
frutas.forEach(function(frutas, index) {
    console.log(`${index + 1}: ${frutas}`);
})