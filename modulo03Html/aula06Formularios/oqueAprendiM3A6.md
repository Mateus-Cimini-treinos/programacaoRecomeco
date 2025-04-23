
# Resumo/anotações Módulo 3 - Aula 06

## Formularios

Nesta aula foi abordado o uso de **formulários em HTML**, elementos que permitem a entrada de dados pelos usuários e o envio dessas informações para um servidor ou outro processamento.

### Tag `<form>`

A tag `<form>` é usada para criar um formulário HTML. Todos os campos de entrada devem estar dentro dela para que possam ser enviados juntos.

---

### Labels e Inputs

- A tag `<label>` define o rótulo de um campo de formulário, e quando associada corretamente ao `id` de um `<input>`, melhora a acessibilidade e usabilidade.

#### Tipos de Inputs utilizados:

- `text`: Entrada de texto comum.
- `email`: Aceita apenas e-mails válidos.
- `tel`: Para números de telefone.
- `number`: Permite inserir apenas números. Possui os atributos `min`, `max` e `step`.
- `file`: Permite envio de arquivos.
- `color`: Abre um seletor de cor.
- `checkbox`: Usado para marcar ou desmarcar uma opção.
- `time`: Seleciona um horário.
- `range`: Barra deslizante para escolher um valor dentro de um intervalo.
- `password`: Oculta o conteúdo digitado.
- `radio`: Botões de opção (uma escolha entre várias).

---

### Select (Caixa de Seleção)

- A tag `<select>` cria uma lista suspensa.  
- O atributo `multiple` permite a seleção de múltiplas opções.  
- As opções são definidas pela tag `<option>`.

---

### Textarea

- A tag `<textarea>` permite que o usuário digite textos longos (como comentários, observações, etc).

---

### Botões

- `submit`: Envia os dados do formulário.
- `reset`: Limpa todos os campos preenchidos.

---

### Atributos úteis nos inputs:

- `placeholder`: Mostra um texto de exemplo dentro do campo.
- `id`: Identificador do campo, usado para relacionar com o `<label>`.
- `name`: Define o nome do campo (usado no envio dos dados).
- `min`, `max`, `step`: Controlam valores numéricos ou intervalos.

---

### Observações

- O uso correto de `label` melhora a acessibilidade.
- É importante usar o atributo `name` nos campos para que os dados possam ser enviados corretamente.
- Os formulários são a principal forma de comunicação entre o usuário e a aplicação.

---

Se quiser, posso também gerar uma imagem com exemplo visual de estrutura de formulário em HTML para ilustrar o `.md`.

Quer que eu adicione isso também?