var elementoNumeroAtual = document.getElementById('currentNumber');
var numeroAtual = 0;

function subtrai(){
    numeroAtual = numeroAtual - 1;
    return elementoNumeroAtual.innerHTML = numeroAtual;    
}

function adiciona(){   
    numeroAtual = numeroAtual + 1;
    return elementoNumeroAtual.innerHTML = numeroAtual;    
}

