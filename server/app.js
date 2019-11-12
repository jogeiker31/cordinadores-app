var express = require('express');
var app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', function (req, res) {
  res.send('Hello World!');
});

let user = {usuario:'user'}

app.post('/usuario', function (req, res) {
  if(user.usuario == req.body.usuario){
    res.json(user);
  }else {
    res.json()
  }
  
  
  


});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});