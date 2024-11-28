var operacao = document.getElementById('operacao');
var input1 = document.getElementById('input1')  ;
var input2 = document.getElementById('input2');
var resultado = document.getElementById('resultado');
var botao_calculo = document.getElementById('botao');
var calculo = 0;

botao_calculo.addEventListener('click', function(){ // addEventListener faz com que adicione um evento que nesse caso, entre parenteses é o "click" e ao clicar, realiza a function.
    var numero1 = Number(input1.value); // value faz com que tenha acesso somente ao que o usuário escolheu ou digitou
    var numero2 = Number(input2.value);
    var operacao_selecionada = operacao.value;
    switch (operacao_selecionada){ // swicth e case é referente a escolha caso do portugol
        case ('+'):
            calculo = (numero1+numero2)
            resultado.innerHTML = calculo 
            break; 
        case ('-'):
            calculo = (numero1-numero2)
            resultado.innerHTML = calculo  
            break;    
        case ('x'):
            calculo = (numero1*numero2)
            resultado.innerHTML = calculo
            break;
        case ('/'):
            calculo = numero1/numero2
            resultado.innerHTML = calculo
            break;
    }
});