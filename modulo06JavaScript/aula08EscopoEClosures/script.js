// Função principal que cria um contexto com variáveis e funções internas
function apresentandoAlguem() {

    // Variável local ao escopo da função `apresentandoAlguem`
    // Essa variável só pode ser acessada por funções dentro deste escopo
    let nome = "Mateus";

    // Função interna que "lembra" da variável `nome` mesmo após o escopo externo ser encerrado
    function saudacao() {
        return console.log(`Ola, ${nome}!`);
    }

    // Outra função interna com acesso à variável `nome` do escopo externo
    function despedida() {
        return console.log(`Adeus, ${nome}!`);
    }

    // Retornando um objeto com referências às funções internas
    // Isso cria um **closure**, pois `saudacao` e `despedida` continuam acessando `nome`
    return {
        saudacao: saudacao,
        despedida: despedida
    };
}

// Armazenamos o retorno da função em uma constante
// `pessoa` agora tem dois métodos: `saudacao` e `despedida`, que ainda têm acesso ao `nome`
const pessoa = apresentandoAlguem();

// Chamando as funções do objeto retornado, que acessam a variável `nome` mesmo fora do escopo original
pessoa.saudacao();  // Saída: "Ola, Mateus!"
pessoa.despedida(); // Saída: "Adeus, Mateus!"

// console.log(nome); // ❌ Esta linha geraria um erro, pois `nome` está fora do escopo global
