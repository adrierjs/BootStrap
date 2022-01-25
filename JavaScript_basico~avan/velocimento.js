//velocidade maxima de ate 70 
//a cada 5 km acima do limite ganha 1 ponto 
//math.Floor()
//caso pontos maior que 12 -> "Carteira suspendida"

function verifica(velocidade) {
    let pontos;
    const velocidadeMax = 70;
    const kmPonto = 5;
    if (velocidade > velocidadeMax) {
         pontos = Math.floor((velocidade - velocidadeMax)/kmPonto);
    
        if(pontos >=12){
            console.log("Carteira suspensa");
        }else{
              console.log("Pontos perdidos: "+pontos);}     
    } else {
        console.log("Velocidade permitida");
    }
}

verifica(250);


