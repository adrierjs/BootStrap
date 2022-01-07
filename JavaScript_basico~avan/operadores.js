/*Operadores Aritiméticos

//+, -, /, *, **: elevado


//++ -- = incremento e descremento
idade = 18;
idade++;
console.log(idade);
idade--;
console.log(idade);


//operadoradores de atribuicao

/*let valor = 10;
let valor2 = 100;

valor += valor; // mesma coisa de valor = valor+valor;
valor2 -= valor2; //mesma coisa de valor2 = valor2-valor2;

console.log(valor2);


//operadores de igualdade 

console.log(1 === 1); //esta verificando se o 1 é igual ao 1 e são do mesmo tipo;

console.log(1 == "1");//esta verificando se o 1 é igual a 1, também daria certo se o 1 fosse string;*/

//operador ternario 

let pontos = 101;

let tipo = pontos > 100 ? "premium" : "comum";//if e else
console.log(tipo);

//operadoradores logicos 
// operador e(&&)
//operador ou (||);
//operador não(!);
let x = 1, y=0;

if(x== 0 || y==0){
    console.log("ok")
} 

podeaplicar = false;

let candidato =! podeaplicar;
console.log(candidato);