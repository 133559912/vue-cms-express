var fs = require("fs")
let Mock = require('mockjs')

var _obj = require('../app.js')

// 验证码图片
fs.readFile('../data/captcha.json', (err, data) => {
  if (err) {
    return console.error(err)
  }
  _obj.app.get('/auth/captcha', (req, res) => res.send(
    Mock.mock(JSON.parse(data))
  ))
})

// login
fs.readFile('../data/login.json', (err, data) => {
  if (err) {
    return console.error(err)
  }
  _obj.app.post('/auth/tokens', (req, res) => {
    var str = ''
    req.on('data', function (dt) {
      str += dt
    })
    req.on('end', function () {
      let _user = JSON.parse(str)
      // 暂定用户名admin 密码 admin123
      if (_user.userName === 'admin' && _user.password === 'admin123') {
        res.send(
          Mock.mock(JSON.parse(data)).pass
        )
      } else {
        res.send(
          Mock.mock(JSON.parse(data)).no_pass
        )
      }
    })
  })
})

