const elemento_h1 = document.getElementById("titulo");
console.log(elemento_h1);

elemento_h1.innerText = "NOVO TÍTULO";


let elemento_ul = document.querySelector("ul");
console.log(elemento_ul);


let elemento_a = document.querySelector("a");
console.log(elemento_a);

elemento_a.innerText = "https://g1.com.br";


const elemento_ol = document.getElementById("lista-ordenada");
console.log(elemento_ol);

elemento_ol.innerHTML = "<li>Primeiro Item</li> <li>Segundo Item</li> <li>Terceiro Item</li>";
