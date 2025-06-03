const nome = document.getElementById('userName');
const operationValue = document.getElementById('operationValue');

const btn = document.getElementById('btnSubmit');




function mensagemNoConsole(event) {
    event.preventDefault();

    function validaBeijos(valor) {
    return valor >= 6;
}

    const mensagemdeSucesso = `A ${nome.value} deu ${operationValue.value} beijos no Lobão
        O AMOR VENCEU !!!💖💘💝💖💘💝`
    
    if (validaBeijos(Number(operationValue.value))) {
        alert(mensagemdeSucesso);
        nome.value = "";
        operationValue.value = "";
    } else {
    alert(`${nome.value} faz o favor de dar mais beijos!!😡😡 Você deu apenas ${operationValue.value} no Lobão 🐺`);
    }

}

btn.addEventListener('click', mensagemNoConsole);


