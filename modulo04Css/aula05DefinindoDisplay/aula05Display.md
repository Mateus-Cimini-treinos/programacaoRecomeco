# Modulo 04 - Aula 05 Display 


# 📘 CSS: Propriedade `display`

A propriedade `display` define como um elemento é exibido na página. É uma das propriedades mais fundamentais do CSS, afetando diretamente o layout e a renderização dos elementos.

---

## 🔹 Valores Comuns

### `block`
- O elemento ocupa toda a largura disponível.
- Quebra de linha antes e depois do elemento.
- Exemplos: `<div>`, `<section>`, `<p>` (por padrão).

```css
div {
  display: block;
}
```

---

### `inline`
- O elemento não quebra linha.
- Só ocupa o espaço necessário ao conteúdo.
- Exemplos: `<span>`, `<a>` (por padrão).

```css
span {
  display: inline;
}
```

---

### `inline-block`
- Combina características de `inline` e `block`.
- Permite definir `width`, `height`, `padding`, etc., mas sem quebra de linha automática.

```css
button {
  display: inline-block;
}
```

---

### `none`
- Remove completamente o elemento da renderização.
- O espaço ocupado pelo elemento desaparece.

```css
.hidden {
  display: none;
}
```

---

## 🔸 Layouts Modernos

### `flex` (Flexbox)
- Cria um contêiner flexível.
- Permite alinhar e distribuir elementos com facilidade.

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

---

### `grid`
- Permite criar layouts em duas dimensões (colunas e linhas).
- Muito poderoso para layouts complexos.

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

---

## 🔹 Outros Valores

### `inline-flex`
- Semelhante ao `flex`, mas comporta-se como um elemento `inline`.

### `inline-grid`
- Mesma ideia do `grid`, mas em linha.

---

## 🔸 Comportamentos Padrão de Elementos HTML

| Tag HTML       | Display padrão |
|----------------|----------------|
| `<div>`        | block          |
| `<span>`       | inline         |
| `<section>`    | block          |
| `<a>`          | inline         |
| `<img>`        | inline-block   |
| `<form>`       | block          |

---

## 📌 Dica Comum: Alternar `display`
Você pode usar classes utilitárias ou media queries para alterar o `display` dinamicamente, como em:

```css
@media (max-width: 768px) {
  .menu {
    display: none;
  }
}
```

---

## ✅ Conclusão
A propriedade `display` é essencial para controlar a estrutura e o fluxo do layout de uma página web. Com o uso adequado, é possível criar interfaces modernas, responsivas e organizadas.


