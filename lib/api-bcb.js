const axios = require('axios')


const geturl = data => `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${data}'&$top=100&$format=json`

const getCotacaoAPI = (data) => axios.get(geturl(data))
const extractCotacao = res => res.data.value[0].cotacaoVenda
const getToday = () => {
  const today = new Date()
  return ((today.getMonth() + 1) + '-' + (today.getDate()) + '-' + (today.getFullYear()))
}

const getCotacao = async () => {
  try {
    const today = getToday()
    console.log(today)
    const res = await getCotacaoAPI(today)
    const cotacao = extractCotacao(res)
    return cotacao
  } catch (err) {
    return ''
  }
}

module.exports = {
  getCotacaoAPI,
  getCotacao,
  extractCotacao
}