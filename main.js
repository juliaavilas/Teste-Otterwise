import { traduz } from './funcoesProblema01.js'
import {
  ordemCrescente,
  ordemDecrescente,
  filtro,
  somaSalarios,
} from './funcoesProblema02.js'
import { formataDados } from './funcoesProblema03.js'
import { buscaEndereco } from './funcoesProblema04.js'

console.log('### Problema 01 ###')
const array01 = [' h3ll0 w0rld', ' w3b d3v3l0p3r ', '0tterw1s3', 'j4v4scr1pt ']
console.log(traduz(array01))

console.log(' ------------------ ')
console.log('### Problema 02 ###')
const array02 = [
  { id: 1, nome: 'João', idade: 30, salario: 15000, senioridade: 'senior' },
  { id: 2, nome: 'Pedro', idade: 22, salario: 10000, senioridade: 'pleno' },
  { id: 3, nome: 'Carla', idade: 27, salario: 1500, senioridade: 'estagio' },
  { id: 4, nome: 'Lucas', idade: 35, salario: 15000, senioridade: 'senior' },
  { id: 5, nome: 'Roberta', idade: 45, salario: 5000, senioridade: 'junior' },
  { id: 6, nome: 'Patrícia', idade: 19, salario: 10000, senioridade: 'pleno' },
  { id: 7, nome: 'Joana', idade: 23, salario: 5000, senioridade: 'junior' },
]

let caracterFiltro = 'junior'

console.log('### Ordem crescente: ', ordemCrescente(array02))
console.log(' ------------------ ')
console.log('### Ordem decrescente', ordemDecrescente(array02))
console.log(' ------------------ ')
console.log('### Filtro', filtro(array02, caracterFiltro))
console.log(' ------------------ ')
console.log('### Soma de todos os salários: ', somaSalarios(array02))

console.log(' ------------------ ')
console.log('### Problema 03: ###')
const array03 = [
  {
    nome: 'Analu dos santos baptista',
    cpf: '14776213931',
    telefone: '8328008258',
  },
  {
    nome: 'Cláudio silva figueiredo ',
    cpf: '47187999887',
    telefone: '11988754092',
  },
  {
    nome: 'Juca da silva pereira',
    cpf: '79225578922',
    telefone: '53984252563',
  },
]

console.log(formataDados(array03))

console.log(' ------------------ ')
console.log('### Problema 04 ###')
let cep = 96085000
buscaEndereco(cep)
