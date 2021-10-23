const texto = "Eu gosto da Cubos Academy"

let palavra = "";
const novafrase = [];
for (let i = 0; i < texto.length; i++) {
  if(texto[i] == " "){
    novafrase.push(palavra);//pegar a palavra
    palavra = "";
    continue;
  }
  palavra += texto[i]
}

novafrase.push(palavra);


const fraseInvertida = [];
for(let i = novafrase.lenght -1 ; i >=0; i--){
  fraseInvertida.push(novafrase[i]);
}
console.log(fraseInvertida)