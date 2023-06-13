let resultado = document.querySelector('.resultado');

function insert(valor){

    let ultimoValorDigitado = resultado.innerHTML[resultado.innerHTML.length-1];

    if(ultimoValorDigitado && !Number(ultimoValorDigitado) && !Number(valor) && ultimoValorDigitado != 0 && valor != 0 ) 
    {
        backspace();
    }
    
    resultado.innerHTML += valor;
}


function clean(){
    resultado.innerHTML = ' ';
}

function backspace(){
    if(resultado.textContent){
        resultado.innerHTML = resultado.innerHTML.slice(0, -1)
    }
}

function calc(){
    
    try{
        resultado.innerHTML = eval(resultado.innerHTML);

    } catch(error){
        alert("Algo deu errado. Tente novamente");
        

    }
}


