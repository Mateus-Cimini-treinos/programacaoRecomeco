# 📚 Modulo 06 aula 06 - CondicionaisJava Script

Condicionais são estruturas fundamentais na programação que permitem que você tome decisões com base em condições. Em JavaScript, as principais formas de controle condicional são `if`, `else if`, `else` e o operador ternário.

---

## if

O `if` é usado quando queremos executar um bloco de código apenas se uma condição for verdadeira.

**Sintaxe:**

```js
if (condição) {
    // código a ser executado se a condição for verdadeira
}
```

**Exemplo:**

```js
let idade = 20;

if (idade >= 18) {
    console.log("Você é maior de idade.");
}
```

---

## else

O `else` é utilizado para executar um bloco de código quando a condição do `if` for falsa.

**Sintaxe:**

```js
if (condição) {
    // código se a condição for verdadeira
} else {
    // código se a condição for falsa
}
```

**Exemplo:**

```js
let idade = 16;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}
```

---

## else if

O `else if` permite testar múltiplas condições em sequência.

**Sintaxe:**

```js
if (condição1) {
    // código se condição1 for verdadeira
} else if (condição2) {
    // código se condição2 for verdadeira
} else {
    // código se nenhuma das condições anteriores for verdadeira
}
```

**Exemplo:**

```js
let nota = 75;

if (nota >= 90) {
    console.log("Excelente!");
} else if (nota >= 70) {
    console.log("Bom!");
} else {
    console.log("Precisa melhorar.");
}
```

---

## Operador Ternário

O operador ternário é uma forma mais curta de escrever uma estrutura `if/else`. Ele é útil para condições simples.

**Sintaxe:**

```js
condição ? valorSeVerdadeiro : valorSeFalso;
```

**Exemplo:**

```js
let idade = 20;
let mensagem = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(mensagem);
```

Use ternários para condições curtas e simples. Para lógica mais complexa, use `if`, `else if` e `else`.

---

### Quando usar cada um?

- **if**: quando precisa verificar uma única condição.
- **if/else**: quando precisa de uma alternativa caso a condição seja falsa.
- **if/else if/else**: quando precisa testar múltiplas condições diferentes.
- **Ternário**: para condições simples com atribuições ou retornos diretos.
