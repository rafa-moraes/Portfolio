import {getValues} from './mail.js'
import {projects,experience} from './exp.js'

const btn_project = document.querySelector('.readProjects')
const othersExpBtn = document.querySelector('.readMoreOthersExp')
const btnX = document.querySelector('#xBtn')
const submitBttn = document.querySelector('#submitButton')
submitBttn.addEventListener('click', getValues)

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
    }else {
        dModal.innerHTML =  experience
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
    if (e.target === modal || e.keyCode === 27) {
        modal.style.display = "none" 
        document.body.style.background = ''  
        window.removeEventListener('click',closeIf)
        window.removeEventListener('keyup',closeIf)
    }
    
}




// Ajustar o modal com os dados das experiencias
// ajustar os botoes read me para melhorar o layout
// inserir o href nos a das midias sociais
// ajustar o site para mobile version (se possivel)

const bodys = document.body.offsetWidth
if(bodys<500){
    const paragraphWhoAmI = document.querySelector('.whoAmParagraph')
    paragraphWhoAmI.innerHTML = `My name is Rafael I'm a brazilian living in Ireland since 2018.</br>
    I have a bachelor in business administration an MBA in market management.</br> 
    In 2020 with all the health crises and staying at home I decided that I should try to study software development since I had a little "taste" when I started learning macros in Excel and used Visual Basic.</br>
    I've always enjoyed this world of coding and programming but I tought that I should have started early, and that it was impossible.</br>                    
    Even thought I decided to try and since may/2020 I'm studying as a self-taught programmer everything related to HTML, CSS, Javascript,Git, GitHub and now React and even being frustated (many times) when I accomplish something is an amazing feelling and I love it.</br>
    I've done some projects for beginners and I'm always searching for more knowledge and new projects to do.</br>
    My goal is to be able to work in a company as a software developer and improve even more.
    If you want to see some of my current projects you can access my github page down below or <a href="projects.html" id='clickHere'> Click Here </a>`
}



















