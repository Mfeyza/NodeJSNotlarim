"use strict";

const express = require("express");
const app = express();
const port = process.env?.PORT || 3000;

// app.get('/', (req, res) => res.send({"message": "post method called"}))
// app.put('/', (req, res) => res.send({"message": "post method called"}))
// app.delete('/', (req, res) => res.send({"message": "post method called"}))
// app.all('/', (req, res) => res.send({"message": "post method called"}))

app.get("/drive1/drive2/", (req, res) =>
  res.send({
    message: "get method called1",
  })
);

//'joker characters
// app.get('/', (req,res)=> res.send({"message": "get method called1"}))
app.get("/ab(c)?12", (req, res) =>
  res.send({
    message: "get method called1",
  })
);
//! regex
//? iki / arasında regex kabul edilir. BURAYA BAK

//! url parametres
// app.get("/:userId[0-9]", (req, res) => {
//   res.send({
//     params: req.params,
//     blogId: req.params.blogId,
//     url: {
//       protocol: req.protocol,
//       domain: req.hostname,
//       method: req.method,
//       headers:req.headers,
//       path:req.path,
//       url:req.url,
//       body:req.body,
//       query:req.query
//     },
//   });
// }); //* başlangıç ne olursa olsun

app.get('/',(req,res)=>{
    res.status(200).send({
        message:"tebrikler üye oldunuz"
    })
})
app.delete('/',(req,res)=>{
    res.status(204).send({
        message:"delete"
    })
})

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
