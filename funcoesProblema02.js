const peso = {
  estagio: 1,
  junior: 2,
  pleno: 3,
  senior: 4,
}

export const ordenaCrescente = array02 =>
  array02.sort((a, b) => {
    return a.idade - b.idade || a.id - b.id
  })

export const ordenaDecrescente = array02 =>
  array02.sort((a, b) => {
    return peso[b.senioridade] - peso[a.senioridade] || b.id - a.id
  })

export const filtra = (array02, caracterFiltro) =>
  array02.filter(
    elem =>
      elem.id === caracterFiltro ||
      elem.nome === caracterFiltro ||
      elem.idade === caracterFiltro ||
      elem.salario === caracterFiltro ||
      elem.senioridade === caracterFiltro
  )

export const somaSalarios = array02 =>
  array02.reduce((acc, elem) => acc + elem.salario, 0)
