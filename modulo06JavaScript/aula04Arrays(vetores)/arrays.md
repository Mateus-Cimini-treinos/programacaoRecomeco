# 📚 Modulo 06 aula 04 - Arrays (vetores) Java Script

## 🧠 O que é um Array?
Um **array** é uma estrutura de dados usada para armazenar cãrios valores em uma única variavel. Ele pode conter números, string, objetos, funções, entre outros.

```js
let frutas = ["banana", "abacaxi", "goiaba"]
```

## 🔁 Diferença entre `let` e `const` para arrays
- `const` impede a **reatribuição** do array inteiro, mas permite modificar seus elementos.
- `let` permite tanto modificar os elementos quanto reatribuir a variavel.

```js
const lista = [1, 2, 3];
lista.push(4); // permitido
// lista = [5]; ❌ erro

let lista2 = [1, 2, 3];
lista2 = [4]; // permitido
```

## 🔄 Diferença entre Array e Variavel Simples
- Variável simples armazena **um valor só**.
- Array armazena **múltiplos valores indexados**.

```js
let nome = "Ana"; // variável simples
let nomes = ["Ana", "Bruno", "Mateus"]
```

## 🛠️ Criando, Acessando e Modificando Arrays

### Criando:
```js
let numeros = [1, 2, 3];
```

### Acessando:
```js
console.log(numeros[0]); // 1
```

### Modificando:
```js
numeros[1] = 99; // [1, 99, 3]
```

---

## 🔧 Métodos Comuns de Array

### 📌 `push()` - Adiciona ao final
Adiciona um ou mais elementtos ao **fim do array**.

```js
let frutas = ['maçã'];
frutas.push("banana"); //["maçã","banana"]
```

### 🧹 `pop()` - Remove o último
Remove e retorna o **último elemento** do array.

```js
frutas.pop(); // retorna 'banana' ; ['maçã']
```

### ⬅️ `shift()` – Remove o primeiro
Remove e retorna o **primeiro elemento** do array.

```javascript
frutas.shift(); // retorna 'maçã'; []
```

### ➡️ `unshift()` – Adiciona ao início
Adiciona um ou mais elementos ao **início do array**.

```javascript
frutas.unshift('uva'); // ['uva']
```
### ✂️ `splice()` – Remove, substitui ou adiciona elementos
Altera o array original, podendo **remover, adicionar ou substituir** elementos.

#### Sintaxe:
```javascript
array.splice(início, quantos, item1, item2, ...)
```

#### Exemplo:
```javascript
let numeros = [1, 2, 3, 4];

// remove dois itens a partir do índice 1
numeros.splice(1, 2); // [1, 4]

// adiciona 9 e 10 no índice 1
numeros.splice(1, 0, 9, 10); // [1, 9, 10, 4]
```

### 🧬 `slice()` – Cópia parcial de array
Retorna uma **parte de um array** sem modificá-lo.

```javascript
let frutas = ['maçã', 'banana', 'laranja'];
let citricas = frutas.slice(1, 3); // ['banana', 'laranja']
```

### 📏 `length` – Tamanho do array
Retorna a **quantidade de elementos**.

```javascript
let lista = [1, 2, 3];
console.log(lista.length); // 3
```

### 🔄 `forEach()` – Executa uma função para cada item
Executa uma **função callback para cada item** no array. Não retorna um novo array.

#### Sintaxe:
```javascript
array.forEach((valor, indice, array) => { ... });
```

#### Exemplo:
```javascript
let nomes = ["Ana", "Bruno", "Carlos"];
nomes.forEach((nome, i) => {
  console.log(`${i}: ${nome}`);
});
```

#### Outro exemplo – somar itens:
```javascript
let total = 0;
[10, 20, 30].forEach(num => total += num);
console.log(total); // 60
```
