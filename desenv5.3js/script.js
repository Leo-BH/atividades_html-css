let elementoTitulo = document.createElement("h1");
elementoTitulo.innerText = "Exercício Manipulação do DOM";
elementoTitulo.id = "titulo";

console.log(elementoTitulo);

let elementoPai = document.querySelector("header");

elementoPai.appendChild(elementoTitulo);

const elementoAVenda = document.createElement("div");
 
    elementoAVenda.innerHTML = 
        `<h2>Fone de Ouvido Sem Fio i12 Tws Bluetooth</h2>

        <img src="imgs/fone2.jpg" alt="Imagem_fone">

        <h3>O I12 tws é um fone de ouvido sem fio de toque em chave bluetooth 5.0 esporte fone estéreo para
        iphone xiaomi huawei samsung telefone inteligente.</h3>
        
        <spam>Preço = R$ 24,90</spam>` 

elementoPai = document.querySelector(".principal");

elementoPai.appendChild(elementoAVenda);