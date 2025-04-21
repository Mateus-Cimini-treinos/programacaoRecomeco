# Modulo 04 - Aula 01 Conceitos e Efeitos em CSS

## 1. Atributo `position`

- **static**: Padrão. O elemento segue o fluxo normal da página.
- **relative**: Permite mover o elemento em relação à sua posição original.
- **absolute**: Remove o elemento do fluxo e posiciona em relação ao ancestral mais próximo com `position: relative` (ou `body` se não houver).
- **fixed**: Posiciona o elemento em relação à viewport (fixo na tela).
- **sticky**: Comporta-se como `relative` até que atinja um limite definido, tornando-se `fixed`.

## 2. Detectar elemento na tela

Para mudar a cor de um elemento ao entrar na tela, pode-se usar a API `IntersectionObserver` com JavaScript. Um exemplo seria mudar a cor do `<h2>` da `section` visível:

```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelector('h2').style.color = 'blue';
    }
  });
});

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});
```

## 3. Efeito de zoom interno em imagens com `:hover`

Para dar um zoom sem aumentar o tamanho do container:

```css
.post {
  overflow: hidden;
}

.post a {
  display: block;
  position: relative;
  overflow: hidden;
  height: 180px;
}

.post a img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.post a:hover img {
  transform: scale(1.1);
}
```

## 4. `box-shadow`

Aplica uma sombra a um elemento. Sintaxe:

```css
box-shadow: offset-x offset-y blur-radius spread-radius color;
```

### Exemplo de sombra forte:

```css
box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.6);
```

## 5. Botão com borda que diminui no `:hover`

```css
button {
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007BFF;
  border: 4px solid #0056b3;
  border-radius: 8px;
  cursor: pointer;
  transition: border-width 0.3s ease, background-color 0.3s ease;
}

button:hover {
  border-width: 2px;
  background-color: #0056b3;
}
```

---

Esses conceitos e exemplos ajudam a criar efeitos visuais e comportamentos interativos mais sofisticados com CSS e um pouco de JavaScript.

