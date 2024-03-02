'use strict'

/* -------------------------------------------------------------------------- */
/*                            EXPRESS- MİDDLEWARES                            */
/* -------------------------------------------------------------------------- */

const express =require('express')
const app=express()
require('dotenv').config()
const PORT= process.env.PORT || 8000;

/* -------------------------------------------------------------------------- */
//'Middleware functionu 3 parametre alabilir
//' son paramtre nextdir , req,res,next

// app.get ('/',(req,res,next)=>{
//     if(req.query.username== 'clarusway'){
//         //'req ve es ile veri gönderme (hepsinde ortak)
//         req.welcome='welcome'
//         res.username=req.query.username
//         next()
//     }else{
//         res.send({message: 'username is wrong'})
//     }
// })





// app.get('/', (req,res)=>{
//     res.send({
//     message: req?.welcome + '' + res?.username
//      } )
// })

app.get('/', (req,res,next)=>{
    res.send({
    message:' middleware-1'
     } )
})
app.get('/', (req,res,next)=>{
    res.send({
    message:' middleware-2'
     } )
})
app.get('/', (req,res,next)=>{
    res.send({
    message:' middleware-3'
     } )
})
app.get('/', (req,res,next)=>{
    res.send({
    message:' middleware-4'
     } )
})
app.get('/', (req,res,next)=>{
    res.send({
    message:' middleware-5'
     } )
})

/* -------------------------------------------------------------------------- */
app.listen(PORT,()=>console.log("Running: http://127.0.0.1:"+PORT))


