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

const Car = 
