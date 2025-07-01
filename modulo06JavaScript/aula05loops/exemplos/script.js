// FOR
let champions = ['Ezreal', 'Kaisar', 'Jinx', 'Zeri']; // Declara um array com nomes de campeões
for(let i = 0; i < champions.length; i++) { // Loop 'for' percorre o array de campeões
    console.log('O meu campeão é: ' + champions[i]); // Exibe o nome de cada campeão, um por um
}


// WHILE
let phrase = 0; // Inicializa a variável 'phrase' com o valor 0
while(phrase < champions.length) { // Loop 'while' continua enquanto 'phrase' for menor que o comprimento do array
    console.log('O meu campeão preferido é: ' + champions[phrase]); // Exibe o nome do campeão preferido, com base no valor de 'phrase'
    phrase++; // Incrementa 'phrase' para passar ao próximo campeão
}


//DO WHILE
let n = 0; // Inicializa a variável 'n' com o valor 0
do {
    console.log('O campeão mais forte é: ' + champions[n]); // Exibe a mensagem com o nome do campeão na posição 'n' do array
    n++; // Incrementa 'n' para passar ao próximo campeão na próxima iteração
} while (n < champions.length); // O loop continua enquanto 'n' for menor que o comprimento do array 'champions'
