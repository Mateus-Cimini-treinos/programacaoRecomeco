

### 📱 Breakpoints no CSS Responsivo

Breakpoints (pontos de interrupção) são larguras específicas da tela onde o layout do site precisa se adaptar para oferecer uma boa experiência em diferentes dispositivos, como celulares, tablets e desktops.

---

## 🧩 Conceito

Os breakpoints são definidos utilizando **media queries** no CSS. Elas aplicam estilos diferentes dependendo da largura (ou outras características) da viewport.

---

## 🧪 Sintaxe básica

```css
@media screen and (max-width: 768px) {
  /* Estilos aplicados a telas com no máximo 768px */
}
```

```css
@media screen and (min-width: 769px) {
  /* Estilos aplicados a telas com no mínimo 769px */
}
```

---

## 📐 Breakpoints comuns por dispositivo

| Dispositivo        | Largura típica  | Media Query                                         |
| ------------------ | --------------- | --------------------------------------------------- |
| Celulares pequenos | até 480px       | `@media (max-width: 480px)`                         |
| Celulares médios   | até 640px       | `@media (max-width: 640px)`                         |
| Tablets            | 641px – 1024px  | `@media (min-width: 641px) and (max-width: 1024px)` |
| Laptops/Desktops   | acima de 1024px | `@media (min-width: 1025px)`                        |
| Telas grandes      | acima de 1440px | `@media (min-width: 1440px)`                        |

---

## 🧠 Mobile First x Desktop First

* **Mobile First:** começa com estilos base para dispositivos móveis e usa `min-width` nas media queries.
* **Desktop First:** começa com estilos base para desktop e usa `max-width`.

Recomendado: ✅ **Mobile First**, pois é mais leve e favorece performance.

---

## 🎯 Exemplo Prático

```css
/* Estilos base (mobile first) */
.container {
  flex-direction: column;
}

/* A partir de 768px (tablets e acima) */
@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }
}
```

---

## 📎 Dicas úteis

* Comece pelo mobile e vá "escalando" os estilos com `min-width`.
* Evite muitos breakpoints — use os necessários para manter o layout funcional.
* Teste em múltiplos dispositivos e navegadores.

