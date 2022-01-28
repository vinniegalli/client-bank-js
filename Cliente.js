import { ContaCorrente } from './ContaCorrente.js'

export class Cliente {
  nome
  _cpf

  get cpf() {
    return this._cpf
  }

  constructor(nome, cpf) {
    this.nome = nome
    this._cpf = cpf
  }
}
