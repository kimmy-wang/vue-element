var express = require('express')
var compression = require('compression')
var config = require('./config/index')
var axios = require('axios')

var port = process.env.PORT || config.build.port
const BASE_URL = 'https://www.insco-api.com'

var app = express()

var apiRoutes = express.Router()

apiRoutes.get('/find/getBanner', function (req, res) {
  const url = BASE_URL + '/banner'
  axios.get(url).then((response) => {
    res.json(response.data)
  }).catch((e) => {
    console.log(e)
  })
})

app.use('/api', apiRoutes)

app.use(compression())

app.use(express.static('./dist'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
