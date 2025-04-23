# Modulo 04 - Aula 04 Box Sizing



# 📦 CSS: Box Sizing e Reset Padrão

## 🔹 O que é `box-sizing`?

O `box-sizing` é uma propriedade CSS que define como a largura e altura de um elemento são calculadas: se devem incluir padding e borda, ou não.

### ✨ Valores Comuns

- `content-box` (padrão): A largura e altura são aplicadas apenas ao conteúdo. Padding e borda são adicionados **fora** da largura/altura especificada.
- `border-box`: A largura e altura **incluem** o conteúdo, padding e borda.

### 📌 Exemplo

```css
.box {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  box-sizing: border-box;
}
```

Com `border-box`, o elemento ocupará **exatamente 300px** de largura, mesmo com o padding e a borda.

## 🔸 Reset Padrão com `box-sizing`

É comum no início de um projeto aplicar um "reset" para garantir que todos os elementos usem o mesmo modelo de box:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

### ✅ Por que usar esse reset?

- Garante consistência entre navegadores.
- Evita que padding e bordas quebrem o layout.
- Facilita o controle de tamanhos de elementos.

