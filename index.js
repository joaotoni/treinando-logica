//Desafio 1
var nomeCompleto;
console.log(nomeCompleto);

//Desafio 2
var numeroA = 5;
console.log(numeroA =5);
var numeroB = 6;
console.log(numeroB = 6);
var resultado;
resultado = numeroA *numeroB;
console.log( "O valor do resultado da multiplicação é " +resultado);

//Desafio 3
function saudação (){
    console.log("Oi, eu sou Goku!");
}

//Desafio 4

function multiplica(A, B){
    var resultado;
    resultado = A * B;
    console.log("O resultado da multiplicação é de: "+resultado);
}

//Desafio 5

function podeDirigir(Idade){
    if (idade >= 18) {
        return "Você pode dirigir";
    }
    else{
        return "Você não pode dirigir";
    }
}
    
console.log(podeDirigir(idade = 15));



//Desafio 6

for ( var i = 0; i <= 20; i++);{
    if (i % 2 !=0){
        console.log(i);
    }
}

//Desafio 8

function tabuada(){
    var num = parseInt(document.getElementById("num").value);
    var resposta = document.getElementById('resposta');
    var tabuada ='';

    for(var count=1; count<=10 ; count++)
        tabuada += num+" x "+count+" = "+
               num*count+"<br />";
  
        resposta.innerHTML = tabuada
}

console.log(tabuada);

//Desafio 9
const cconverter = (minutos) => {
    return minutos / 60;
}

console.log(cconverter(120), "hora(s)");