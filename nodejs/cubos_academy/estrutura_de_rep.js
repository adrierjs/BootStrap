const listaDeCompras = ["Arroz","Batata","Maçã","Farinha"];

let cont = 0;
while(cont <=3){
  console.log(listaDeCompras[cont]);
  cont++;
}


for (let i = 0; i < 3; i++){
  if (listaDeCompras[i]==="Batata"){
    console.log("\n");
    console.log("Batata está na lista");
    break; 
  }
  console.log(listaDeCompras[i]);
}

