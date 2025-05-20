# 📚 Modulo 06 aula 08 - Escopo e Closures Java Script

## 🔍 O que é Escopo?

Em JavaScript, **escopo** é o ambiente no qual uma variável é visível e acessível. Ele determina onde uma variável pode ser usada.

### Tipos de Escopo:

#### 🌐 Escopo Global
Variáveis declaradas fora de qualquer função ou bloco. São acessíveis em qualquer parte do código.

```js
let nome = 'Ana';

function saudacao() {
    console.log(nome); // Acessa a variável global 'nome'
}

saudacao(); // Saída: Ana
```

#### 🧭 Escopo Local
Dividido em escopo de função e de bloco.

- **Escopo de Função**: A variável só existe dentro da função.

```js
function exibirIdade() {
    let idade = 30;
    console.log(idade);
}

exibirIdade(); // Saída: 30
console.log(idade); // Erro
```

- **Escopo de Bloco**: Válido apenas dentro do bloco `{}` quando se usa `let` ou `const`.

```js
if (true) {
    let cidade = 'São Paulo';
    console.log(cidade);
}
console.log(cidade); // Erro
```

### `var` vs `let` vs `const` no Escopo

- `var`: escopo de função (não respeita blocos).
- `let` e `const`: escopo de bloco (mais previsíveis e seguros).

```js
if (true) {
    var teste = 'A';
    let seguro = 'B';
}
console.log(teste);   // Funciona
console.log(seguro);  // Erro
```

---

## 🧠 O que é Closure?

Um **closure** é uma função que "lembra" do escopo em que foi criada, mesmo após esse escopo ter sido finalizado.

### Como funciona:

```js
function saudacao(nome) {
    return function() {
        console.log(`Olá, ${nome}`);
    };
}

let saudacaoAna = saudacao('Ana');
saudacaoAna(); // Olá, Ana
```

A função interna mantém acesso à variável `nome`, mesmo depois que a função `saudacao` já terminou.

### 🎯 Quando usar Closures?
- Para **encapsular dados**.
- Para **manter estado** entre chamadas de função.
- Para criar **funções privadas**.

### Exemplo Prático:

```js
function contador() {
    let contagem = 0;
    return function() {
        contagem++;
        console.log(contagem);
    };
}

let contar = contador();
contar(); // 1
contar(); // 2
```

---

## 📝 Resumo

| Conceito | Descrição |
|---------|------------|
| Escopo | Define onde as variáveis são visíveis (global, função, bloco) |
| Closure | Uma função que retém acesso ao escopo onde foi criada, mesmo após ele encerrar |

### Benefícios do Uso Correto:
- Melhor organização do código.
- Maior controle sobre variáveis.
- Segurança e encapsulamento de dados.

---

📌 **Dica bônus**: Closures são base de conceitos avançados como funções de fábrica, currying, módulos e muito mais!
