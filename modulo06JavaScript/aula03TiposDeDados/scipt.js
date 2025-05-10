let number1 = 15; // número inteiro (int)
console.log(typeof(number1)); // verifica e exibe o tipo de number1 (Number)

let number2 = 5.87; // número de ponto flutuante (float)
console.log(typeof(number2)); // verifica e exibe o tipo de number2 (Number)

let number3 = '6'; // string que contém um número
console.log(typeof(number3)); // verifica e exibe o tipo de number3 (String)

let fruta = 'maça'; // string contendo texto
console.log(typeof(fruta)); // verifica e exibe o tipo de fruta (String)

let banho = true; // booleano (verdadeiro)
console.log(typeof(banho)); // verifica e exibe o tipo de banho (Boolean)

let fome = false; // booleano (falso)
console.log(typeof(fome)); // verifica e exibe o tipo de fome (Boolean)

let carro; // variável não inicializada (undefined)
console.log(typeof(carro)); // verifica e exibe o tipo de carro (Undefined)


// mudando o tipo de dado de uma variável
console.log(typeof(fruta)); // exibe o tipo original de fruta (String)
console.log(typeof(parseInt(fruta))); // converte a string 'maça' para número (NaN, pois 'maça' não pode ser convertido)

