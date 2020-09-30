const axios = require('axios')

const url = ''

axios
  .get(url)
  .then(res => console.log(res.data))