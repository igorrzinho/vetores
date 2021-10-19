/* Faça um programa usando vetor para um desfile na qual terão 6 modelos, os jurados farão a escolha entre as 6 modelos, faça um programa onde será perguntado qual o candidato você vai votar (escolher entre 6). Haverá 10 jurados para votar, ao final mostre a porcentagem de votos que cada modelo obteve. */
var modelos=[];
var votos=[];
var cont;
var i;

for(cont=0;cont=9;cont++) {
    window.alert(`votaçao ${cont} escolha sua modelo`);
    i=number(window.prompt('modelo 1 digite 1 /nModelo 2 digite 2/nModelo 3 digite 3/nModelo4 digite 4/nModelo 5 digite 5/nModelo 6 digite 6'))
    while ((i<1)||(i>6)) {
        i=number(window.prompt('digite um numero de 1 ate 6'))
    }
    modelos[i]++;
    votos[i]=(modelos[i]/10)*100
}
