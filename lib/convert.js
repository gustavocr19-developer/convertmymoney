const convert = (cotation, quantity) => {
  return cotation * quantity
}

const toMoney = value => {
  return parseFloat(value).toFixed(2)
}

module.exports = {
  convert,
  toMoney
}