
let color
const button =document.querySelector('#calc-imc-btn')
const altura =document.querySelector('#altura')
const peso =document.querySelector('#peso')
const imcElement=document.querySelector("#imc")


function calcIMC(weight, height) {
    return weight / height ** 2
}

function getIMC() {
    let sexo = document.querySelector('input[name=sexo]:checked').value
    let height = altura.value
    let weight = peso.value
    const imc = calcIMC(weight, height)
    const status = statusIMC(imc, sexo)
    color=setcolor(status)
    imcElement.value = status
    imcElement.setAttribute('class','form-control form-control-lg '+color)
    color
}

function statusIMC(imc, sexo) {

    if (sexo =='feminino') {
        if (imc < 19.1)
            return 'Abaixo do Peso'
        if (imc < 25.8)
            return 'Peso Ideal'
        if (imc < 27.3)
            return 'Marginalmente Acima do Peso'
        if (imc < 32.8)
            return 'Acima do Peso Ideal'
        else
            return 'Obesa'

    }
    else {
        if (imc < 20.7)
            return 'Abaixo do Peso'
        if (imc < 26.4)
            return 'Peso Ideal'
        if (imc < 27.8)
            return 'Marginalmente Acima do Peso'
        if (imc < 31.1)
            return 'Acima do Peso Ideal'
        else
            return 'Obeso'

    }
}

function setcolor(status) {
    switch (status) {
        case ('Abaixo do Peso'):
            return 'border border-warning bg-warning text-white'

        case ('Peso Ideal'):
            return 'border border-success bg-success text-white'

        case ('Marginalmente Acima do Peso'):
            return 'border border-warning bg-warning text-white'

        case ('Acima do Peso Ideal'):
            return 'border border-warning bg-warning text-white'

        case ('Obeso'):
            return 'border border-danger bg-danger text-white'

        case ('Obesa'):
            return 'border border-danger bg-danger text-white'

    }
}

button.addEventListener('click', function () {
    getIMC()
})

document.addEventListener('keyup', function (event) {
    if (event.key == 'Escape') {
        altura.value = ''
        peso.value = ''
        imcElement.value = ''
        altura.focus()
    } else if (event.key == 'Enter') {
        getIMC()
    }
})