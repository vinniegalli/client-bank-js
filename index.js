class Cliente {
  nome
  cpf
}

class ContaCorrente {
  agencia
  // #saldo = 0
  _saldo = 0

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor
      return valor
    }
  }

  depositar(valor) {
    if (valor <= 0) {
      return
    }
    this._saldo += valor
  }
}

const cliente1 = new Cliente()
cliente1.nome = 'Vinicius'
cliente1.cpf = 11122233309

const cliente2 = new Cliente()
cliente2.nome = 'Millena'
cliente2.cpf = 88899977709

const contaCorrenteVinicius = new ContaCorrente()
contaCorrenteVinicius.agencia = 1001

contaCorrenteVinicius.depositar(-100)
contaCorrenteVinicius.depositar(100)
contaCorrenteVinicius.depositar(100)

const valorSacado = contaCorrenteVinicius.sacar(50)

console.log(valorSacado)
console.log(contaCorrenteVinicius)
