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

// class Vehicle {
// vehicleIsActive=false

// constructor(vehicleType){
//     this.vehicleType=vehicleType
// }
// }
// class Car extends Vehicle { //bu yaptığımız işleme ınharitance denir. bİr classın başka bir classın özelliklerini devralmasına denir.

//     isRunning = false

//     constructor (brand, model, year,vehicleType='car') {
//         // super(vehicleType) //' super miras aldığım class ı getirir
//         super("car") //buradaki super vehicle temsil eder. This dediğimiz zaman içinde bulunduğumuz obje aklımıza gelliyor, Super dediğimizde aklımıza miras aldığımız class gelecek
//         this.brand = brand  //? super() parametresi en tepede olmalı (Önce parent constructor çalıştırılmalı)
//         this.model = model
//         this.year = year
//     }

//     // constructor (brand, model, year) {
//     //     //? super() parametresi en tepede olmalı (Önce parent constructor çalıştırılmalı)
//     //     super('Car')
//     //     this.brand = brand
//     //     this.model = model
//     //     this.year = year
//     // }

//     runEngine() {
//         this.isRunning = true
//         console.log('Engine runned')
//         return this.isRunning
//     }
// }
// const Ford=new Car('Ford', 'Mustang',1967)
// console.log(Ford) //burda extend ile yaptık iki constructor çakıştı. Bne ikisini de çalıştırmalıyım.

// class Accessory extends Car {

//     constructor (accessoryName, brand, model, year, vehicleType) {
//         super(brand, model, year, vehicleType)
//         this.accessoryName = accessoryName
//     }
// }

// const FordClimate=new Accessory ('Bosh Climate','Ford', 'Mustang',1967,'Car')
// // const FordClimate = new Accessory('Bosh Climate', ...Object.values(Ford))

// console.log(FordClimate)

/* -------------------------------------------------------------------------- */
//? Polymorphism: Miras aldığımız sınıfın özellik/methodlarını yeniden yazabilme.
//? - Override: Üst metodla aynı isim ve yapıda yeni bir metod yazma. (ezme / iptal etme / önceliğini alma)
//? - Overload: Üst metodla aynı isimde ama farklı yapıda (farklı adet/tip) yeni method oluşturma. (aynı anda ikisi de aktif) (JS desteklemez)

// class Vehicle {
//   vehicleIsActive = false;

//   constructor(vehicleType) {
//     this.vehicleType = vehicleType;
//   }
//   getDetails() {
//     console.log("Vehicle.getDetails runned.");
//     return this.vehicleType;
//   }
// }
// class Car extends Vehicle {
//   isRunning = false;

//   constructor(brand, model, year, vehicleType = "car") {
//     super(vehicleType);
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }

//   runEngine() {
//     this.isRunning = true;
//     console.log("Engine runned");
//     return this.isRunning;
//   }
//   //? Override: Üsteki method ismi ile aynen/yeniden tanımlanması.
//   //? Override: Parent classdaki method ezildi. Artık bu geçerli.
//   getDetails() {
//     console.log("Car.getDetails runned.");
//     // return this;
//     return super.getDetails(); //! ezdiğimiz methodu çalıştırma yöntemi
//   }
// }
// const Ford = new Car("Ford", "Mustang", 1967);
// console.log(Ford.getDetails());

//*Overload:
    //? Overload: Üstteki methodun aynı isim ama farklı parametre adet/tip ile yeniden tanımlanması.
    //? JS Desteklemez. TypeSctrip destekler.
    //? Çalışma prensibi: Çağrıldığı zaman parametreye göre ilgili method çalışır.
// getDetails(parametre1,parametre2){
//     return this
// }


/* ------------------------------------------------------- */
//* Access Modifiers:
//* - PUBLIC: Genel erişime açık. (Parent: Yes, Child: Yes, Instance: Yes)
//* - PROTECTED: Sadece tanımlı olduğu class ve Inherit edilen child-class erişebilir. (Parent: Yes, Child: Yes, Instance: No) (JS Desteklemez.)
//* - PRIVATE: Sadece tanımlı olduğu class içinde erişim var. (Parent: Yes, Child: No, Instance: No)

class Vehicle {
    vehicleIsActive = false; //'Public Property klasik tanımladığımız değişkenler, heryerden erişeniliriz
    #privateProperty ='private-value' //' private yaptığım bir property veya model içinde tanımladığım class üzerinden erişebilir onblur. Diğer türlü undefined döner
    #privateMethod() { return this } // PRIVATE METHOD
    
    _protectedProperty = 'protected-value' // PROTECTED PROPERTY
    _protectedMethod() { return this } // PROTECTED METHOD
    
    constructor(vehicleType) {
      this.vehicleType = vehicleType;
    }
    getDetails() {
      console.log("Vehicle.getDetails runned.");
      return this.vehicleType;
    }
  }
  class Car extends Vehicle {
    isRunning = false;
  
    constructor(brand, model, year, vehicleType = "car") {
      super(vehicleType);
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  
    runEngine() {
      this.isRunning = true;
      console.log("Engine runned");
      return this.isRunning;
    }

    getDetails() {
      console.log("Car.getDetails runned.");
      // return this;
      return super.getDetails(); 
    }
  }
  const Ford = new Car("Ford", "Mustang", 1967);
  console.log(Ford);
  