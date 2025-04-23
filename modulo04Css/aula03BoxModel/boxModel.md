# Modulo 04 - Aula 03 Box Model

## Oque é um Box Model

Box Model serve tanto para HTML quanto para CSS, ele foidesenvolvido para ser utilizado para facilitar na organizaçao das partes do site

## Para Que serve?

O box Model foi pensado na ideia de voce ter um a caixa, e poder colocar outras caiaxs dentro de outras caixas crinado um (ANINHAMENTO) de caixas que respeitam uma hieraquia

## Como usar?

Quando voce cria qualquer elemento em um arquivo html por padrao ele ja vem pre setado alguns atributos como o height,width, etc... a ideia é que no css voce modifique eles como desejar

exemplo de tags css box model:

```
h1 {
    background-color: aquamarine;
    height: 300px;
    width: 300px;
    padding: 20px;
    border: solid red 10px;
    margin: 20px;
}

a {
    background-color: violet;
    height: 20px;
    width: 20px;
    padding: 10px;
    border: solid greenyellow 5px;
    margin: 10px;
}


P {
    background-color: brown;
    padding: 10px;
    border: solid blue 5px;
}
```

## Atributos para modificaçao da caixa

### height

A altura da caixa e definida pelo atributo "height"

```
h1 {
    height: 300px;
}
```

### width

A largura da caixa e definida pelo atributo "width"

```
h1 {
    width: 300px;
}
```

### border

A borda da caixa e definida pelo atributo "border", a birda vai sempre ficar colado na caixa caso a caixa nao tenha um padding

```
a {
    border: solid greenyellow 5px;
}
```

### padding

Como eu falei no topico sobre as bordas, as bordas sempre ficaram coladas na caixa, ou outra caixa sempre vai estar colada na outra por padrao, pra isso que serve o "padding", para criar um espaço entre a bordar e o elemento principal

```
P {
    padding: 10px;
}
```

### margin

Como eu expliquei por padrão os elemnetos ficam colados um no outro para que isso nao aconteça existe a tag "margin", para criar um espaço do lado de fora de um elemento

```
P {
    border: solid blue 5px;
}
```

## Tipos de caixas

Existem 2 tipos de caixas "_box level_" e "_in-line level_"

### Box level

Box level, sempre ocupam a largura completa e se vc colocar um box level entre outro ele sempre vai pular uma linha e sempre iniciar em uma linha nova

[imagem de um box level](./imagens/box-level.png)

### Inline level
Ja uma caixa in-line level ele nao vai pular para linha de baixo, ele vai pular para o lado e ai criar a caixa in-line level, e difrente da box level ele ocupa apenas o espaço do elemento dentro da caixa sem ocupar a largura maxima do site

[Imagem de um in-line level](./imagens/in-line-level.png)

