numerosDaSorte = [37, 14, 26, 5, 94, 87]

for(let i=0; i< numerosDaSorte.length; i++){
    console.log(numerosDaSorte[i]);
    if (numerosDaSorte[i] %2 == 0 && numerosDaSorte[i] < 50) {
      console.log(" X é par e menor que 50");
    } else if(numerosDaSorte[i] < 50){
      console.log("X é menor que 50");
    } else {
      console.log("X é maior que 50");
    }
}