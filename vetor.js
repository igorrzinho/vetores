/* crie um vetor de qo posições  preenca o vetor com valores inteiros percora o vetor e diga se o valor é par ou impar depois diga quantos pares e impar foram digitados */
var vetor = [];
var impar;
var par;
var i;

for (i = 0; i < 9; i++) {
    vetor[i]=number(window.prompt('digite um numero'));
};

for (i = 0; i < 9; i++) {
    if (vetor[i] % 2 == 0) {
        par++;
        window.alert(`${vetor[i]} é par`);
    } else {
       impar++;
       window.alert(`${vetor[i]} é impar`); 
    }   
}

window.alert(`o total de numeros pares digitados são: ${par}, o total de numeros impar digitados são: ${impar}`)