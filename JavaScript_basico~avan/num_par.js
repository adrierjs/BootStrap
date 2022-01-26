function verificar(num){
    for(let i=0;i<num;i++){
        if(i%2 ===0){
            console.log("par: "+i);
        }else{
            console.log("impar: "+i);
        }
    }
}

const lim = 10;
verificar(lim);

