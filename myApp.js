var express = require('express');
var app = express();
console.log("hello world")

// app.get('/',function(req, res){
//   res.send('Hello Express')
// })


app.get('/' ,function(req, res){
  res.sendFile(__dirname + '/views/'+'index.html')
});

app.use(function(req,res,next){
  console.log('incoming req '+req.method +' '+ req.path+' '+'-'+' '+req.ip);
  next();
})

// app.use('/public',express.static(__dirname+'/public'));


// app.get('/json', function(req, res){
//   if(process.env['MESSAGE_STYLE'] === "uppercase"){
//     res.json({"message": "HELLO JSON"})
//   }else{
//     res.json({"message": "Hello json"})
//   }
// });





























 module.exports = app;
