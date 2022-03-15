console.log('forra')
// ESTO PERTENECE AL LINK: SEGUNDA PARTE (EL PRIMER EJERCICIO ES IGUAL AL DE LA PRIMERA PARTE)
//  https://github.com/matiasbenary/bootcamp-frontend-Ada/blob/master/javascript/Ejercicios/07_Objetos/ej07.md#segunda-parte---objetos-dinamicos


// 01 - persona
// Declarar una variable con el nombre propiedadNombre y asignar el valor nombre
// Declarar una variable con el nombre propiedadEdad y asignar el valor edad
// Crear un objeto persona con las propiedades nombre y edad
// Asignar a las propiedades del objeto persona tu nombre y edad
// Mostrar en consola los valores de cada propiedad del objeto persona utilizando corchetes y los valores: 'nombre' y 'edad' en lugar de utilizar el punto
// Mostrar en consola los valores de cada propiedad del objeto persona utilizando las variables propiedadNombre y propiedadEdad

// let propiedadNombre = 'nombre' ;
// let propiedadEdad  = 'edad' ;
// const persona = {
//     nombre: 'tete',
//     edad: 33
// }
// console.log(persona);




//--------------------------------------------------------------------------------------

// 02 - keys
// Partiendo de un objeto guardado en la variable producto
// Mostrar en la consola el nombre de todas las propiedades que tiene el producto
// Utilizar el método keys
// const producto = {
//     id: 'ADA-020',
//     title: 'Gubergren sed est amet voluptua',
//     price: 123.75,
//     picture: 'https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg',
//     condition: 'nuevo',
//     free_shipping: true,
//     location: 'Capital Federal'
// };

// // // completá acá el código


// // OBJECT KEYS:// // OBJECT KEYS:// // OBJECT KEYS:// // OBJECT KEYS:
// // OBJECT KEYS:// // OBJECT KEYS:// // OBJECT KEYS:// // OBJECT KEYS:
// // OBJECT KEYS:// // OBJECT KEYS:// // OBJECT KEYS:// // OBJECT KEYS:


// // OBJECT KEYS:
// // para acceder al metodo keys: 
//     // devuelve un array [] con las propiedades del objeto
//     // perimero hay que acceder al objeto: entonces pongo: Object.keys(nombre del objeto)

// let todasLasPropiedadesUSANDOKEYS = Object.keys(producto); // deuelve las propiedades
// let todasLasPropiedadesUSANDOVALUES = Object.values(producto); // devuelve los valores
// let todasLasPropiedadesUSANDOENTRIES = Object.entries(producto); // devuelve como array multidimencional (un array con arrays adentro)

// console.log(todasLasPropiedadesUSANDOKEYS);
// console.log(todasLasPropiedadesUSANDOVALUES);
// console.log(todasLasPropiedadesUSANDOENTRIES);




// // resultado esperado
// // [ 'id',
// //   'title',
// //   'price',
// //   'picture',
// //   'condition',
// //   'free_shipping',
// //   'location' ]

//--------------------------------------------------------------------------

// 03 - Producto
// Partiendo de un objeto guardado en la variable producto
// Mostrar en la consola el nombre y valor de todas las propiedades que tiene el producto
// Utilizar el método keys
// El formato para mostrar la propiedad y valor es: "producto['[ACA NOMBRE DE LA PROPIEDAD]'] -> [ACA VALOR DE LA PROPIEDAD]"

// const producto = {
//   id: "ADA-020",
//   title: "Gubergren sed est amet voluptua",
//   price: 123.75,
//   picture: "https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg",
//   condition: "nuevo",
//   free_shipping: true,
//   location: "Capital Federal",
// };

// // completá acá el código

// const propiedadesProducto = Object.keys(producto) // esto me arma un array con las propiedades del objeto PRODUCTO en formato string
// //console.log(propiedadesProducto);// aca muestro las propiedades del objeto, no los valores
// for (const nombrePropiedad of Object(propiedadesProducto)) { // aca itero sobre las propiedades del objeto (sobe el objeto pero el que hemos creado con el object.kets, que en realidad es un array de strings) y muestro sus valores
//   console.log(producto[nombrePropiedad]) // este[nombrePropiedad] primero es is, luego es title, luego price...
// };


