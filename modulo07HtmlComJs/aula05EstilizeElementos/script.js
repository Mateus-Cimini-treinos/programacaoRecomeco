const nome = document.getElementById('userName');
const operationValue = document.getElementById('operationValue');
const mensagemParaOLobao = document.getElementById('message');

const errorName = document.getElementById('errorName');
const errorKiss = document.getElementById('errorKiss')

const btn = document.getElementById('btnSubmit');




function mensagemNoConsole(event) {
    event.preventDefault();

    let temErro = false;

    // Valida Nome
    if (nome.value.trim() === "") {
        errorName.style.display = 'block';
        temErro = true;
    } else {
        errorName.style.display = 'none';
    }

    // Valida Beijos
    if (Number(operationValue.value) <= 0) {
        errorKiss.style.display = 'block';
        temErro = true;
    } else {
        errorKiss.style.display = 'none';
    }

    if (temErro) {
        return;
    }

    console.log(`Meu nome é: ${nome.value}`);
    console.log(`O valor depositado é: ${operationValue.value}`);
    console.log(`A mensagem é: ${mensagemParaOLobao.value}`);

    function validaBeijos(valor) {
    return valor >= 6;
}

    const mensagemdeSucesso = `A ${nome.value} deu ${operationValue.value} beijos no Lobão
        O AMOR VENCEU !!!💖💘💝💖💘💝
        Recado da ${nome.value}: ${mensagemParaOLobao.value}`
    
    if (validaBeijos(Number(operationValue.value))) {
        alert(mensagemdeSucesso);
        nome.value = "";
        operationValue.value = "";
    } else {
    alert(`${nome.value} faz o favor de dar mais beijos!!😡😡 Você deu apenas ${operationValue.value} no Lobão 🐺`);
    }

}

btn.addEventListener('click', mensagemNoConsole);


