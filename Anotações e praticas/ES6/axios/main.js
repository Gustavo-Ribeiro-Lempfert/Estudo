import axios from 'axios'

class Api {
    static async getAddress (cep) {
        const response = new Adress((await axios.get(`http://viacep.com.br/ws/${cep}/json/`)).data)
        return response
    };
}

class Adress{
    constructor ({logradouro, bairro, localidade}){
        this.logradouro = logradouro,
        this.bairro = bairro,
        this.localidade = localidade
    }
}
Api.getAddress('95900082').then(v => {console.log(v)})


//Criação da Classe Address
