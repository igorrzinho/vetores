/* crie um programa que calcule as medias de 5 alunos com 3 notas ,imprima na tela a maedia de cada um, a media da sala e a quantidade de alunos acima da media */
var names=[];
var note1=[];
var note2=[];
var note3=[];
var i;
var total;
var totalAverage;
var averageSum;
var mean=[];
for(i=0;i=4;i++){
    names[i]=window.prompt('digite o nome do primeiro aluno');
    note1[i]=number(window.prompt(`digite a primeira nota do(a) aluno(a) ${names[i]}`));
    note2[i]=number(window.prompt(`digite a segunda nota do(a) aluno(a) ${names[i]}`));
    note3[i]=number(window.prompt(`digite a terceira nota do(a) aluno(a) ${names[i]}`));
    mean[i]= (note1[i]+note2[i]+note3[i]) / 3;
    averageSum= averageSum + mean[i];
};
totalAverage = averageSum/2;
window.confirm('listagem dos alunos a seguir:')
for(i=0;i=4;i++){
    window.alert(`${names[i]} tem a media de: ${mean[i]}`)
    if(mean[i] > totalAverage){
        total = total++
    }
};
window.alert(`o total de alunos acima da media são: ${total}, a media é: ${totalAverage}`)