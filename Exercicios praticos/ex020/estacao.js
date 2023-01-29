function estacao(){
    let mes = prompt('Digite o mês em extenso (ex: outubro)')
    let saida = document.getElementById('saida')
    let estacao
    switch (mes.toUpperCase()) {
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
            estacao = 'Inverno'
            break;
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            estacao = 'Primavera'
            break
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            estacao = 'Verão'
            break
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            estacao = 'Outono'
            break
        default:
            estacao = 'indefinida'
            break;
    }
    saida.innerHTML = `<p>No mês de <mark>${mes}</mark>, estamos na estação <mark><strong>${estacao}</strong></mark></p>`
}