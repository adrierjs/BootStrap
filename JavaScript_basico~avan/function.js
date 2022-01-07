function recebeNum() {//funcao sem parametros
    num = 10;

};

recebeNum();

console.log(num);

function corD(cor, tonalidade) {
    corSite = cor + "," + tonalidade;//concatenei os dois
    console.log(corSite);
}

corD("Azul", "Black");

//function com return 

function dividir(num1, num2) {
    resul = (num1 / num2);
    return resul;
};

console.log(dividir(10, 10));
