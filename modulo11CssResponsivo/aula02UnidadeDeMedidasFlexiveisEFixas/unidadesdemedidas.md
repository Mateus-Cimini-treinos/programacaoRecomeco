
# Unidades de Medida em CSS: Fixas e Variáveis

Quando trabalhamos com CSS, escolher a unidade de medida correta é essencial para criar layouts responsivos, escaláveis e visualmente agradáveis. As unidades podem ser divididas basicamente em **fixas** e **variáveis (relativas)**.

---

## 1. Unidades Fixas

Unidades fixas possuem um tamanho absoluto que não muda conforme o tamanho da tela ou outros fatores.

### Principais unidades fixas:

- **px (pixels)**  
  Unidade mais comum. Representa um ponto na tela.  
  Exemplo: `width: 200px;`

- **cm, mm, in (centímetros, milímetros, polegadas)**  
  Usadas raramente para web, mais comuns para impressão.

- **pt (points)**  
  Usada em tipografia, 1pt = 1/72 polegada.

### Vantagens:
- Controle preciso do tamanho.
- Fácil de entender.

### Desvantagens:
- Não é responsiva.
- Pode causar problemas em telas de diferentes tamanhos e resoluções.

---

## 2. Unidades Variáveis (Relativas)

Unidades que dependem de algum contexto, como tamanho da fonte, tamanho da viewport, etc.

### Unidades relativas mais comuns:

- **% (porcentagem)**  
  Percentual em relação ao elemento pai.  
  Exemplo: `width: 50%;` (metade da largura do elemento pai)

- **em**  
  Relativo ao tamanho da fonte do elemento pai.  
  Exemplo: `font-size: 2em;` (duas vezes o tamanho da fonte do pai)

- **rem**  
  Relativo ao tamanho da fonte raiz (`html`).  
  Exemplo: `font-size: 1.5rem;` (1.5 vezes o tamanho da fonte no `html`)

- **vw (viewport width)**  
  Percentual da largura da viewport (tela).  
  Exemplo: `width: 50vw;` (50% da largura da janela)

- **vh (viewport height)**  
  Percentual da altura da viewport.  
  Exemplo: `height: 100vh;` (altura total da janela)

- **vmin e vmax**  
  Baseados no menor (`vmin`) ou maior (`vmax`) valor entre `vw` e `vh`.

### Vantagens:
- Responsividade natural.
- Facilita o design fluido que se adapta a diferentes dispositivos.

### Desvantagens:
- Pode ser mais difícil prever o tamanho final.
- Dependência do contexto pode causar efeitos inesperados se não for bem entendido.

---

## 3. Quando usar cada tipo?

| Caso                                  | Unidade recomendada     |
|--------------------------------------|------------------------|
| Tamanho fixo, exato, sem variação    | `px`, `pt`             |
| Tamanho relativo à fonte do pai       | `em`                   |
| Tamanho relativo à fonte raiz          | `rem`                  |
| Largura ou altura em relação à tela   | `vw`, `vh`, `%`        |
| Layouts responsivos e escaláveis       | Unidades relativas      |

---

## 4. Exemplo prático

```css
html {
  font-size: 16px; /* base */
}

body {
  font-size: 1rem; /* 16px */
  width: 80vw;     /* 80% da largura da viewport */
}

h1 {
  font-size: 2rem; /* 32px */
}

p {
  font-size: 1em;  /* mesmo tamanho da fonte do pai */
  margin-bottom: 1.5em; /* espaçamento relativo */
}

.container {
  width: 90%; /* largura relativa ao elemento pai */
  max-width: 1200px; /* limite fixo */
}
````

---

## 5. Dicas finais

* Prefira **unidades relativas** para tipografia, margens e padding, para facilitar acessibilidade e responsividade.
* Use **unidades fixas** em casos onde o design exige precisão absoluta.
* Combine `rem` e `vw` para textos que escalem conforme a tela.
* Evite misturar muitas unidades diferentes sem necessidade para manter o código consistente.


