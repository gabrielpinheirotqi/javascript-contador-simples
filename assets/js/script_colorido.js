var elementoNumeroAtual = document.getElementById('currentNumber');
var numeroAtual = 0;

function subtrai(){
    numeroAtual = numeroAtual - 1;
    if (numeroAtual < 0) {
        elementoNumeroAtual.style.color = "red";
    } else if (numeroAtual < 15 ) {
        elementoNumeroAtual.style.color = "orange";
    } else {
        elementoNumeroAtual.style.color = "green";
    }
    return elementoNumeroAtual.innerHTML = numeroAtual;    
}

function adiciona(){   
    numeroAtual = numeroAtual + 1;
    if (numeroAtual < 0) {
        elementoNumeroAtual.style.color = "red";
    } else if (numeroAtual < 15 ) {
        elementoNumeroAtual.style.color = "orange";
    } else {
        elementoNumeroAtual.style.color = "green";
    }
    return elementoNumeroAtual.innerHTML = numeroAtual;    
}

