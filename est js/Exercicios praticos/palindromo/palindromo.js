ehUmPalindromo()

function ehUmPalindromo(){
    var palavra = window.prompt('Digite uma palavra: ');
    var separaPalavra = palavra.split("");
    var invertePalavra = separaPalavra.reverse();
    invertePalavra = invertePalavra.join('');    

    if(invertePalavra == palavra) {
        alert(`A palavra ${palavra} é um palindromo`);
    } else{alert(`A palavra ${palavra} não é um palindromo`);}
}