// for(let contador = 0; contador <= 12; contador++){
//futuramente melhorar o length do resultado quebrado
// }

function inserir(operando){
    //variavel numero vai receber o que tem dentro da div resultado
    let numero = document.getElementById('resultado').innerHTML    
    resultado.innerHTML = (numero + operando)    
}

function clean(){
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = ''
}

function apagar(){
    let resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
    // resultado.innerHTML = resultado.substring(0, resultado.length -1) ---não funciona
}

function operar(){
    let resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = eval(resultado) 

    // if(resultado){
    //     document.getElementById('resultado').innerHTML = eval(resultado) 
    // }

    //A função eval() computa um código JavaScript representado como uma string.
}