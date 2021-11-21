export const traduz = array01 => {
  let arrayTraduzido = []
  for (var i = 0; i < array01.length; i++) {
    const traducao = {
      1: 'i',
      3: 'e',
      4: 'a',
      5: 's',
      7: 't',
      0: 'o',
    }

    for (let num in traducao) {
      array01[i] = array01[i].replaceAll(num, traducao[num])
    }
    arrayTraduzido.push(array01[i].trim())
  }
  return arrayTraduzido
}
