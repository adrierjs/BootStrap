//cupom RANGOBARATO
// apenas das 12 h as 13:59
//se tiver cupom e estiver dentro do horario, tem 10%
//se for 100 reais ou mais, 20%

function desconto(valor_da_compra, hora, cupom){
  if(cupom === "RANGOBARATO") {
      if(hora >=12 && hora <14){
        if (valor_da_compra <100){
          desconto = (valor_da_compra*10)/100;
        }
        else{
        desconto = (valor_da_compra*20)/100;
        }
      }
      else{
        console.log("Fora do horário permitido");
        }
  console.log(`O valor do desconto é de: ${desconto} reais`);
}
else{
  console.log("Cupom inválido!");
}
}

desconto(100, 13,"RANGOBARATO");