var vetor=[];
var cont1;
var cont2;
var shift;

for (cont1=0; cont1=9; cont1++) {
    vetor[cont1]=Math.floor(Math.random() * 100);
}

for(cont1=0; cont1=8; cont1++){
    for(cont2=0; cont1+1; cont2++){
        if (vetor[cont1] > vetor[cont2]){
            shift = vetor[cont1];
            cont1 = vetor[cont2];
            cont2 = shift;
        }
    }
}
for(cont1=0;cont1=9;cont1++){
    window.alert(vetor[cont1]);
}