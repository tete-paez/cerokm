

// PRACTICA FOR IN  Vs. FOR OF
// es un objeto, y con el for in veo sus propiedades
var diasMes = {
    enero: 31,
    febrero: 28,
    marzo: 31,
    abril: 30,
    mayo: 31
}


for (var mes in diasMes){
    console.log(mes);
}
// alert(diasMes["mayo"]); // me va a tirar el valor de mayo:31 

// del mismo modo podemos ver el valor de todas las propiedades asi:
for (var mes in diasMes){
    console.log(diasMes[mes]);
}

for (var mes in diasMes){
    console.log("El mes " + mes + " tiene " + diasMes[mes] + " dias.");
}
// ME DEVUELVE:
// El mes enero tiene 31 dias.
// El mes febrero tiene 28 dias.
// El mes marzo tiene 31 dias. 
// El mes abril tiene 30 dias.
// El mes mayo tiene 31 dias.



// // PRACTICA FOR IN Vs. FOR OF
// // es un array y con el for of veo el contenido de ese array
// var diasMes = [
//     " enero: 31",
//     " febrero: 28",
//     " marzo: 31",
//     "abril: 30",
//     "mayo: 31"
// ]

// for (var mes of diasMes){
//     console.log(mes);
// }
const usuarios = {
    "Miguel Angel Alvarez": {
        "isFav": true
    },
    "DesarrolloWeb.com": {
        "isFav": false
    },
    "EscuelaIT": {
        "isFav": true
    }
}
for (const propUsuario in usuarios) {
    //aca conozco las propiedades
    console.log(propUsuario)
    // aca conozco el valor de las propiedades
    console.log(usuarios[propUsuario])

}
for(var usuario in usuarios) {
    if(usuarios[usuario].isFav) {
      console.log('El usuario con índice (usamos su nombre como índice) ' + usuario + ' es uno de tus favoritos');
    }
  }


// const arr = [3, 5, 7];
// arr.foo = 'hola';
// // FOR IN EN ARRAYS DEVUELVE EL INDICE
// for (let i in arr) {
//    console.log(i); // logs "0", "1", "2", "foo"
// }
// // FOR IOF EN ARRAYS DEVUELVE EL VALOR DE CADA POSICION 
// for (let i of arr) {
//    console.log(i); // logs 3, 5, 7
// }