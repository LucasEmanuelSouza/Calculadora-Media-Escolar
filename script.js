const calcular = document.getElementById('calcular')

function calcularMedia(){
    const n1 = document.getElementById('nota1').value
    const n2 = document.getElementById('nota2').value
    const n3 = document.getElementById('nota3').value
    const resultado = document.getElementById('resultado')

    

    if(n1 !=='' && n2!=='' && n3!==''){
        let provas = 3

        let valorMedia = ((parseInt(n1)+parseInt(n2)+parseInt(n3))/3).toFixed(1) //na soma é necessario colocar a função parseInt para somar ao invés de concatenar

        let mensagem = ''
        
        if(valorMedia>=6){
            mensagem = 'Parabéns! Você foi aprovado com média'
        }else{
            mensagem = 'Você foi reprovado com média'
        }

        resultado.textContent = `${mensagem} ${valorMedia}`
        
        
    }else{
        resultado.textContent = 'Preencha todos os campos'
    }
}

calcular.addEventListener('click',calcularMedia)