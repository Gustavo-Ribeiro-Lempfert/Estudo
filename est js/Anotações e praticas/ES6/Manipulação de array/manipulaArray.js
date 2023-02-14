let clients = [
    {name: 'Angelo Luz', birth: 1986, genre: 'M', purchaseDaysAgo: 10},
    {name: 'Chuck', birth: 1940, genre: 'M', purchaseDaysAgo: 5},
    {name: 'Sansa Stark', birth: 2002, genre: 'F', purchaseDaysAgo: 32},
    {name: 'Dean winchester', birth: 1982, genre: 'M', purchaseDaysAgo: 45},
    {name: 'Ricardo Botelho da Silva', birth: 1993, genre: 'M', purchaseDaysAgo: 29},
    {name: 'Ragnar', birth: 1960, genre: 'M', purchaseDaysAgo: 25},
    {name: 'Elias Wojahn', birth: 1989, genre: 'M', purchaseDaysAgo: 15},
  ]

  let ages = [17, 21, 16, 14, 9, 22, 12, 43, 99, 44, 32];
  console.log(ages);
  //TODO: Altera todos os valores em +1
  ages = ages.map(value => value+1)
  console.log('ages: ', ages)

  //TODO: Retorna todos os valores ímpares
const impares = ages.filter(value => value%2 == 1)
console.log('impares: ', impares)


  //TODO: Altera todos os valores ímpares para o próximo par
const proxPar = ages.map(value => (value %2 ==1 ? value+1 : value))
console.log('proxPar: ', proxPar)
  //TODO: Cria um novo array com os valores menores do que 20 de numbers
const menor20 = ages.filter(value => value<20)
console.log('Numeros menores que 20: ', menor20)
  //TODO: Cria um novo array com os valores menores do que 17 e incrementar eles em um
const menor17 = ages
        .filter(value => value<17)
        .map(value => value + 1)
        console.log('Menores de 17 + 1:', menor17)
  //TODO: Retorne a soma de todos os valores menores do que 20
const somaMenores20 = ages
    .filter (value => value <20)
    .reduce((acc, next) => acc += next)
    console.log('soma dos valores menores do que 20: ', somaMenores20)
  //TODO: Incrementa em 1 o purchaseDaysAgo de todos objetos
const pda1 = clients.map(value => value.purchaseDaysAgo + 1)
  console.log('pda: ', pda1)

  //TODO: Verifica se um determinado número de entrada está contigo no array
  console.log('ages.includes(19):', ages.includes(19))
  console.log('ages.includes(18):', ages.includes(18))
  //TODO: Altera array para ficar só com o primeiro nome dos clientes
  const clientsName = clients.map(value => value.name.split(' ')[0])
  console.log('nome dos clientes: ', clientsName)
  //TODO: Incrementa a idade apenas dos clientes das posições ímpares do array

  //TODO: Retorna quantos são do sexo masculino
const gender = clients.map(value => value.genre == 'M')
console.log(gender.length,'Clients are man.')
  //TODO: Retorna todos as pessoas de sexo masculino
  const clientName = clients.map(value => value.name.split(' ')[0])
  if( clients.genre == 'M' ){
    console.log(clientName)
  }
