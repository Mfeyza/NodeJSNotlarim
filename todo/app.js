"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express"); //'EXPRESS FRAMEWORKUNU ÇAĞIRDIM
const app = express(); //'express frameworkunu çalışştırdım

require("dotenv").config(); //' envi okuyabilmek için
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept json data:
app.use(express.json()); //' exprese bildiriyorum json veri göndereceğimi , bu komut olmazsa data gönderemem
require("express-async-error"); //' async hataları da yakalar
// app.all("/", (req, res) => {
//   res.send("WELCOME TO TODO API");
// }); //'^tüm isteklere bunu yazacak
/* ------------------------------------------------------- */
//*squelize ı 2 şey için kullanırız 1- model oluşturmak 2- ORM mantığıyla haberleşmek
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite:./db.sqlite3");
//* squelize ile bir model oluşturma
//* her bir model veritabanında bir tabloya denk gelir
// sequelize.define("tableName", { modelDetails }); //'bizim için model oluşturan method define , 2 parametre alır

const Todo = sequelize.define("todos", {
  //' model adı Todo, tablo adı todos !!!!!!!!!!!
  //! ilk sutun olarak id sutunu squelize tarafından otomatik oluşturulur/yönetilir
  //? genelde kullanacağımız ilk 3 ü
  // id: {
  //     type: DataTypes.INTEGER,
  //     allowNull: false, //'defaultu true
  //     unique: true, //'defaultu: false
  //     comment: 'description',
  //     primaryKey: true, //'defaultu false
  //     autoIncrement:true, //' defaultu false
  //     field: 'custom_name'
  // }
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  description: DataTypes.TEXT,
  priority: {
    type: DataTypes.TINYINT,
    allowNull: false,
    default: 0,
  },
  isDone: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    default: false,
  },
});
//! senkorinizasyon
//! model bilgilerini DB ye uyarla
sequelize.sync(); //! değişiklikleri veritabanına aktaracak, crerate table işlemi yapar table varsa create etmez
sequelize.sync({ force: true }); //! force eklersem önce doop table sonra create table, günceller ,datalar siliniyor
sequelize.sync({ alter: true }); //! kopyasınıda alır datalar silinmez

//! database e bağlanmak için

sequelize
  .authenticate()
  .then(() => console.log("* DB Connected *"))
  .catch(() => console.log("* DB Not Connected *"));
/* ------------------------------------------------------- */
//* ROUTERS:
const router = express.Router();
router.get('/', async (req,res)=>{
    const data=await Todo.findAll()
    res.status(200).send({
        error:false,
        result:data
    })
})

/* -------------------------------------------------------------------------- */
/*                                  Read Todo                                 */
/* -------------------------------------------------------------------------- */
router.get('/:id', async (req,res)=>{
    // const data=await Todo.findOne({where:{id:req.params.id}})
    const data = await Todo.findByPk(req.params.id)

    res.status(200).send({
        error:false,
        result:data
    })
})

/* -------------------------------------------------------------------------- */
/*                                   CREATE                                   */
/* -------------------------------------------------------------------------- */
router.post("/", async (req, res) => {
//   console.log(req.body);
//   const receivedData = await Todo.create({
//     //! create yeni bir veri oluşturdu asyn olduğu için await ile yazdı , hangi veriyi create edeceksem obje olarak gönderirim
//     title: receivedData.title,
//     description: receivedData.description,
//     priority: receivedData.priority,
//     isDone: receivedData.isDone,
//   });
const data=await Todo.create(req.body)
  res.status(201).send({
    error: false,
    result: data.dataValues,
  });
});

app.use(router);

/* ------------------------------------------------------- */
const errorHandler = (err, req, res, next) => {
  const errorStatusCode = res.errorStatusCode ?? 500;
  console.log("errorHandler worked.");
  res.status(errorStatusCode).send({
    error: true, // special data
    message: err.message, // error string message
    cause: err.cause, // error option cause
    // stack: err.stack, // error details
  });
};
app.use(errorHandler);
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
