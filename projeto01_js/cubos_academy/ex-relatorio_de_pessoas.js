const pessoas = [
  {
    nome:"José",
    idade: 30
  },
  {
    nome: "Maria",
    idade:16
  },
  {
    nome: "Pedro",
    idade: 18
  },
   {
    nome: "jose",
    idade: 18
  }
];


function criar_relatorio(lista){
  let maiores = 0;
  let menores = 0;
  for(let item of lista){
    const idade = item.idade;
    if (idade >=18){
      maiores ++;
    } else {
      menores ++;
    }
  }
  
const resposta = {
  qtdMiores: maiores,
  qtMenores: menores,
  percMaiores: maiores / pessoas.length,
  percMenores: menores / pessoas.length
}; 
console.log(resposta);
}
criar_relatorio(pessoas);