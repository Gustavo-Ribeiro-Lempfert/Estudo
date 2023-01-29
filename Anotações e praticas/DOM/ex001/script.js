let calc = document.getElementById('iniciar')
let rest = document.getElementById ('saida')

function calcular() {
    calc = Number(window.prompt('Digite um valor: '))

    if (calc <= 0) {
        alert('Digite um valor valido!')
    } else{
        for (let i = 1; i <= 10; i++) {
            rest.innerHTML += `<p>${calc} X ${i} = ${(calc * i)}</p>`
        }
    }
}