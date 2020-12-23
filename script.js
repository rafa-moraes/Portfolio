const btn_project = document.querySelector('.read-projects')
const btn_irl = document.querySelector('.read-Irl')
const btn_br = document.querySelector('.read-Br')
const btnX = document.querySelector('#xBtn')

btn_project.addEventListener('click', openModal)
btn_irl.addEventListener('click', openModal)
btn_br.addEventListener('click', openModal)

btnX.addEventListener('click', closeModal)

function openModal(e) {
    const dModal = document.querySelector('.divModal')
    const modal = document.querySelector('.modal')
    const innerModal = document.querySelector('.innerModal')
    if(this.className === 'read-projects'){
       dModal.innerHTML = `       `     
    }
    
    modal.style.display = "block"
    innerModal.style.display = 'block'
    document.body.style.background = 'background: hsla(0,0%,30%,0.5);'
    // body.style.background = '#1E5155'
    
    e.stopPropagation()
    window.addEventListener('click',closeIf)
    window.addEventListener('keyup',closeIf)
}



function closeModal() {
    const modal = document.querySelector('.modal')
    modal.style.display = "none"
    document.body.style.background = ''  
}


function closeIf (e) {
    console.log(e.target)
    const modal = document.querySelector('.modal')
    const innerModal = document.querySelector('.innerModal')
    const dModal = document.querySelector('.divModal')
    if (e.target !== innerModal && e.target !== dModal || e.keyCode === 27) {
        modal.style.display = "none" 
        document.body.style.background = ''  
        console.log(e)
    }

}

// display text

function wait (ms = 0){
    return new Promise(resolve => setTimeout(resolve, ms))
}

const textWhoAmI = document.querySelector('[data-type]')
let eachLetter = textWhoAmI.textContent
let index = 1

async function draw () {
    textWhoAmI.textContent = eachLetter.slice(0,index)
    index++
    
    if(index <= eachLetter.length){
    await wait(5)
    draw()
    }
}
console.log(draw())




// Pendente

// Criar botao de submit de mensagem
// pegar as informacoes de nome, email e mensagem e me enviar um email

// Ajustar o modal com os dados das experiencias
// ajustar os botoes read me para melhorar o layout
// inserir o href nos a das midias sociais
// ajustar o site para mobile version (se possivel)















