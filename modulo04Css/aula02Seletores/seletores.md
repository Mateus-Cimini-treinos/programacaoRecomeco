# Modulo 04 - Aula 02 Seletores 


# 📘 CSS: Seletores (id, class e mais)

## 🔹 Seletor de Classe (.classe)

Usado para aplicar estilos a vários elementos com a mesma classe.

Sintaxe: `.` seguido do nome da classe.

```css
.card {
  background-color: #f9f9f9;
  padding: 20px;
}
```

```html
<div class="card">Conteúdo 1</div>
<div class="card">Conteúdo 2</div>
```

## 🔸 Seletor de ID (#id)

Usado para estilizar um único elemento com um identificador único.

Sintaxe: `#` seguido do nome do id.

```css
#menu {
  background-color: #333;
  color: white;
}
```

```html
<nav id="menu">Menu Principal</nav>
```

## 🔸 Diferenças entre .class e #id

| Característica | `.class` | `#id` |
|----------------|----------|-------|
| Reutilização   | Sim      | Não (único por página) |
| Especificidade | Menor    | Maior |
| Sintaxe        | `.`      | `#`   |

## 🔹 Outros Seletores Comuns

### 🔸 Seletor de Tipo (Tag)

Aplica estilo a todas as tags do tipo:

```css
p {
  font-size: 16px;
}
```

### 🔸 Seletor Universal (*)

Aplica estilo a todos os elementos:

```css
* {
  margin: 0;
  padding: 0;
}
```

### 🔸 Seletor de Atributo

Seleciona elementos com atributos específicos:

```css
input[type="text"] {
  border: 1px solid #ccc;
}
```

### 🔸 Seletor Descendente

Seleciona elementos dentro de outros:

```css
.container p {
  color: #555;
}
```

### 🔸 Seletor de Filho Direto (>)

```css
.container > p {
  font-weight: bold;
}
```
