const express = require("express");
const router1 = express.Router(); 
const file = require('fs');

router1.post('/login', (req, res)=>{

  let y = req.body.username;
  let z = req.body.password;

  if (y == "admin" && z == "123456"){
    return (res.render('registrationform'));                
  }
   
  else{
    res.render('invalid') 
  }
})

router1.post('/registration', (req, res)=>{
  let fn = req.body.firstname
  req.body.sumbit
  res.render('Welcomepage',{firstname:fn})

   var sample = req.body.firstname
    
    console.log(req.body.firstname)

    file.writeFile('newdata', sample, function(err) {

        if(err) throw err;
        console.log('saved');
        res.end();

    }) 
})

router1.get('/registration', (req, res)=>{
  res.render('registrationform')
})

module.exports = router1
