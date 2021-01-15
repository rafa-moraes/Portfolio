export function getValues() {
    let inputValue = document.querySelector('[name="name"]')
    let emailValue = document.querySelector('[name="email"]')
    let textValue = document.querySelector('#textarea')
    let data = {
        name: inputValue.value ,
        email: emailValue.value ,
        message: textValue.value , 
    }
    inputValue.value = ''    
    emailValue.value = ""
    textValue.value = ""
    sendEmail(data.name,data.email,data.message)
}


export function sendEmail(name, email,message){
    Email.send({
        Host: "smtp.gmail.com",
        Username: "rafael.mb2021@gmail.com",
        Password: "bftzficmvzuazdzi",
        To: "rafael_m_barros@hotmail.com",
        From: "rafael.mb2021@gmail.com",
        Subject: `${name} contacted you`,
        Body: `Name: ${name} <br/> Email: ${email} <br/> Message:${message}`,
    }).then(message => alert("E-mail sent successfully"))
}