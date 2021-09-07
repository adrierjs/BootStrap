// objetos
const pessoa = {
  nome : "Adrier",
  idade: 19,
  ehMaiorDeIdade : true,
  altura: 1.76

};


console.log(pessoa.altura); /*para acessar uma informação específica no objeto, usa a variavel.objeto */

if(pessoa.idade >18){
  console.log("É maior de idade");
} else if (pessoa.idade < 60){
  console.log("É adulta");
}
else{
  console.log("É idosa");
}



/* "===" identidade - verifica se sao identicos */