//criar funçao somar que retorna a
//soma de todos os multiplos de 3 e 5


function verificar(limite) {
    let mult_3 = 0,mult_5 = 0;;
    for(let i=0; i<=limite; i++){
        if(i%3 ===0){
            console.log("Multiplos de 3:"+i);
            mult_3 =+i;
        }if(i%5 ===0){
            console.log("Multiplos de 5:"+i);
            mult_5 =+i;
        }
    }
    return mult_3+mult_5;
}
let limite = 10;
console.log(verificar(limite));


