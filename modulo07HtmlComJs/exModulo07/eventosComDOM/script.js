    let div = window.document.getElementById('divEx');


div.addEventListener('click', clicar)
div.addEventListener('mouseenter', entrou)
div.addEventListener('mouseout', saiu)
function clicar() {
    div.innerText = 'Clicou!!!!'
}

function entrou() {
    div.innerText = 'Entrou!!!'
    div.style.backgroundColor = 'blue'
}

function saiu() {
    div.innerText = 'Saiu!!!'
    div.style.backgroundColor = 'red'
}