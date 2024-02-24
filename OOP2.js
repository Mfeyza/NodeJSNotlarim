"use strict";

/* -------------------------------------------------------------------------- */
/*                                OOP & CLASSES                                */
/* -------------------------------------------------------------------------- */
//? OOP: Object Oriented Programming Nesne yönelimli programlama- yazılımı nesneye benzetme.
//? DRY: Don't Repeat Yourself
//? BLUEPRINT: Taslak (Mimarların kullandığı mavi şablon kağıdı)
//? CLASS: Obje türetmek için kullanılacak şablon.

/* -------------------------------------------------------------------------- */
/*                              CLASS DECLARATİON                             */
/* -------------------------------------------------------------------------- */

//'Class isimleri PascalCase olur yani her kelimenin ilk harfi büyük

// class PascalCaseClassName {...}

/* -------------------------------------------------------------------------- */
/*                              CLASS EXPERESSİON                             */
/* -------------------------------------------------------------------------- */
// const PascalClassName = class {
//   undefinedProperty; //bir clasın içinde bir değişken property attribute bir değer verilmeden de tanımlama yapılabilir tabi değeri undefined olur
//   properyName = "value"; // bir objenin ya da classın içindeki isme property deinr alternatif isimler attribute,field ,class da : değil =
//   constructor(parametre1, parametre2 = "default-value") {
//     //*new class ile obje oluştururken parametre göndermek içim "constructor" isminde bir metot kullanılır.
//     this.parametre1 = parametre1;
//     this.parametre2 = parametre2;
//   }
//   methodName1() {
//     return this;
//   }
// };

/* -------------------------------------------------------------------------- */
/*                                  INSTANCE                                  */
/* -------------------------------------------------------------------------- */
// //* Bir clastan üretilen objedir

// const PascalCaseInstanceName = new PascalClassName(0, 1);
// console.log(PascalCaseInstanceName);
// console.log(PascalCaseInstanceName.parametre1);
// console.log(PascalCaseInstanceName.methodName1());

// /* -------------------------------------------------------------------------- */
// class Car {

//     isRunning = false

//     constructor (brand, model, year) { //CONSTRUCTOR PEK KALABALIK OLMAZ YUKARDA VEİRLİR GENLDE 
//         this.brand = brand
//         this.model = model
//         this.year = year
//     }

//     runEngine() {
//         this.isRunning = true //'scope dışı olduğu için this ile değiştirdik this diyerek her türlü  değiştiririz ÖNEMLİ
//         console.log('Engine runned')
//         return this.isRunning
//     }
// }

// const Ford = new Car('Ford', 'Mustang', 1967)
// console.log(Ford)
// Ford.isRunning = true
// console.log(Ford)
// Ford.runEngine() //runEngine property değşldir o yüzden consolda kullandığımızda görünmüyor
// console.log(Ford)

// const Mersedes=new Car('Mersedes', 'CLK200', 2010)
// const Hundai=new Car('Hundai', 'i20', 2012)
// console.log(Hundai)

//'İNSTANCE DE YAPTIĞINIZ BİR DEĞİŞİKLİK ORİJİNAL CLASS I ETKİLEMEZ
//' BİR INSTANCE DİĞER INSTANCE Yİ ETLİKEMEZ

/* -------------------------------------------------------------------------- */
/*                                 İNHARITANCE                                */
/* -------------------------------------------------------------------------- */
//? Inharitance miras almak demektir. Başka bir class ın tüm özelliklerimi metodlarını devralme (parent child ilişkisi kurulur)

class Vehicle {
vehicleIsActive=false

constructor(vehicleType){
    this.vehicleType=vehicleType
}
}
class Car extends Vehicle { //bu yaptığımız işleme ınharitance denir. bİr classın başka bir classın özelliklerini devralmasına denir.

    isRunning = false

    constructor (brand, model, year,vehicleType='car') { 
        // super(vehicleType) //' super miras aldığım class ı getirir
        super('car') //buradaki super vehicle ifade eder. This dediğimiz zaman içinde bulunduğumuz obje aklımıza gelliyor, Super dediğimizde aklımıza miras aldığımız class gelecek
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine() {
        this.isRunning = true 
        console.log('Engine runned')
        return this.isRunning
    }
}
const Ford=new Car('Ford', 'Mustang',1967)
console.log(Ford) //burda extend ile yaptık iki constructor çakıştı. Bne ikisini de çalıştırmalıyım. 
