const express = require('express');
const router = express.Router();

module.exports = function(app){
  app.get('/',function(req,res){
    res.render('index.html')
  });
  app.get('/login',function(req,res){
    res.render('login.html');
  });
  app.get('/register',function(req,res){
    res.render('register.html');
  });
  app.get('/parking',function(req,res){
    res.render('parking.html');
  });
  app.get('/admin',function(req,res){
    res.render('admin.html');
  });

module.exports = router;
}