/////
// RESULTADO ESPERADO
// producto['id'] -> ADA-020
// producto['title'] -> Gubergren sed est amet voluptua
// producto['price'] -> 123.75
// producto['picture'] -> https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg
// producto['condition'] -> nuevo
// producto['free_shipping'] -> true
// producto['location'] -> Capital Federal



//----------------------------------------------------------------

// 04 - TengoEmail
// Partiendo de un objeto guardado en la variable user
// Verificar si tiene la propiedad email
// Si no la tiene, mostrar en pantalla: 'El usuario no tiene la propiedad email'
// Si la tiene, mostrar en pantalla: 'El usuario tiene la propiedad email'
// const user = {
//   username: "ada_lovelace",
//   password: "1234567890!",
// };

// // acá tu solucion
// const propiedadesUser = Object.keys(user)
//   if (propiedadesUser.includes("email")) {
//     console.log('El usuario no tiene la propiedad email')
//   } else {
//     console.log('El usuario tiene la propiedad email')
//   }

//------------------------------------------------

// 05 - hasProperty
// Completa el código dentro de la función hasProperty
// Si el objeto de la variable object tiene la propiedad que recibe en la variable property, retorna true
// Sino retorna false

// MI EXPLICACION:
// chekeo si el objeto que le paso como parametro tiene la propiedad que le paso como segundo parametro

// const hasProperty = (object, property) => {
//   // return true si el objeto (object) tiene la propiedad (property) que llega por parametro
//   // property es un string
//   // sino return false

//   // ESTA ES LA SOLUCION PERFECTA:
//   //me la explican asi: con los dos signos !! convierto cualquier dato en booleano:
//   // por ejemplo si el bjeto nocontiene esta propiedad me va a dar undefined, por ende la convierte en false...
//   return !!object[property];
// };

// // // tambien funciona si hacemos de esta otra manera, PORQUE NO SABEMOS USAR EL !!
// CON EL METODO HASOWNPROPERTY LE PASO LA PROPIEDAD COMO PARAMETRO Y AUTOMATICAMENTE ME DICE TRUE O FALSE
// const hasProperty = (object, property) => object.hasOwnProperty(property)



// // Y tambien funciona si hacemos de esta otra manera:
//con el if chekeo si el objeto tiene la property entre [] si me da undefines es porque no la tiene... por ende 
// const hasProperty = (object, property) => {
//   if (object[property] === undefined) {
//     return false
//   } else {
//     return true
//   }
// } 

// // y lo puedo achicar con un ternario:
// const hasProperty = (object, property) => {
//   return object[property] === undefined ?  false :   true
// }


//  METODO hasOwnProperty  METODO QUE RETORNA UN BOOLEANO QUE CHEKEA SI EL OBJETO TIENE TAL PROPIEDAD COMO PROPIA
//  METODO hasOwnProperty  METODO QUE RETORNA UN BOOLEANO QUE CHEKEA SI EL OBJETO TIENE TAL PROPIEDAD COMO PROPIA
//  METODO hasOwnProperty  METODO QUE RETORNA UN BOOLEANO QUE CHEKEA SI EL OBJETO TIENE TAL PROPIEDAD COMO PROPIA
//  METODO hasOwnProperty  METODO QUE RETORNA UN BOOLEANO QUE CHEKEA SI EL OBJETO TIENE TAL PROPIEDAD COMO PROPIA

// const user = {
//   username: "ada_lovelace",
//   password: "1234567890!",
// };

// const user2 = {
//   username: "grace_hopper",
//   password: "1234567890!",
//   email: "grace@hopper.com",
// };

// console.log(hasProperty(user, "email")); // false
// console.log(hasProperty(user, "password")); // true
// console.log(hasProperty(user, "id")); // false

// console.log(hasProperty(user2, "email")); // true
// console.log(hasProperty(user2, "password")); // true
// console.log(hasProperty(user2, "id")); // false


//------------------------------------------------------------------
