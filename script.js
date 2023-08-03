function verifyNumber(){
    var element = document.getElementById('number');
    var number = element.value;
    var resultado = document.querySelector('span');

    if(number === ""){
        resultado.innerHTML =("Digite um número!");
    }else if(number % 2 === 0 && number <= 100 && number > 0){
        resultado.innerHTML =('O número atende aos critérios.');
    }else{
        resultado.innerHTML =('O número não atende aos critérios.')
    }
}

