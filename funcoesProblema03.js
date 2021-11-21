const formatarCPF = cpf =>
  cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')

const formatarTelefone = telefone =>
  telefone.replace(/(\d{2})(\d{4})(\d)/, '($1) $2-$3')

const inicialMaiuscula = nome => {
  let nomeAlterado = nome.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase()
  })
  return nomeAlterado
}

export const formataDados = array03 => {
  let dadosFormatados = ''
  let dados = ''
  for (let i = 0; i < array03.length; i++) {
    dados = `${inicialMaiuscula(array03[i].nome)} \n${formatarCPF(
      array03[i].cpf
    )} \n${formatarTelefone(array03[i].telefone)} \n\n`
    dadosFormatados = dadosFormatados.concat(dados)
  }
  return dadosFormatados
}
