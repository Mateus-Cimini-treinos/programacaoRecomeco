# 📚 Modulo 06 aula 05 - Loops (laços de repetições) Java Script

## 📌 O que são loops?

Loops (laços de repetição) são estruturas que permitem executar um bloco de código repetidamente, enquanto uma codinção for verdadeira. Eles são essenciais para automatizae tarefas, percorrer arrays, executar cálculos repetitivos, etc..

Em JAvaScript, os três principais tipos de loops são:

-`for`
-`while`
-`do...while`

---

## 🔁 Loop `for`

### Quando usar:

Use o `for` quando souber exatamente quantas vezes deseja repetir a execução. Ideal para pecorrer arrays e coleções com índice.

### Sintaxe:

```js
for (inicialização; condição; incremento) {
    // código a ser executado
}
```

### Exemplo

```js
for (let i = 0; i < 5; i++) {
    console.log(`Valor de i: ${i}`)
}
```

---

## 🔄 Loop `while`

### Quando usar:

Use o `while` quando não souber quantas vezes a repetição deve ocorrer e depender de uma condição externa.

### Sintaxe:

```js
while (condição) {
    // código a ser executado enquanto a condição for verdadeira
}
```

#### Exemplo:

```js
let i = 0;
while (i < 5) {
    console.log(`Valor de i: ${i}`);
    i++;
}
```

---

## 🔁 Loop `do...while`

### Quando usar:

Use o `do...while` quando precisar que o bloco de código seja executado pelo menos uma vez, mesmo que a condição seja falsa.

### Sintaxe:

```js
do {
    // código a ser executado
} while (condição);
```

### Exemplo:

```js
let i = 0;
do {
    console.log(`Valor de i: ${i}`);
    i++;
} while (i < 5);
```

---

## ✅ Conclusão

Cada tipo de loop tem seu uso ideal:

| Loop       | Usa-se quando...                            |
|------------|---------------------------------------------|
| `for`      | Já sabe quantas vezes deve repetir.         |
| `while`    | Precisa repetir até que uma condição mude.  |
| `do...while` | Precisa executar ao menos uma vez.         |

Escolher o loop correto melhora a legibilidade, eficiência e organização do seu código.
