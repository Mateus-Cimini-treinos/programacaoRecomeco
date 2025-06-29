

# 📌 addEventListener em JavaScript

---

## ✅ O que é `addEventListener`?

O `addEventListener` é um método usado para **registrar funções que devem ser executadas quando certos eventos ocorrem** em elementos HTML, como cliques, movimentos do mouse, pressionamento de teclas, entre outros.

---

## 🛠️ Para que serve?

Serve para **interagir dinamicamente com o usuário**, adicionando funcionalidades que respondem a ações como:
- Clicar em botões
- Passar o mouse em elementos
- Preencher formulários
- Pressionar teclas do teclado

---

## 🧠 Como usar?

### Sintaxe:
```js
elemento.addEventListener('evento', função);
````

* `elemento`: o elemento HTML que você quer monitorar
* `'evento'`: o tipo de evento (ex: `'click'`, `'mouseover'`, `'submit'`)
* `função`: o código que será executado quando o evento ocorrer

---

## 💡 Exemplos:

### 1. Clique em botão

```html
<button id="meuBotao">Clique aqui</button>
<script>
  const botao = document.getElementById('meuBotao');

  botao.addEventListener('click', function() {
    alert('Botão clicado!');
  });
</script>
```

### 2. Passar o mouse

```js
elemento.addEventListener('mouseover', () => {
  elemento.style.color = 'red';
});
```

### 3. Enviar formulário sem recarregar a página

```js
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Evita recarregar a página
  console.log('Formulário enviado!');
});
```

---

## 🧪 Eventos mais comuns:

| Evento        | O que faz                       |
| ------------- | ------------------------------- |
| `'click'`     | Quando o usuário clica          |
| `'mouseover'` | Quando o mouse passa por cima   |
| `'mouseout'`  | Quando o mouse sai de cima      |
| `'submit'`    | Quando um formulário é enviado  |
| `'keydown'`   | Quando uma tecla é pressionada  |
| `'change'`    | Quando o valor de um input muda |

---

## ⚠️ Observações importantes

* O `addEventListener` permite adicionar **vários ouvintes ao mesmo elemento e evento**, ao contrário de `onclick`, que só aceita uma função.
* É possível remover um event listener usando `removeEventListener`, mas a função precisa ser nomeada (não pode ser anônima).

---

## 🧭 Quando usar?

* Sempre que quiser responder a uma ação do usuário sem recarregar a página.
* Quando quiser adicionar interatividade ao seu site.
* Para manipular dinamicamente elementos HTML com JavaScript.

---

## 📝 Exercício sugerido:

Crie um botão que, ao ser clicado, altere o texto de um `<h1>` na sua página.

**Dica:**

* Use `getElementById()` para selecionar o botão e o título.
* Use `innerText` para alterar o texto do `<h1>`.

---

## ✅ Resumo Final

| Conceito           | Explicação curta                                |
| ------------------ | ----------------------------------------------- |
| `addEventListener` | Método para "ouvir" eventos no HTML             |
| Sintaxe            | `element.addEventListener('evento', função)`    |
| Vantagem           | Pode adicionar vários eventos no mesmo elemento |


