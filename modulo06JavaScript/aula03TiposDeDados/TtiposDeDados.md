# Modulo 06 aula 03 - Tipos de Dados Java Script

JavaScript trabalha com **tipos de dados dinamicos**, o que significa que o tipo de uma variavel muda em tempo de execuçao, os dados se dividem em **tipos primitivos** e **tipos de referencia**.

---

## 📀 Tipos Primitivos

### 1. `String`

Strings é o tipode dados relacionado a textos e são declarados com: ("",'' e ``)


```js
let nome = "João";
let saudacao = 'oi';
let frase = `Ola, ${nome}`;
```

### 2. `Number`

Number é o tipo de dados relacionado a numeros quanto inteiros "Int" e decimais "Float", Int e Float sao do tipo "number" diferente de outras linguagens que Float e Int são de tipos diferentes


```js
let idade = 19;
let altura = 1.69;
```

#### `NaN`

Retornado quando uma operaçao matematica falha:

```js
let resultado = "abc" / 2; //NaN
```

#### `Infinity` e `-Infinity`

Valores infinitos para operaçoes como divisão por zero:

```js
let infinito = 1 / 0; //Infinity
let negativo = -1 / 0; //-Infinity
```

### 3. `Boolean`

Representa verdadeiro ou falso. Otimo para condições logicas.

```js
let ligado = true;
let maior 10 > 5; //true
```

### 4. `undefined`

Quando a cariavel é declarada mas não recebe valor:

```js
let x;
console.log(x); //undefined
```

### 5. `null`

Valor intencionalmente vazio. Indica ausência de valor.

```js
let usuario = null;
```

### 6. `Symbol` (avançado)

Cria um identificador único.

```js
const id = Symbol("id")
```

### 7. `BigIt`

Para reprensentar inteiros muito grandes :

```js
let grande = 35612712567386438728237428948234238578234n
```

## 📂 Tipos de Referência

### `Object`

Usado para armazenar coleçoes de dados

```js
let pessoa = {
    nome: "Maria",
    idade: 28
}
```

### `Array` ➚ **(bônus)**

Lista ordenada de valores:

```js
let numeros = [1, 2, 3, 4]
```

### `Function` ➚ **(bônus)**

Função e um tipo de dado em JS

```js
function saudacao(nome) {
    return `Olá, ${nome}`;
}
```

## 🔮 `typeof`

O operador `typeof` retorna o tipo de uma variavel ou valor.

```js
typeof "Oi"         // "string"
typeof 42            // "number"
typeof true          // "boolean"
typeof undefined     // "undefined"
typeof null          // "object"   // curioso bug histórico
typeof {}            // "object"
typeof []            // "object"
typeof function(){}  // "function"
```
---

## 🔹 Dicas extras:

* Use `Number.isNaN(valor)` para verificar se algo é `NaN` corretamente.
* `null` e `undefined` são diferentes: `null` é intencional, `undefined` é falta de atribuição.
* Arrays e funções são do tipo `object`, mas `typeof` reconhece função como `"function"` por conveniência.
