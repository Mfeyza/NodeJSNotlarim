
'use strict'
/* -------------------------------------------------------------------------- */
/*                            EXPRESSJS-MİDDLEWARES                           */
/* -------------------------------------------------------------------------- */


// const middleFunct1 =(req,res,next)=>{ //'fonksiyonları başta module ecport diyerek de gönderebiliriz
//     req.message1='middleFunct1 started'
    
//     next()
// }
// const middleFunct2=(req,res,next)=>{
//     req.message2='middleFunct2'
//     next()
// }
// // module.exports = [middleFunct1, middleFunct2]
// module.exports = {middleFunct1, middleFunct2}

module.exports={


 middleFunct1 :(req,res,next)=>{ //'fonksiyonları başta module ecport diyerek de gönderebiliriz
    req.message1='middleFunct1 started'
    console.log('middleFunct1 start')
    next()
},

 middleFunct2:(req,res,next)=>{
    req.message2='middleFunct2'
    console.log('middleFunct2 start')
    next()
}
}
