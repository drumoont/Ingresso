function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if(tipo.value == 'pista') {
            comprarPista(qtd);

    } else if (tipo.value == 'superior') {
            comprarSuperior(qtd);
    } else {
            comprarInferior(qtd);
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(qtd > qtdPista){
        alert ('Quantidade indisponível para tipo de Pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
         alert ('Compra realizada com sucesso');

    }
}
function comprarSuperior(qtd) {
    let qdtSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(qtd > qdtSuperior){
        alert ('Quantidade indisponível para tipo de Superior');
    } else {
        qdtSuperior = qdtSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qdtSuperior;
         alert ('Compra realizada com sucesso');

    }
}
    function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtd > qtdInferior){
        alert ('Quantidade indisponível para tipo de Inferior');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
         alert ('Compra realizada com sucesso');

    }
}
