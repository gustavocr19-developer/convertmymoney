const express = require('express')
const app = express()
const path = require('path')

const convert = require('./lib/convert')
const api_bcb = require('./lib/api-bcb')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, err => {
  if (err) {
    console.log('Server error')
  } else {
    console.log('Convert Money is online')
  }
})

app.get('/', async (req, res) => {
  const cotacao = await api_bcb.getCotacao()

  res.render('home', {
    cotacao
  })
})

app.get('/cotation', (req, res) => {
  const { cotation, quantity } = req.query

  if (cotation && quantity) {

    const convertion = convert.convert(cotation, quantity)

    res.render('cotation', {
      cotation: convert.toMoney(cotation),
      quantity: convert.toMoney(quantity),
      convertion: convert.toMoney(convertion),
      error: false
    })
  } else {
    res.render('cotation', {
      error: 'Invalid values'
    })
  }
})