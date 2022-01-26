//criar uma função que exiba a quantidade de
//asteriscos que aquela linha possui

function asteriscos(linhas){
   let aste ="";
    for(let i=1; i<=linhas;i++){
        aste += "*";
        console.log(aste);
    }
}

asteriscos(10);