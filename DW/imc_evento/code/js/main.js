let color
const imcElement=document.querySelector('#imc')
const button=document.querySelector("#calc-imc-btn")

function calcIMC(weight, height) {
    return  weight/height **2 
}

function getIMC(){
    
    const height= document.querySelector('#altura').value
    const weight= document.querySelector('#peso').value
    const sex = document.querySelector('input:checked').value
    const imc = calcIMC(weight,height)
    const status=statusIMC(imc,sex)
    imcElement.value = status
}

function statusIMC(imc,sex){
   
    if (sex =='feminino') {
        if (imc<19.1)
            return 'Abaixo do Peso'
        if (imc<25.8)
            return 'Peso Normal'
        if (imc<27.3)
            return 'Marginalmente Acima do Peso'
        if (imc<32.8) 
            return 'Acima do Peso Ideal'
        else 
            return 'Obesa'
        
    }
    else { 
        if (imc<20.7) 
                return 'Abaixo do Peso'
            if (imc < 26.4) 
                return 'Peso Normal'
            if (imc < 27.8) 
                return 'Marginalmente Acima do Peso'
            if (imc<31.1) 
                return 'Acima do Peso Ideal'
            else 
                return 'Obeso'
            
        }
}
