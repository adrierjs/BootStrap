let x = 1;
let condicao = 1;

if(x == 0){

    console.log("Bom dia");
} else if(x == 1){
    console.log("Boa tarde");

}else{
    console.log("Boa noite");
}

switch (condicao){
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Segunda");
        break;
    case 2:
        console.log("Terça");
        break;
    case 3:
        console.log("Quarta");
        break;
    default:
        console.log("incorreto");
        break;

}