'use strict'

const router=require('express').Router()
// router.get('/', (req,res)=> {res.send({message : 'home'})})
// router.get('/about',(req,res)=> res.send({message: "About"}))
// router.get('/user/id', (req,res)=> res.send ({message: "user "}))

const {middleFunct1, middleFunct2}=require('../middlewares/')

router.use(middleFunct1,middleFunct2)

//' router.route()
// const express=require('express')
// router.route('/')
 
router.route('/')
.get((req,res)=> res.send({message:"get"}))
.post((req,res)=> res.send({message:"post"}))
.put((req,res)=> res.send({message:"put"}))
.delete((req,res)=> res.send({message:"delete"})) //! aralarındaki fark route methodu ile aynı urlye birden fazla öethod yollayabiliirim




module.exports=router //'taşınabilir hale getirdi