# 📚 Modulo 06 aula 07 - Funções Java Script

## 📌 Introdução

Funções em JavaScript são blocos reutilizaveis de codigo que executam, tarefas especificas. Elas tornam o codigo mais moduluar, organizado e reutilizavel. JavaScript oreferece diversos tipos de funções, cada uma adequada para diferentes contextos. A seguir, veja os principais tipos, exemplos e quando usar cada um.

---

## 1. 🧩 Função Tradicional (Nomeada)

```js
function somar(a, b) {
    return a + b;
}

console.log(somar(5, 10)); // 15
```

**Descrição:** Declarada com a palavra-chave `function` e um nome, permite reutilização e clareza no codigo.

**🟢 Quando usar:**
- Quando a função sera reutilizada varias vezes.
- Quando a noemação ajuda na leginilidade do codigo.
- Para declarar funçoes em escopo global ou local.

---

## 2. 🎭 Funçao Anõnima

```js
let multiplicar = function(a, b) {
    return a * b;
};

console.log(multiplicar(4, 5)); // 20
```

**Descrição:** Funçoes sem nome atribuidas a variaveis ou passadas como argumentos.

**🟢 Quando usar:**
- Como **callback** em funções como `setTimeout`. `map`, `filter`, etc.
- Quando nao for necessario reutilizar a função por nome

---

## 3. 🎯 Arrow Function (função de Seta)

```js
const subtrair = (a, b) => a -b;

console.log(subtrair(10, 3)); // 7
```

**Descrição:**  Sintaxe mais concisa e sem seu proprio `this`, `arguments`, `super` ou `new.target`.

**🟢 Quando usar:**
- Em funções curtas e simples.
- em métodos de array (`map`, `filter`, etc...).
- Quando vc ***não precisa de um `this` proprio*

---

## 4. ⚙️ Função com Valor Padrão

```js
function saudacao(nome = "amigo") {
    return 'Olá ' + nome '!';
};

console.log(saudacao()); //"Olá, Amigo!"
```

**Descrição:**  Usa valores padrao caso nenhum argumento seja passado.

**🟢 Quando usar:**
- Para evitar erros com argumentos indefinidos.
- Ao criar funções com parametros opcionais.

---

## 5. 🔁 Função Recursiva

```js
function fatorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * fatorial(n - 1);
}

console.log(fatorial(5)); // 120
```

**Descrição:** A função chama a si mesma para resolver um problema em partes menosres

**🟢 Quando usar:**
- Para algoritimos como fatorial,FIbonacci, busca em árvores.
- Quando a solução natural do problema é ** dividir e conquistar**.

---

## 6. 🔧 Função de Ordem Superior (high-Order Function)
```js
function executarOperacao(operacao, num1, num2) {
    return operaçao(num1, num2);
}

let soma = (a, b) => a + b;

console.log(executarOperaçao(soma, 5, 3)); // 8
```

**Descrição:** Recebem funções como argumentos ou retornam outras funções.

**🟢 Quando usar:**
- Para compor logica de forma reuttilizavel
- Ao trabalhar com callbacks ou currying
- Em programaçao funcional

---

## 7. 🧍‍♂️ Função Como Método de Objeto

```js
let pessoa = {
    nome: 'Carlos',
    cumprimentar: function() {
        return 'Ola, ' + this.nome + '!';
    }
};

console.log(pessoa.cumprimentar()); // "Ola, Carlos!"
```

**Descrição:** Funções definidas dentro de objetos. Usam `this` para acessar propriedades.

**🟢 Quando usar:**
- Para definir Comportamentos de objetos.
- Em POO (Programação Orientada a Objeto).

---

## 8. 🧮 Função com Parametros Rest

```js
function somarTudo(....numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}

console.log(somarTudo(1, 2, 3, 4)); // 10
```

**Descrição:**  Usa `...` para aceitar multiplos argurmentos como array.

**🟢 Quando usar:**
- Quando a quantidade de argumentos é indefinida.
- Para funções que agregam multiplos valores.

---

## 9. ⏸️ Função Geradora

```js
Function* contador() {
    let i = 0;
    while (i < 3) {
        yield i++;
    }
}

let gerador = contador();
console.log(gerador.next().value); //0
console.log(gerador.next().value); //1
console.log(gerador.next().value); //2
```

**Descrição:** Pode pausar e continuar sua execução usando `yield`.

**🟢 Quando usar:**
- Para gerar sequencias sob demanda (lazy evaluation).
- Para implementar iteradores personalizados.

---

## ✅ Conclusão

Dominar os diferentes tipos de funções em JavaScript é essencial para escrever codigo limpo, flexivel e escalável. Cada tipo tem suas vantagens e melhores usos, e escolher o tipo certo para cada situação torna seu codigo mais expressivo e poderoso.