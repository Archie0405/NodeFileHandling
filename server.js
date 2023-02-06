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

    
    var buf = Buffer.from(req.body.firstnanme);
    

    file.appendFile('shared/data.txt', buf, function(err) {

        if(err) throw err;
        console.log('saved');
        res.end();
    })
})

main.listen(2000);