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

// app.get('/', (req,res,next)=>{
    
//     req.message1=' middleware-1'
//     next()
     
    
// })
// app.get('/', (req,res,next)=>{
//     req.message2=' middleware-2'
//      next()
// })
// app.get('/', (req,res,next)=>{
//     req.message3=' middleware-3'
//      next()
// })
// app.get('/', (req,res,next)=>{
//     req.message4=' middleware-4'
//      next()
// })

// app.get('/',(req,res)=>{
//     res.send({
//         message1:req.message1,
//         message2:req.message2,
//         message3:req.message3,
//         message4:req.message4,
//         message:'finished'

//     })
// })
/* -------------------------------------------------------------------------- */
// const middleFunct1 =(req,res,next)=>{
//     req.message1='middleFunct1 started'
//     // next('route') //' bi sonraki route a geçmeyi sağlar
//     next()
// }
// const middleFunct2=(req,res,next)=>{
//     req.message2='middleFunct2'
//     next()
// }
// app.use(middleFunct1,middleFunct2) //' virgülle ekleyerek çalıştırabilirim
// app.use(middleFunct1)
// app.use(middleFunct2) //' 2 tane app use kullanabilirim
// app.use([middleFunct1,middleFunct2]) //' bir array içinde tek bir parametre olarak da gönderebilirim /tüm pathler

//*URL ile kullanımı 
// app.use('/abc', middleFunct1) //'sadece abc pathi
// app.get('/abc', middleFunct1)  //' sadece get methodunda çalışır

// app.all('/*',(req,res)=>{
//     res.send({
//         message1:req.message1,
//         message2:req.message2,
//         message:'finished'

//     })
// })

// app.get('/*',middleFunct1,middleFunct2,(req,res)=>{ //'fonksiyonları böyle de çağırablirim
//     res.send({
//         message1:req.message1,
//         message2:req.message2,
//         message:'finished'

//     })
// })
// app.get('/',(req,res)=>{ //'fonksiyonları böyle de çağırablirim
//     res.send({
//         message:'next route',
       

//     })
// })

const {middleFunct1,middleFunct2}=require('./middlewares/')

app.use(middleFunct1,middleFunct2)

// const middleFuncs=require('./middlewares/')

app.get('/*',(req,res)=>{ //'fonksiyonları böyle de çağırablirim
    res.send({
        message1:req.message1,
        message2:req.message2,
        message:'finished'

    })
})

/* -------------------------------------------------------------------------- */
app.listen(PORT,()=>console.log("Running: http://127.0.0.1:"+PORT))


