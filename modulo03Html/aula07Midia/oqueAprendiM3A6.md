
# Resumo/anotações Módulo 3 - Aula 07



## Mídia no HTML

A aula de hoje foi sobre como trabalhar com diferentes tipos de mídias dentro de uma página HTML, como **imagens**, **áudios** e **vídeos**.

### Imagem

A tag `<img>` é usada para exibir uma imagem na página. Ela precisa de dois atributos principais:

- `src`: caminho da imagem (local ou URL externa)
- `alt`: texto alternativo caso a imagem não carregue (importante para acessibilidade)

**Exemplo:**
```html
<img src="caminho/da/imagem.jpg" alt="descrição da imagem">
```

## Elementos de Mídia: Vídeo no HTML

Nesta aula aprendemos como inserir **vídeos** e **áudios** diretamente em uma página HTML, utilizando as tags `<video>` e `<audio>`. Esses elementos permitem incorporar mídias com controle de reprodução, tornando o conteúdo mais interativo.

---

### 🎬 Vídeo

#### Tag `<video>`

Usada para exibir vídeos no navegador.

**Exemplo:**
```html
<video src="video.mp4" controls></video>
```

# 🎥 Atributos mais comuns da tag `<video>`

A tag `<video>` permite inserir vídeos nas páginas HTML. Abaixo estão os **atributos mais comuns** utilizados com essa tag:

---

## 📌 Atributos:

- **`src`**: caminho do vídeo (pode ser local ou uma URL externa)  
- **`controls`**: exibe os controles de reprodução (play, pause, volume etc)  
- **`autoplay`**: o vídeo inicia automaticamente ao carregar a página  
- **`muted`**: o vídeo inicia sem som (necessário para autoplay funcionar na maioria dos navegadores)  
- **`loop`**: o vídeo reinicia automaticamente após terminar  
- **`poster`**: exibe uma imagem de capa antes do vídeo iniciar

---

## 💡 Exemplo com todos os atributos:

```html
<video src="video.mp4" controls autoplay muted loop poster="capa.jpg"></video>


## 🎧 Áudio no HTML

Nesta aula aprendemos a incorporar **áudio** em páginas web usando a tag `<audio>`. Com ela, é possível adicionar músicas, efeitos sonoros, narrações e qualquer outro tipo de som.

---

### 📌 Tag `<audio>`

A tag `<audio>` é usada para inserir e controlar arquivos de áudio no HTML.

**Exemplo básico:**
```html
<audio src="musica.mp3" controls></audio>
```
### 🔧 Principais atributos
- src: define o caminho do arquivo de áudio (pode ser um caminho local ou URL)

- controls: exibe os controles de reprodução (play, pause, volume etc)

- autoplay: faz o áudio iniciar automaticamente quando a página é carregada

- loop: faz o áudio repetir automaticamente

- muted: inicia o áudio no modo silencioso

- preload: define como o áudio será carregado

- auto: o navegador decide

- metadata: apenas informações como duração são carregadas

- none: não carrega nada até que o usuário interaja

### 🎛️ Exemplo completo com vários atributos:
```html

<audio src="som.mp3" controls autoplay loop muted preload="auto"></audio>
```
###💡 Dica de compatibilidade
Para garantir que o áudio funcione em todos os navegadores, use a tag ```<source>``` com diferentes formatos:

```html

<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
</audio>
 ```
### 📝 Observações
- O formato .mp3 é o mais suportado pelos navegadores.

- Sempre coloque um texto alternativo entre a tag ```<audio>``` para casos em que o navegador não suportar a mídia.

- O uso do atributo autoplay com som ativado pode ser bloqueado por navegadores modernos.

