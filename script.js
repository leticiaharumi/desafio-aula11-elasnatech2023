function verifyNumber(){
    var element = document.getElementById('number');
    var number = element.value;
    
    if(number % 2 === 0 && number <= 100 && number > 0){
        alert('O número atende aos critérios.');
    } else{
        alert('O número não atende aos critérios.')
    }
}