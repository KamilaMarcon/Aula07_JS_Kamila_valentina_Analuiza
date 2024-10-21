//DIFERENÇA ENTRE VAR, LET E CONST

//VAR
var nome = "Camila";
console.log(nome);

if(nome==="Camila"){
    var escola = "CESF";
    console.log(escola);
}
console.log(escola);

escola = "Sagrada";
console.log(escola);
//com variáveis do tipo var podemos acessar(visibilidade)
//fora do escopo de criação da variável

//LET
if(nome === "Camila"){
    let curso = "DS";
    console.log(curso);
}
//console.log(curso);
curso = "Desenvolvimento";
console.log(curso);

//let só permite o acesso à variável no escopo onde ele foi criado (escopo de bloco)
//se reatribuirmos valor a ela é como se estivéssemos declarando uma nova variável 
//do tipo var com o mesmo nome curso

//CONST
const cargo = "estudante";
console.log(cargo);
//cargo = "programador";
console.log(cargo);

//variavéis do tipo const tem escopo de bloco, com as let, mas ela não
//permite reatribuição de valor

//CRIAÇÃO DE VARIÁVEIS SEM ATRIBUIÇÃO INICIAL
var aluno1;
aluno1 = "Tina";
// aluno1 recebe "Tina"
console.log(aluno1);

let aluno2
aluno2 = "Kat";
console.log(aluno2);

//const aluno3; variáveis do tipo const não podem ser apenas declaradas
const aluno3 = "Milanesa"
console.log(aluno3);