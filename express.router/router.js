'use strict'
 
/* -------------------------------------------------------------------------- */
/*                              EXPRESS - ROUTING                             */
/* -------------------------------------------------------------------------- */

const express = require('express')
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 8000;

//expreste url kontrolü için özel bir router app i oluşturduk
//' EXPRESS.ROUTER()
// const router=express.Router()
// // router.get('/', (req,res)=> {res.send({message : 'home'})})
// // router.get('/about',(req,res)=> res.send({message: "About"}))
// // router.get('/user/id', (req,res)=> res.send ({message: "user "}))


// //' router.route()
// router.route('/')
// .get((req,res)=> res.send({message:"get"}))
// .post((req,res)=> res.send({message:"post"}))
// .put((req,res)=> res.send({message:"put"}))
// .delete((req,res)=> res.send({message:"delete"})) //! aralarındaki fark route methodu ile aynı urlye birden fazla öethod yollayabiliirim

const router=require('./routes/')
// app.use(router)
app.use(require('./routes/'))
// app.use(router)//! herhangi bir şeyi applicationa dahil etme komutu
app.listen(PORT,()=> console.log('running : http://127.0.0.1:'+ PORT));
