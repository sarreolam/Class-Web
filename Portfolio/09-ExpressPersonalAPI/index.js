const { render } = require('ejs');
const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('index')
})

  app.get('/greed', (req,res)=>{
    console.log(req)
    const name = req.body.name
    console.log(name)
    res.render('index')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})