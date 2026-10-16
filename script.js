// EXERCÍCIO 1 
console.log("Painel de Notas");
console.log("Bem-vindo ao meu projeto!");

// EXERCÍCIO 2 
console.log("Exercicio 2: calculos basicos");
console.log("Soma:", 10 + 5);
console.log("Subtracao:", 10 - 5);
console.log("Multiplicacao:", 10 * 5);
console.log("Divisao:", 10 / 5);

// EXERCÍCIO 3 
const nomeAluno = "Estudante";
const nomeProjeto = "Painel de Notas";

let quantidadeMaterias = 3;

console.log("Nome do aluno:", nomeAluno);
console.log("Projeto:", nomeProjeto);
console.log("Quantidade de materias:", quantidadeMaterias);

quantidadeMaterias = 4;

console.log("Nova quantidade de materias:", quantidadeMaterias);


// EXERCÍCIO 4 
var mensagem = "Este e um exemplo usando var";
console.log(mensagem);

// EXERCÍCIO 5 
const materia = "POO";
const nota = 9;
const aprovado = true;
let observacao = null;

console.log("Materia:", materia);
console.log("Nota:", nota);
console.log("Aprovado:", aprovado);
console.log("Observacao:", observacao);

// EXERCÍCIO 6 
const nota1 = 9;
const nota2 = 8;

console.log("Soma das notas:", nota1 + nota2);
console.log("Subtracao das notas:", nota1 - nota2);
console.log("Multiplicacao das notas:", nota1 * nota2);
console.log("Divisao das notas:", nota1 / nota2);

console.log("A primeira nota e maior que a segunda?", nota1 > nota2);
console.log("As notas sao iguais?", nota1 === nota2);


// EXERCÍCIO 7 
const aluno = "Estudante";
const disciplina = "Desenvolvimento Web e Mobile";
const media = 8.5;

const resumo = `O aluno ${aluno} tirou media ${media} em ${disciplina}.`;

console.log(resumo);


// EXERCÍCIO 8 
const mediaAluno1 = 9;

if (mediaAluno1 >= 7) {
    console.log("POO: aprovado!");
} else {
    console.log("POO: em recuperacao.");
}

const mediaAluno2 = 6.5;

if (mediaAluno2 >= 7) {
    console.log("Banco de dados: aprovado!");
} else {
    console.log("Banco de dados: em recuperacao.");
}

// DESAFIO INTEGRADOR 
const nome = "Estudante";

const notaPOO = 9;
const notaDesenvolvimento = 8;
const notaBancoDados = 6.5;
const mediaGeral = (notaPOO + notaDesenvolvimento + notaBancoDados) / 3;
const somaNotas = notaPOO + notaDesenvolvimento + notaBancoDados;

console.log("===== PAINEL DE NOTAS =====");
console.log(`Aluno: ${nome}`);
console.log(`Nota de POO: ${notaPOO}`);
console.log(`Nota de Desenvolvimento Web e Mobile: ${notaDesenvolvimento}`);
console.log(`Nota de Banco de Dados: ${notaBancoDados}`);
console.log(`Soma das notas: ${somaNotas}`);
console.log(`Media geral: ${mediaGeral.toFixed(1)}`);

if (mediaGeral >= 7) {
    console.log("Resultado final: aprovado!");
} else {
    console.log("Resultado final: em recuperacao.");
}