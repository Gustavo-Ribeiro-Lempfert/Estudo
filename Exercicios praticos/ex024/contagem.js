function contar() {
    let saida = document.querySelector('section#saida')

    cont = 10 
    while (cont >=1) {
        saida.innerHTML +=`${cont} &#x1F449;`
        cont --
    }
    saida.innerHTML +=` &#x1F3C1;`
}