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
    declaration.innerText = 'Eu sou LOUCO por vc, meu amor! que legal que vc clicou no "sim" né? kkkkk mas enfim, desde que te conheci você não saiu mais da minha cabeça, você é uma mina INCRÍVEL e eu não acredito ainda que eu pude ter essa chance de ter uma mulher do seu nível comigo, linda, maravilhosa, a minha princesa. Eu realmente ganhei na loteria depois de te conhecer, então fiz essa zoeirinha aqui pra te pedir em namoro! Obrigado por ter aparecido na minha vida, minha linda! Você é muito especial pra mim! \nTe amo muito. de Lucca p/ Bibi perigosa'
    const main = document.getElementById('main')
    main.innerText = ''
    return declaration
}
