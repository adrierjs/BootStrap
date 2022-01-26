//criar um metodo para ler propriedades de um objeto e 
//exibir somente as propriedades do tipo string que estão nesse objeto
const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    Autor: 'Adrier'


}

function exibir(filme){
    for(i in filme){
        if(typeof filme[i] ==='string'){
            console.log(i, filme[i]);
        }
    }
   
}



exibir(filme);





