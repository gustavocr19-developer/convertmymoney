const express = require('express')
const app = express()
const path = require('path')

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

app.get('/', (req, res) => {
  res.render('home')
})