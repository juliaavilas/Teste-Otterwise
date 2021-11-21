import fetch from 'node-fetch'

export const buscaEndereco = async cep => {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const json = await response.json()
    console.log(
      `${json.logradouro}, ${json.bairro}-${json.localidade}/${json.uf}`
    )
  } catch (error) {
    console.log('Ocorreu um erro ao buscar o endereço')
  }
}
