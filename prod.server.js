var express = require('express')
var compression = require('compression')
var config = require('./config/index')
const data = require('./src/common/js/data')

var seller = data.seller;
var sellers = data.sellers;
var goods = data.goods;
var ratings = data.ratings;

var port = process.env.PORT || config.build.port

var app = express()

var apiRoutes = express.Router()

apiRoutes.get('/seller', function(req, res) {
  res.json({
    errno: 0,
    data: seller
  })
});
apiRoutes.get('/sellers', function(req, res) {
  res.json({
    errno: 0,
    data: sellers
  })
});
apiRoutes.get('/goods', function(req, res) {
  res.json({
    errno: 0,
    data: goods
  })
});
apiRoutes.get('/ratings', function(req, res) {
  res.json({
    errno: 0,
    data: ratings
  })
});

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
