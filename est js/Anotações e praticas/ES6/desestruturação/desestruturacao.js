//DADOS
const valores = [4, 1, 2, 3, 4, 5]

const cliente = {
    nome: 'Angelo Luz',
    cpf: '014.035.510.11',
    nascimento: '23/06/1986',
    telefone: '981560346',
    endereco: {
        rua: 'Avenida Javascript',
        cidade: 'Pelotas',
        estado: 'RS',
        pais: 'Brasil',
    },
};

const cliente2 = {
    nome: 'André Geraldo',
    cpf: '040.459.123.45',
    nascimento: '04/04/1997',
    telefone: '945684321',
    endereco: {
        rua: 'Avenida Python',
        cidade: 'Pelotas',
        estado: 'RS',
        pais: 'Brasil',
    },
};

//DESESTRUTURAÇÃO
//TODO: Função que recebe um cliente e retorna apenas CPF, telefone e a cidade
const {cpf, telefone, endereco:{cidade}} = cliente
console.log('cpf :>> ', cpf);
console.log('telefone :>> ', telefone);
console.log('cidade :>> ', cidade);

function x ({cpf, telefone, endereco: {cidade}}) {
    console.log('cpf :>> ', cpf);
    console.log('telefone :>> ', telefone);
    console.log('cidade :>> ', cidade);
} x(cliente)

//TODO: Pega o primeiro (e o terceiro) elemento do array de números (ignora o segundo)
const [n1, , n3] = valores;
console.log('n1 e n3 :>> ', n1, n3);
