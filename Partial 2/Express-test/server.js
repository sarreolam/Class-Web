const express = require('express');
const bodyParser = require('body-parser');

const app= express()
app.use(bodyParser.urlencoded({extended: true}))

app.get('/',(req,res)=>{
  res.write('hello world');
  res.send();
});

app.get('/hello',(req,res)=>{
  res.write('buenas');
  res.send();
});


app.listen(3000, ()=>{
  console.log('listning on port 3000....')
})
