
/*
 * Algoritmo
 * [] Lista de todos os participantes
 * [] Lista de projetos abertos
 * [] Relacionar os Lista
 * [] Printar todos os projeto - participante
 */

var projetos = [
    "Open Source",
    "HELabs",
    "NegoBan"
];

var participantes = [
    "Bernardo da Costa Santos",
    "Cayo Medeiros (yogodoshi)",
    "Diego Santos Araújo",
    "Guilherme Fernandes Souza da Paixão",
    "Hugo Raphael Vianna Amorim",
    "José Felipe dos Santos Lima",
    "Mateus Paulino",
    "Ronalson Vargas Mendes Filho"
];

function listarProjetos(){
    for(var projeto in projetos){
        console.log(projetos[projeto] + "\n");
    }
}

function listarParticipantes(){
    for(var participante in participantes){
        console.log(participantes[participante] + "\n");
    }
}