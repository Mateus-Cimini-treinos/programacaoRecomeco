# Resumo/Anotações Módulo 3 - Aula 05


## Tabelas no HTML

A aula de hoje foi sobre a criação e estruturação de **tabelas no HTML**, que servem para organizar informações em **linhas e colunas** de forma clara e visual.

---

### 🧱 Estrutura Básica de uma Tabela

As tabelas são construídas com a tag `<table>`. Dentro dela usamos:

- `<tr>`: define uma linha da tabela (table row).
- `<td>`: define uma célula com **dados comuns** (table data).
- `<th>`: define uma célula de **cabeçalho** (table header), geralmente usada na primeira linha.

#### ✅ Exemplo básico:
```html
<table>
  <thead>
    <tr>
      <th>Produto</th>
      <th>Preço</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Notebook</td>
      <td>R$ 3.000</td>
    </tr>
    <tr>
      <td>Celular</td>
      <td>R$ 1.500</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>R$ 4.500</td>
    </tr>
  </tfoot>
</table>
```

Todas as tags da tabela:

[imagem das tags](tagsTabelas.png)
