import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'

const cliente1 = new Cliente('Vinicius', 11122233309)

const cliente2 = new Cliente('Victoria', 5557778808)

const contaCorrenteVinicius = new ContaCorrente(cliente1, 1001)
contaCorrenteVinicius.depositar(500)

const conta2 = new ContaCorrente(cliente2, 1002)

contaCorrenteVinicius.transferir(200, conta2)

console.log(ContaCorrente.numeroDeContas)
