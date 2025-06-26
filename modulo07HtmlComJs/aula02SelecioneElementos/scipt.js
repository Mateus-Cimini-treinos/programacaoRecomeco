const name = document.getElementById('userName');
const number = document.getElementById('userNumber');
const operationValue = document.getElementById('operationValue');

const btn = document.getElementById('btnSubmit');

function mensagemNoConsole(event) {
    event.preventDefault();
    console.log(`Meu nome é: ${name.value}`);
    console.log(`O número da conta é: ${number.value}`);
    console.log(`O valor depositado é: ${operationValue.value}`);
}

btn.addEventListener('click', mensagemNoConsole);


