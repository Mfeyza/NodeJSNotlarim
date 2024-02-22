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

/* -------------------------------------------------------------------------- */

const Car = {
    brand: 'Ford',
    model: 'Mustang',
    year:'1967',
    isAutoGear: true,
    color: ['white', 'red'],
    details: {
        color1:'white',
        color2:'red',
        engineSize: 4900
    },
    startEngine: function(){
        return 'Engine runned'
    }
}
