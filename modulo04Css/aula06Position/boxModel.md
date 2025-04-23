# Modulo 04 - Aula 06 Position


# 📘 CSS: Atributo `position`

A propriedade `position` no CSS é usada para definir como um elemento HTML será posicionado na página. Ela afeta como o navegador calcula a posição do elemento no fluxo do documento.

## 🔹 Tipos de `position`

### `static` (Padrão)
- Valor padrão de todos os elementos.
- O elemento é posicionado conforme o fluxo normal do documento.
- Propriedades como `top`, `right`, `bottom` e `left` **não têm efeito**.

```css
.caixa {
  position: static;
}
```

---

### `relative`
- O elemento mantém seu espaço no layout, mas pode ser **deslocado** com `top`, `left`, `right` ou `bottom`.
- O deslocamento é **relativo à posição original** do elemento.

```css
.caixa {
  position: relative;
  top: 20px;
  left: 10px;
}
```

---

### `absolute`
- Remove o elemento do fluxo do documento.
- O posicionamento será feito **em relação ao elemento pai mais próximo que tenha `position: relative`, `absolute` ou `fixed`**.
- Se não houver nenhum, será posicionado em relação ao `body`.

```css
.container {
  position: relative;
}

.filho {
  position: absolute;
  top: 0;
  right: 0;
}
```

---

### `fixed`
- O elemento é **fixado na tela**, independentemente do scroll.
- É posicionado **em relação à janela de visualização (viewport)**.
- Útil para barras de navegação ou botões fixos.

```css
.botao-flutuante {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
```

---

### `sticky`
- Comporta-se como `relative` até que um ponto de rolagem seja atingido, e então se comporta como `fixed`.
- Útil para cabeçalhos ou menus que precisam “grudar” no topo ao rolar.

```css
.menu {
  position: sticky;
  top: 0;
  background-color: white;
}
```

---

## 🔸 Propriedades combinadas

Com `position: relative | absolute | fixed | sticky`, você pode usar:

- `top`
- `right`
- `bottom`
- `left`
  
Exemplo:

```css
.elemento {
  position: absolute;
  top: 10px;
  left: 15px;
}
```

---

## 🧠 Dicas Importantes

- Sempre defina um `position: relative` no **container pai** se for usar `absolute` nos filhos.
- `fixed` ignora qualquer scroll e pode se sobrepor a outros elementos.
- `sticky` precisa de um contexto com altura definida para funcionar corretamente.

---

## 📌 Comparativo Rápido

| Valor      | Sai do fluxo? | Referência de posição         | Mantém espaço? |
|------------|---------------|-------------------------------|----------------|
| static     | Não           | Fluxo natural                 | Sim            |
| relative   | Não           | Posição original              | Sim            |
| absolute   | Sim           | Elemento pai posicionado      | Não            |
| fixed      | Sim           | Janela de visualização        | Não            |
| sticky     | Não (até certo ponto) | Janela de visualização (após scroll) | Sim |

---

## ✅ Quando Usar

- `relative`: pequenos ajustes de posição.
- `absolute`: posicionar itens dentro de contêineres específicos.
- `fixed`: elementos que devem permanecer visíveis.
- `sticky`: cabeçalhos ou menus fixos após o scroll.
