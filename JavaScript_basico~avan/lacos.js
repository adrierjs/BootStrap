for(let i=0; i<3; i++){
    console.log("Laço");
}
let x = 1, y =4;

while( x!= 0){
    console.log("While");
    x++;
    if(x ==3){
        x = 0;
    }

}

do{
    console.log("do");
    y--;
    
}while(y !=0);


//for-in

const pessoa = {
    nome: "Adrier",
    idade: "19"

};

for(i in pessoa){//vai pegar cada atributo do objeto e jogar em i
    console.log(i,pessoa.nome);
    
}

const cores = ["Azul","Verde","Vermelho"];

for(i in cores){
    console.log(cores[i]);
}
console.log("\n");

//for off é bem mais prático que o for convencional, ou seja esse é o for aprimorado
for(i of cores){//
    console.log(i);
}
