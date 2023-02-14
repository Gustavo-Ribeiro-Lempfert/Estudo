function contar() {
    let res = document.getElementById('saida')


    let cont = 1
    while (cont <= 10) {
        if (cont %2 ==0) {
            res.innerHTML += `<br>${cont}` 
        }
        cont ++
}
}