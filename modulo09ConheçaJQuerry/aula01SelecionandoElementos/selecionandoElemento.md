
# 📌 Selecionando Elementos com jQuery

jQuery é uma biblioteca JavaScript que facilita a manipulação de elementos HTML. Uma das tarefas mais comuns ao usar jQuery é **selecionar elementos** para poder manipulá-los depois (adicionar classes, aplicar estilos, alterar conteúdo, etc).

---

## 🧠 O que são Seletores em jQuery?

São formas de **encontrar** elementos no HTML usando a **mesma sintaxe que os seletores do CSS**.

---

## 🛠 Como usar jQuery?

Antes de usar jQuery, é necessário **importar a biblioteca** no seu HTML:

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

E começar seu código assim:

```js
$(document).ready(function () {
  // Seu código aqui
});
```

---

# 🧭 Tipos de Seletores em jQuery

## 🔹 1. Selecionar por ID

```js
$('#meuId')
```

👉 Seleciona o elemento com o ID `meuId`.

---

## 🔹 2. Selecionar por Classe

```js
$('.minhaClasse')
```

👉 Seleciona **todos** os elementos com a classe `minhaClasse`.

---

## 🔹 3. Selecionar por Tag

```js
$('p')
```

👉 Seleciona todos os `<p>` do documento.

---

## 🔹 4. Seletores Compostos

```js
$('div.meuBox')
```

👉 Seleciona as `<div>` que possuem a classe `meuBox`.

---

## 🔹 5. Seletores Hierárquicos

```js
$('#container p')
```

👉 Seleciona todos os `<p>` que estão dentro do elemento com ID `container`.

---

# ✅ Exemplo Prático

HTML:

```html
<p class="destaque">Olá, mundo!</p>
```

JavaScript (jQuery):

```js
$(document).ready(function () {
  $('.destaque').css('color', 'red');
});
```

---

# ⚠️ Dicas Importantes

- Sempre inicie seu código jQuery dentro de `$(document).ready(...)`
- Use `#` para ID, `.` para classe e apenas o nome da tag para tags.
- Pode usar todos os seletores CSS como `:first-child`, `:nth-child`, `:hover` com jQuery.

---

# 📌 Resumo

| Tipo           | Exemplo            | O que faz                         |
|----------------|--------------------|-----------------------------------|
| ID             | `$('#meuId')`      | Seleciona por ID                  |
| Classe         | `$('.minhaClasse')`| Seleciona por classe              |
| Tag            | `$('h1')`          | Seleciona por nome de tag         |
| Combinado      | `$('div.box')`     | Seleciona `div` com classe `box`  |
| Hierárquico    | `$('#pai p')`      | Seleciona `<p>` dentro de `#pai`  |

---

## 💡 Próximo Passo:
Depois de selecionar elementos, você pode:
- Alterar o conteúdo com `.text()` ou `.html()`
- Alterar estilos com `.css()`
- Adicionar eventos com `.on()` ou `.click()`
