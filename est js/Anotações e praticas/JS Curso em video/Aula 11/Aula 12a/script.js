function carregar(){
var img = document.getElementById('imagem')
var msg = document.getElementById('msg')
var data = new Date ()
var hora = data.getHours()
var min = data.getMinutes()
msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`
if(hora >= 0 && hora < 12){
    img.src = './imgs/manha.png'
    document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora <19){
        img.src = './imgs/tarde.png'
    } else {
        img.src = './imgs/noite.png'
    }

}