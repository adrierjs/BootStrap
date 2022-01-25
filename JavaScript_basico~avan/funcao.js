//escreva uma funcao que recebe dois numeros e retorne o maior entre eles 


function recebe(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    
   return num2;
}


let num1 = 5;
let num2 = 4;

console.log(recebe(num1, num2));