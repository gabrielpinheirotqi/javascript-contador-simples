var elementoNumeroAtual = document.getElementById('currentNumber');
var numeroAtual = 0;

function subtrai(){
    numeroAtual = numeroAtual - 1;
    if (numeroAtual < 0) {
        alert('Não pode mais subtrair.');
        numeroAtual = 0;
        return;
    }
    return elementoNumeroAtual.innerHTML = numeroAtual;    
}

function adiciona(){   
    numeroAtual = numeroAtual + 1;
    return elementoNumeroAtual.innerHTML = numeroAtual;    
}

