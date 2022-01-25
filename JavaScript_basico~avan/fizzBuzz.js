//Divisivel por 3 => Fizz
//Divisivel por 5 => Buzz
//Divisivel por 3 e 5 => FizzBuzz
//Não divisivel por 3 ou 5 => entrada
//Não é um número => Não é um número



function fizzBuzz(entrada){
    if(typeof entrada !== 'number'){//o typeof vai verificar se é do tipo number
        return "Não é um número";
    }if(entrada%3===0){
        if(entrada % 3 === 0 && entrada %5 === 0){
            return "Fizz Buzz";
        } return "Fizz";

    }if(entrada % 5 === 0){
        return "Buzz"
    } 
    return entrada;



}


console.log(fizzBuzz(3));