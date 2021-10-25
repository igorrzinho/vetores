algoritmo "mega"
// Função :
// Autor : igor de jesus silva
// Data : 20/09/2021
// Seção de Declarações 
var
megasena: vetor [0..5] de inteiro
aposta: vetor [0..5] de inteiro
cont,acertos,aux,outra,x,y: inteiro

 


inicio

 

para cont de 0 ate 5 faca
   escreval("Digite um palpite: ")
   leia(aposta[cont])

 

   enquanto ((aposta[cont]<1) ou (aposta[cont]>60)) faca
     escreval("Digite um valor entre 1 e 60")
     leia(aposta[cont])
     fimenquanto
   
fimpara

 


para cont de 0 ate 5 faca
   aux <- randi(59)+1
   para outra de 0 ate 5 faca
      enquanto (aux = megasena[outra]) faca
         aux <- randi(59)+ 1
      fimenquanto
      megasena[cont] <- aux

 

      fimpara

 

   escreval(megasena[cont])
fimpara

 

para x de 0 ate 5 faca
     para y de 0 ate 5 faca
          se (aposta[x]=megasena[y]) entao
             acertos<-acertos+1
             escreval("Você acertou o número: ",aposta[x])
          fimse
     fimpara
fimpara
escreval("Você acertou ",acertos," números")
fimalgoritmo
