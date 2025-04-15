
const calcular = document.getElementById('calcular')
calcular.addEventListener('click', imc)

function imc(){
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    if (nome !== '' && altura !== '' && peso !== '' ){
        
        const resultadoIMC = parseInt( peso / (altura * altura))
        resultado.textContent = `${nome} seu imc é : ${resultadoIMC}  `

    }else{
        resultado.textContent = "'Preencha todos os campos'"
    }
}



