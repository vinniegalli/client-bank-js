import { Cliente } from './Cliente.js'
import { Gerente } from './Funcionários/Gerente.js'
import { Diretor } from './Funcionários/Diretor.js'
import { SistemaDeAutenticacao } from './SistemaDeAutenticacao.js'

const diretor = new Diretor('Vinicius', 10000, 123456789)
diretor.cadastrarSenha('123456')

const gerente = new Gerente('Ricardo', 5000, 1234568722)
gerente.cadastrarSenha('123')

const cliente = new Cliente('Joao', 33344455567, '998877')

const gerenteEstaLogado = SistemaDeAutenticacao.login(gerente, '123')

const diretorEstaLogado = SistemaDeAutenticacao.login(diretor, '123456')

const clienteEstaLogado = SistemaDeAutenticacao.login(cliente, '998877')

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado)
