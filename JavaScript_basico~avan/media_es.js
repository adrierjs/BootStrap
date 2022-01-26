//obter media a partir de um array
// 0-59: f
//60-69: d
//70-70: c
//80-89: b
//90-99: a

const notas = [100, 100, 100,00];

function media(notas) {
    let soma = 0;
    for (let i of notas) {
        soma += i;
    }
    return media = soma / (notas.length);

}

function verificarNotas(media){
    if (media < 59) return "F";
    if (media < 69) return "D";
    if (media < 79) return "C";
    if (media < 89) return "B";

    return "A";
    
}

console.log(verificarNotas(media(notas)));