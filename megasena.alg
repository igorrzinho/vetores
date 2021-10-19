algoritmo "mega"
// Função :
// Autor : igor de jesus silva
// Data : 20/09/2021
// Seção de Declarações 
var
palpite:vetor[0..5] de inteiro
sorteio: vetor[0..5] de inteiro
cont, cont2,cont3,cont4, acerto:inteiro
inicio
//palpites
para cont de 0 ate 5 faca
     escreval("digite o ",cont + 1,"°")
     leia (palpite[cont])
      para cont3 de 0 ate 5 faca  //laço1
           para cont4 de 0 ate 5 faca//laço2
                se (palpite[cont3]<>sorteio[cont3]) entao   //se
                 enquanto ((palpite[cont]>60) ou (palpite[cont]<=0)) faca //enquanto
                    escreval("digite novamente, um valor valido entre 1 e 60 e não repetido")
                    leia(palpite[cont])//leia
           fimenquanto
                fimse//final se
           fimpara  //final laço 2
fimpara
     //finalenquanto
fimpara  //fimpara
//escreval("os numeros sorteados são:")

//numeros
para cont de 0 ate 5 faca
     sorteio[cont] <- randi(60) + 1
fimpara

limpatela
//verificação
para cont de 0 ate 5 faca  //laço1
     para cont2 de 0 ate 5 faca//laço2
          se (palpite[cont]=sorteio[cont2]) entao   //se
           acerto <- acerto + 1
          fimse//final se
     fimpara  //final laço 2
fimpara //final laço 1

limpatela
escreval ("voce acertou ", acerto," números")




fimalgoritmo
