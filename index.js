function yes() {
    declaration()
}

function desvia() {
    const btn = document.querySelector('#desvia')
    btn.style.position = 'absolute'
    btn.style.bottom = toAlter(10, 90)
    btn.style.left = toAlter(10, 90)
}

function toAlter(min, max) {
    return `${Math.random() * (max - min) + min}%`
}

const btnYes = document.querySelector('#yes').addEventListener('click', yes)
const btnNo = document.querySelector('#desvia').addEventListener('mouseover', desvia)

function declaration() {
    const declaration = document.getElementById('declaration')
    declaration.className = 'declaration'
    declaration.innerText = 'Bianca, Eu sou LOUCO por você! Desde que te conheci você não saiu mais da minha cabeça, eu te acho maravilhosa, quando penso em você eu sinto vontade de ser muito melhor, eu amo a sua presença e contigo eu me sinto capaz de ter o mundo! Você é especial, você é PERFEITA pra mim, meu amor! Eu chuto a bunda de qualquer um por você!'
    const main = document.getElementById('main')
    main.innerText = ''
    return declaration
}
