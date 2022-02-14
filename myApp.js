var express = require('express');
var app = express();
console.log("hello world")

// app.get('/',function(req, res){
//   res.send('Hello Express')
// })


app.get('/' ,function(req, res){
  res.sendFile(__dirname + '/views/'+'index.html')
});

app.route('/name')
    .get(function(req, res){
      console.log(JSON.stringify(req.query))
    }).post(function(req,res){
      res.json({name: req.query.first+' '+req.query.last})
    })

// app.get('/:word/echo',function(req,res){
//   res.send({'echo':req.params.word})
// })

// app.get('/:'+word+'/echo',)

// app.get('/now', function(req, res, next) {
//   req.time = new Date().toString();
//   next();
// }, function(req, res) {
//   console.log(res.send({time: req.time}));
// });

app.use('/public',express.static(__dirname+'/public'));


// app.get('/json', function(req, res){
//   if(process.env['MESSAGE_STYLE'] === "uppercase"){
//     res.json({"message": "HELLO JSON"})
//   }else{
//     res.json({"message": "Hello json"})
//   }
// });





























 module.exports = app;
