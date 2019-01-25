var express = require('express')
var app = express()

// app.use(express.static('public'))
// app.use('/static', express.static(__dirname + '/public'));
app.use('../public', express.static('public'));//将文件设置成静态

app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.listen(8081, () => console.log('Example app listening on port 8081!'))

module.exports = {
  app: app
}