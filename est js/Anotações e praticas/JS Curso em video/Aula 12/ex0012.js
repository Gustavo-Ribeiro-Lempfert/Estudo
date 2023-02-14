var agora = new Date ()
var min = new Date ()
var minu = min.getMinutes()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas e ${minu} Minutos.`)

if (hora < 12){
    console.log('Bom dia!')
} else if (hora < 19){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}