"use strict";

//! NODEJS SERVER
require("dotenv").config(); 
const PORT = process.env?.PORT || 8000;
const HOST = process.env?.HOST || "127.0.0.1";
console.log("hello word");
const http = require("http");//'server için gerekli modulu çağırdık
// http.createServer((param1,param2)=>{ //* 1. parametre her zaman için request 2. parametre ise response dur.

// })
// http.createServer((req,res)=>{
// res.end('<h1>hello world </h1>')
// }).listen(8000,()=>console.log(`server run: http://${HOST}:${PORT}`))
// .listen(8000,()=>console.log("server run: http://localhost:8000"))

const app = http.createServer((req, res) => {
  // console.log(req) //'req detaylarını getirdi
  // console.log("*********************")
  // console.log(req.method); //' method geldi
  // console.log("***********************")
  // console.log(req.url);

  // end points home : /, list:/list, test : /test

  if (req.url == "/") {
    if (req.method == "GET") {
      res.write("this");
      res.write("is");
      res.write("home");
      res.write("page");
      res.end();
    } else if (req.method == "POST") {
    res.statusCode=400 //*default 200
    res.statusMessage="dont post"
    res.end(" can not use this mothod p");
    }
    else if (req.method == "DELETE") {
    res.writeHead(405,"dont delete",{
"content-Type":"text-html",
"another-header" : "another content"
})
    res.end("can not use this method d");
}
    else res.end("cant not use this method all");
  } else if (req.url == "/list") {
    const obj={
      "error":false,
      "message":"this is list page",
      "deneme":"deneme",

    }
    res.end(JSON.stringify(obj));
  } else if (req.url == "/test") {
    res.end("<h1> test page </h1>");
  }
});
app.listen(8000, () => console.log(`server run: http://${HOST}:${PORT}`));
