var fs = require("fs")
let Mock = require('mockjs')

var _obj = require('../app.js')

_obj.app.get('/', function (req, res) {
  res.send('Hello World');
})
// 异步读取-- 子页面
fs.readFile('../data/child.json', (err, data) => {
  if (err) {
    return console.error(err)
  }
  // 查
  _obj.app.get('/data/child', (req, res) => res.send(
    Mock.mock(JSON.parse(data))
  ))
  // 删
  _obj.app.del('/data/child', (req, res) => res.send(
    Mock.mock(JSON.parse(data))
  ))
})

// 异步读取-- 个人中心
fs.readFile('../data/user.json', (err, data) => {
  if (err) {
    return console.error(err)
  }
  // 查
  _obj.app.get('/data/user', (req, res) => res.send(
    Mock.mock(JSON.parse(data))
  ))
  // 改
  _obj.app.post('/data/user', (req, res) => res.send(
    Mock.mock(JSON.parse(data))
  ))
})