# Modulo 06 aula 02 - Variaveis e Condicionais Java Script


### 🧠 O que são variaveis ?

Variáveis são espaço na memória usados para armazenar valores que podem ser usados e manipulados durante a execução de um programa. Em JAvaScript, podemos declarar variáveis com ```var```, ```let``` e ```const```

***

### 🔢 Tipos de declaração de variáveis

```var``` (Forma antiga)

* **Escopo da função** (não respeita blocos como ```if```)

* Pode ser **redeclarada** e **reatribuída**

* Deve ser evitada em codigos modernos por causar comportamentos inesperados 

```
var nome = "João";
nome = "Maria";
var nome = "Carlos"; // permitido, mas confuso
```

```let``` (Forma moderna)

* **Escopo de bloco** (respeita ```{}```)

* Pode ser **reatribuída**, mas **não redeclarada no mesmo escopo**

* Ideal para variáveis que mudam cokm o tempo.

```
let idade = 25;
idade = 26; //ok
//let idade = 30; // erro se no mesmo bloco
```

```const``` (Constante)

* **Escopo de bloco**

* **Não pode ser reatribuída**

* Usada para valores fixos que não mudam

```
const pi = 3.14;
// pi = 3.1415; //erro
```

***

### ✍️ Convenção camelCase

Nomear variáveis com clareza é essencial. O estilo ```camelCase``` é o mais usado:

```
let nomeCompleto = "Ana Silva";
let dataNascimento = "18/08/2005";
```

***

### 🧾 Tipos de dados mais comuns

* ```String``` - textos: ```"Olá"```
* ```Number``` - números: ```10```, ```3,14```
* Boolean - verdadeiro ou falso: ```true``` ou ```false```
* ```Array``` - listas: ```[1, 2, 3]```
* ```Object``` - dados estruturados: ```{nome: "João", idade: 25}```
* ```null``` - ausência intencional de valor

* ```undefined``` - valor nao atribuído

### 🧩 Dicas Extras

* Sempre prefira ```let``` e ```const``` no lugar de ```var```.

* Use ```const``` quando possível (evita bugs por reatribuição)

* É comum usar variáveis com valores booleanos para decisões lógicas.

