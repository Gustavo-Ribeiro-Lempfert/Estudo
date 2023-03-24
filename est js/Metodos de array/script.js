// var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/ ')
// .then(resp => resp.json())
// .then(r=> console.log(r))

// var consultaCEP = fetch('https://viacep.com.br/ws/01001250/json/ ')
//     .then(resp => resp.json())
//     .then(r => {
//         if (r.erro) {
//             throw Error ('CEPinvalido!')
//         } else 
//             console.log(r);
//     }).finally(msg=> console.log('Processamento concluido'))
//     .catch(erro => console.log(erro));


async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    
    try {
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var consultaCEPConvertida = await consultaCEP.json();
    if (consultaCEPConvertida.erro){
        throw Error('CEPinvalido');
    }
    var cidade = document.getElementById('cidade');
    var logradouro = document.getElementById('endereco');
    var estado =document.getElementById('estado');

    cidade.value = consultaCEPConvertida.localidade;
    logradouro.value = consultaCEPConvertida.logradouro;
    estado.value = consultaCEPConvertida.estado;

    console.log(consultaCEPConvertida);
    return consultaCEPConvertida;
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP invalido, tente novamente</p>`
    }
}

var cep = document.getElementById('cep')
cep.addEventListener("focusout", () => buscaEndereco(cep.value));