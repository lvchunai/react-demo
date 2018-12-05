var koa = require('koa')
var app = koa()
var fs = require('fs')

app.use(function* (){
 fs.readFile('./app.js', 'utf8', function (e, data) {
  console.log(data)
  this.body = data
 })
 // this.body = 'hello'
})

app.listen(3000)