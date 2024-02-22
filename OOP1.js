"use strict"; //! daha katı kurallar :)
// a=5
// a=6
// console.log(a)

/* -------------------------------------------------------------------------- */
/*                                   OBJECTS                                  */
/* -------------------------------------------------------------------------- */

//! direkt obje tanımlamada PascalCase veye camelCase kullanabilirsin.
const exampleObject={
   propertyName: "value", //* attirubute, field
   methodName: function() {   //* bir obje içinde ya da class içindeki fonksiyona method denir.
   return  "this is method" 
   },
   methodNameAlternative() {  
    return  "this is method" 
   } 
}
console.log(exampleObject.propertyName) //* . ile çağırıyor oraya gidiyoruz
console.log(exampleObject.methodName)

/* -------------------------------------------------------------------------- *

const Car = {
    brand: 'Ford',
    model: 'Mustang',
    year:'1967',
    isAutoGear: true,
    colors: ['white', 'red'],
    details: {
        color1:'white',
        color2:'red',
        engineSize: 4900
    },
    startEngine: function(param1){
        console.log(param1)
        return 'Engine runned'
    }
} //* nested obje tanımladım , method ekledim.

console.log(Car.brand)
console.log(Car.colors[1])
console.log(Car.details)
console.log(Car.details.color1)
console.log(Car.startEngine("value"))
//* Alternatve style
console.log((Car ['brand']))
console.log((Car["colors"][0]))
console.log(Car ["startEngine"](0))

/* -------------------------------------------------------------------------- */

//' THIS KEYWORD

const Car = {
    brand: 'Ford',
    model: 'Mustang',
    year:'1967',
    isAutoGear: true,
    colors: ['white', 'red'],
    details: {
        color1:'white',
        color2:'red',
        engineSize: 4900
    },
    startEngine: function(param1){
        console.log(param1)
        return 'Engine runned'
    },
    getDetails:function(){
        // return this
        // return this.brand + "" + this.model + "" + this.year
        return this.startEngine("selam") //' this ile içinde bulunduğum objenin diğer elemanlarına erişebiliyorum
    },
    arrowMedhod: ()=>{
        return this //! Arrow function global scopetur this keywordu burada çalışmaz. Tarayıcılarda windows döndürür ama burada boş obje getirir. 
        //' bir class içinde arrowfunction kullanmak mantıklı değildir.

    }
}
console.log(Car.getDetails())
console.log(Car.arrowMedhod()) 


/* -------------------------------------------------------------------------- */
/*                             ARRAY DESTRUCTURING                            */
/* -------------------------------------------------------------------------- */

const testArray =['value0', 'value1','value2', 'value3','value4']
// const var0= testArray[0]
// const var1=testArray[1]
// const var9=testArray.slice(3,5)
// console.log(var9)

//' Arraylerde dest yaparken sıralama önemlidir
const [var0,var1,var2,...var9]= testArray //!... bununla kalanları var9 a eşitle demek isteriz
console.log(var0,var1,var2,var9) //! kalanları array şeklinde almış rest operatörü toplayıcı davranmış
//' REST OPERATÖRÜ EN SONDA OLMAK ZORUNDA


/* -------------------------------------------------------------------------- */
/*                              SPREAD OPERATÖRÜ                              */
/* -------------------------------------------------------------------------- */

// const newArray=testArray + ['value5','value5']
const newArray=[...testArray, 'value6', 'value7']

console.log(newArray)

/* -------------------------------------------------------------------------- */
/*                            OBJECT DESTRICTURING                            */
/* -------------------------------------------------------------------------- */

const Car2 = {
    brand: 'Ford',
    model: 'Mustang',
    year:'1967',
    isAutoGear: true,
    colors: ['white', 'red'],
    details: {
        color1:'white',
        color2:'red',
        engineSize: 4900
    },
    startEngine: function(param1){
        console.log(param1)
        return 'Engine runned'
    }
}
//' REST OPERATORU (SIRALAMA DEĞİL KEY İSİMLERİ ÖNEMLİ OBJELERDE)
// const {year,model,brand, ...others}=Car2
// console.log(year,model,brand, others)

//! isim değiştirmek istersem
const {year,model: newName,brand, ...others}=Car2
console.log(year,newName,brand, others)
console.log(Car2.model)
Car2.model="cherry" //! isim değiştirebiliriz
console.log(Car2.model) 

//' SPREAD OPERATORU OBJELERDE
const newObj={
    ...Car2,
    newKey:'new-value'
}
console.log(newObj)

//* RESTAPI=JSONAPI

//? Object to JSON
const json=JSON.stringify(Car2)
console.log(typeof json,json)
//? JSON to Object
const obj=JSON.parse(json)
console.log(typeof obj,obj)

//!OBJECT TO ARRAY
//keys
const arrKey=Object.keys(Car2)
console.log(arrKey)
//value
const arrValue=Object.values(Car)
console.log(arrValue)
//!Hem key hem value

const arrAll=Object.entries(Car)
console.log(arrAll)

/* -------------------------------------------------------------------------- */
/*                                CONSTRUCTORS                                */
/* -------------------------------------------------------------------------- */

//' OBJEYİ İLK TÜRETEN FONSKİYONLARA DENİR.
const constructorFunction= function(){ //! this kullandığın an constructor fonk olur
    this.property='value'
}

//* 'NEW' KEYWORD
const carConstructor=function(brand,model,year){ //sana bir takım parametreler göndereceğim sen benim gönderdiğim parametreler ile bana bir obje döndür.
    this.brand=brand
    this.model=model
    this.year=year

    this.startEngine=function(){
       return'Engine runned'
    }}
const newCar=new carConstructor('Ford', 'Mustang', 1967)
console.log(typeof newCar,newCar)
console.log(newCar.brand)
console.log(newCar.startEngine())

const newCar2=new carConstructor('Mersedes', 'CLK200', 1967)
console.log(typeof newCar,newCar)
console.log(newCar2.brand)
console.log(newCar2.startEngine())