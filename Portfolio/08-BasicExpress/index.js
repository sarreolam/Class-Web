const { render } = require('ejs');
const express = require('express')
const app = express()
const port = 3000

let MBI

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use(express.static(__dirname));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {MBI})
})

app.post('/postBMI',(req,res)=>{
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);
  MBI = (weight / (height)^2)/10000;
  res.redirect('/')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})