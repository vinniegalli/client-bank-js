import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'
import { ContaPoupanca } from './ContaPoupanca.js'
import { Conta } from './Conta.js'
import { ContaSalario } from './ContaSalario.js'

const cliente1 = new Cliente('Vinicius', 11122233309)

const contaCorrenteVinicius = new ContaCorrente(cliente1, 1001)
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)

const conta = new ContaSalario(cliente1, 1001)

conta.depositar(200)

conta.sacar(100)

console.log(conta)
// const conta = new Conta(0, cliente1, 1001) GERA UM ERRO POR NÃO PODER INSTANCIAR ESSA CLASSE DIRETAMENTE
// console.log(conta)
