const express = require ('express')
const main = express()
const file = require ('fs')
 
main.set("view engine", "ejs")
main.use(express.urlencoded({extended:true}))

main.get('/login', (req, res)=>{
    res.render("login")
});


const userRouter = require('./routes/info')
main.use('/info', userRouter)



main.get('/data', (req, res)=>{

    
    var sample = req.body.firstname
    
    console.log(req.body.firstname)

    file.writeFile('newdata', sample +" Hi ", function(err) {

        if(err) throw err;
        console.log('saved');
        res.end();

    })
})

main.listen(2000);