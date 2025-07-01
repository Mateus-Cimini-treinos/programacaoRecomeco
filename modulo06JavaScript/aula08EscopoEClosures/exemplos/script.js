//FUNÇÃO COM APENAS 1 PARÂMETRO
function descobrirIdade(anoNacimento) { // Define uma função chamada 'descobrirIdade' que recebe o parâmetro 'anoNacimento'
    return 2024 - anoNacimento // Retorna o resultado da subtração entre 2024 e o ano de nascimento fornecido
}
console.log(descobrirIdade(2020)); // Chama a função 'descobrirIdade' com o argumento 2020 e exibe o resultado no console





//FUNÇÃO COM 3 PARÂMETROS
function somarNumeros(n1, n2, n3) { // Define uma função chamada 'somarNumeros' que recebe três parâmetros: 'n1', 'n2', e 'n3'
    return n1 + n2 + n3 // Retorna a soma dos três números passados como parâmetros
}
console.log(somarNumeros(10, 20, 20)); // Chama a função 'somarNumeros' com os argumentos 10, 20 e 20, exibindo o resultado no console





// FAZENDO A FUNÇÃO ACIMA FICAR MAIS AGRADÁVEL PARA O USUÁRIO
function somarNumeros2(n1, n2, n3) { // Define uma função chamada 'somarNumeros2' com três parâmetros: 'n1', 'n2' e 'n3'
    let resultado = n1 + n2 + n3 // Calcula a soma dos três parâmetros e armazena o valor na variável 'resultado'
    return console.log('O resultado da soma dos 3 valores é de: ' + resultado); // Exibe uma mensagem amigável ao usuário com o resultado da soma
};
somarNumeros2(1, 5, 4) // Chama a função 'somarNumeros2' com os argumentos 1, 5 e 4, exibindo o resultado da soma no console





// USANDO FUNÇÕES PARA INTERAÇÃO NO NAVEGADOR
let n1 = parseInt(prompt('Digite o valor 1')) // Solicita ao usuário um valor, converte o valor para inteiro e o armazena em 'n1'
let n2 = parseInt(prompt('Digite o valor 2')) // Solicita ao usuário um segundo valor, converte para inteiro e armazena em 'n2'
let n3 = parseInt(prompt('Digite o valor 3' )) // Solicita um terceiro valor, converte para inteiro e armazena em 'n3'

function somarNumeros3(n1, n2, n3) { // Define uma função chamada 'somarNumeros3' que recebe três parâmetros
    let resultado = n1 + n2 + n3 // Calcula a soma dos três parâmetros e armazena na variável 'resultado'
    return alert(`${n1} + ${n2} + ${n3} = ${resultado}`) // Exibe um alerta com a soma dos três valores em formato amigável
}
somarNumeros3(n1,n2,n3) // Chama a função 'somarNumeros3' passando os valores fornecidos pelo usuário e exibe o resultado em um alerta
