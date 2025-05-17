
// Teste com if e else

let idade = 15;

if (idade >= 16 ) {
    console.log("ja pode votar");
} else {
    console.log("nao pode votar");
    
}


// Teste com else if

let nota = 12;

if (nota >= 9 ) {
    console.log("exelente");
} else if (nota >= 7) {
    console.log("bom");
} else if (nota  >= 5 ) {
    console.log("ta na media");
} else {
    console.log("reprovou");
    
}



// Teste com ternarios

let age = 10;

let mensagem = age >= 18 ? "ele é maior de idade" : "ele é menor de idade";
console.log(mensagem);
