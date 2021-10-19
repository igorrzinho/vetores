/* crie um vetor com 5 posições de inteiro preencha o primeiro esaço com um valor digitado e os demais espaços com o dobro exemplo: 2,4,8,16 e 32 */
var inteiro=[];

inteiro[0]=number.parseInt(window.prompt('digite um numero inteiro:'));

for(let i=1; i=4;i++){
 inteiro[i]=inteiro[i++] * 2;
};

window.confirm(`o numero digitado foi: ${inteiro[0]}, o dobro dele é${inteiro[1]}, o dobro deste é: ${inteiro[2]},o dobro deste é: ${inteiro[3]}, o dobro deste é ${inteiro[4]}`);
