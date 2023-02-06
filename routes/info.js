const express = require("express");
const router1 = express.Router(); 


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
})

router1.get('/registration', (req, res)=>{
  res.render('registrationform')
})

module.exports = router1
