import {getValues} from './mail.js'
import {projects} from './exp'
const btn_project = document.querySelector('.readProjects')
const othersExpBtn = document.querySelector('.readMoreOthersExp')
const btnX = document.querySelector('#xBtn')

btn_project.addEventListener('click', openModal)
othersExpBtn.addEventListener('click', openModal)

btnX.addEventListener('click', closeModal)

function openModal(e) {
    const dModal = document.querySelector('.divModal')
    const modal = document.querySelector('.modal')
    const innerModal = document.querySelector('.innerModal')
    console.log('Works')
    if(this.className === 'readProjects'){
       dModal.innerHTML = projects     
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


const submitBttn = document.querySelector('#submit_button')
submitBttn.addEventListener('click', getValues)



// Ajustar o modal com os dados das experiencias
// ajustar os botoes read me para melhorar o layout
// inserir o href nos a das midias sociais
// ajustar o site para mobile version (se possivel)























