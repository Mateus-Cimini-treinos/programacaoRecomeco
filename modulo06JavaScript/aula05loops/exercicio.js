// Mostre todos os nomes da lista no console.

let nomes = ["Mateus", "João", "Lucas", "Ana", "Paula"];

for (let n = 0; n < nomes.length; n++) {
    console.log(nomes[n]);
    
}

// Percorrer um array com while até encontrar um nome específico e exibir uma mensagem quando ele for encontrado.

let alvo = "Ana";
let start = 0;
let max = 5;

while (start < nomes.length) {
    console.log(`meu nome é: ${nomes[start]}`);

    if (nomes[start] === alvo) {
        console.log(`Nome encontrado: Ana`);
        break
    } 
    
    start++
}

//Crie um script que percorra um array de números e imprima somente os pares, utilizando do...while. 

num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
i = 0;

do {
    if (num[i] % 2 === 0) {
        console.log(`numero par encontrado : ${num[i]}`);
    } 
    i++
} while (i < num.length)