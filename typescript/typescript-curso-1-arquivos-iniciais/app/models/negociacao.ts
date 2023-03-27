export class Negociacao {

    constructor(
        private _data: Date,
        readonly quantidade: number,
        readonly valor: number
        ) {}

    get volume(){
        return this.quantidade * this.valor
    }

    get data(): Date{
        const data = new Date(this._data.getTime())
        return this._data
    }
}