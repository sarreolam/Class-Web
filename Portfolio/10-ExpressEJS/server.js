const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const https = require("https");

// TODO: configure the express server
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.engine('ejs',require('ejs').renderFile);
app.set('view engine', 'ejs');

const longContent =
  "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";

let posts = [];
let name;

app.get("/", (req, res) => {
  // res.sendFile(__dirname + "/public/html/index.html");
  res.render('index',{name});
});   

app.post('/login', (req,res)=>{
  name = req.body.name;
  // posts.push({title: "Mi title", content: longContent});
  res.redirect('/home');
})
app.post('/add_content', (req,res)=>{
  posts.push({title: req.body.title, content: req.body.content});
  res.redirect('/home');
})

app.get('/home', (req,res)=>{
  // posts.push({title: "Mi title", content: longContent});
  res.render('home',{name, posts});
})

app.get('/home/:id', (req,res)=>{
  let id =req.params.id
  let post=posts[id]
  res.render('post.ejs', {name, post, id}) 
})


app.listen(3000, (err) => {
  console.log("Listening on port 3000");
});
