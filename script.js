function insert(number){
    var num = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = num + number ;

}

function clean(){
    document.getElementById('result').innerHTML = '';
}

function backspace(){
    var resultado = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = resultado.substring (0, resultado.length -1);
}

function calc(){
    var resultado = document.getElementById('result').innerHTML;
    if(resultado){
    document.getElementById('result').innerHTML = eval(resultado);
    }
    else{
        document.getElementById('result').innerHTML="Favor inserir um numero";
    }

}