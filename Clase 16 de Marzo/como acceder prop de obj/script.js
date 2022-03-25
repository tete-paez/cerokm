// const tamika = {
//     edad: 17,
//     familiar: "Gato",
//     casa: "Gryffindor",
//     nombreCompleto: {
//         nombre: "Tamika",
//         apellido: "Shannon",
//     },
//     hechizoPreferido: "Lumos",
//     materias: [{
//             nombre: "Astronomía",
//             promedio: 10,
//         },
//         {
//             nombre: "Encantamientos",
//             promedio: 1,
//         },
//         {
//             nombre: "Defensa Contra las Artes Oscuras",
//             promedio: 0,
//         },
//         {
//             nombre: "Vuelo",
//             promedio: 2,
//         },
//         {
//             nombre: "Herbología",
//             promedio: 8,
//         },
//         {
//             nombre: "Historia de la Magia",
//             promedio: 0,
//         },
//         {
//             nombre: "Pociones",
//             promedio: 7,
//         },
//         {
//             nombre: "Transformaciones",
//             promedio: 0,
//         },
//     ],
//     amigues: [{
//             nombre: "Guerra Valenzuela",
//             edad: 20,
//             casa: "Hufflepuff",
//             hechizoPreferido: "Lumos",
//             familiar: "Rata",
//         },
//         {
//             nombre: "Kara Hall",
//             edad: 12,
//             casa: "Slytherin",
//             hechizoPreferido: "Accio",
//             familiar: "Rata",
//         },
//         {
//             nombre: "Bell Rivers",
//             edad: 12,
//             casa: "Ravenclaw",
//             hechizoPreferido: "Expecto Patronum",
//             familiar: "Salamandra",
//         },
//         {
//             nombre: "Helene Conrad",
//             edad: 15,
//             casa: "Ravenclaw",
//             hechizoPreferido: "Wingardium Leviosa",
//             familiar: "Sapo",
//         },
//         {
//             nombre: "Francis Newman",
//             edad: 18,
//             casa: "Slytherin",
//             hechizoPreferido: "Wingardium Leviosa",
//             familiar: "Salamandra",
//         },
//         {
//             nombre: "Faye Norton",
//             edad: 12,
//             casa: "Slytherin",
//             hechizoPreferido: "Accio",
//             familiar: "Sapo",
//         },
//         {
//             nombre: "Winters Guzman",
//             edad: 15,
//             casa: "Ravenclaw",
//             hechizoPreferido: "Wingardium Leviosa",
//             familiar: "Gato",
//         },
//     ],
// }



// // tamika es un OBJETO

// // para acceder a la propiedad EDAD 
// // si accedo con el PUNTO directamente le paso el nombre de la propiedad;
// console.log(tamika.edad); // esto me devuelve por consola :17
// // si accedo en formato CORCHETE[] tengo que pasarla en string "con comillas";
// console.log(tamika["edad"]); // esto TAMBIEN me devuelve por consola :17
// // Y LO PONGO ENTRE COMILLAS AL STRING PORQUE LO ESTOY HARDCODEANDO
// // ambas notaciones sirven para cosas diferentes:

// // si quiero mostrar cada una de las propiedades de tamika:

// for (const prop in tamika) {
//     console.log(prop)
// }
// // esto me devuelve por consola : LA LISTA DE LOS NOMBRES DE LAS PROPIEDADES DE TAMIKA, NO LOS VALORES

// // si quiero que me devuelva los valores:
// for (const prop in tamika) {
//     //aca este const prop (arriba) me esta devolviendo un string de los nombres de las propiedades
//     // ENTONCES EN EL console.LOG:
//     // pasar el nombre de la variable tamika y tengo que usar notacion [ ] y pasarle el string que USE ARRIBA DENOTANDO LAS PROPIEDADES
//     console.log(tamika) // devuelve los nombres de las props (indices) 
//     console.log(tamika[prop]) // esto devuelve los valores de forma dinamica
// };
// // QUE ES LO QUE HACE EL FOR ENTONCES??
// // en la primer vuelta le pasa la primer PROP: EDAD
// // en la segunda vuelta le va a pasar la segunda PROP: FAMILIAR...
// // Y ASI .... 



// // DATO: EJEMPLO:

// const numeros = [1, 5, 12, 8, 6, 3];

// // EL FOR OF:
// // va en ARRAYS
// // NO VA EN OBJETOS porque no es etarable , no tiene elementos que recorrer sino propiedades
// for (const numero of numeros) {
//     console.log(numero)
// } //ESTO DA UNDEFINED




// // esto me devuelve por consola : 0-1-2-3-4-5
// // por que?? porque me devuelve los indices de cada elemento de ese array


// AHORA VAMOS A HABLAR DE UN ARRAY DE OBJETOS
// AHORA VAMOS A HABLAR DE UN ARRAY DE OBJETOS
// AHORA VAMOS A HABLAR DE UN ARRAY DE OBJETOS
// AHORA VAMOS A HABLAR DE UN ARRAY DE OBJETOS


const estudiantes = [{
        edad: 17,
        familiar: "Salamandra",
        casa: "Hufflepuff",
        nombreCompleto: {
            nombre: "Ellis",
            apellido: "Reeves",
        },
        hechizoPreferido: "Expecto Patronum",
        materias: [{
                nombre: "Astronomía",
                promedio: 1,
            },
            {
                nombre: "Encantamientos",
                promedio: 6,
            },
            {
                nombre: "Defensa Contra las Artes Oscuras",
                promedio: 2,
            },
            {
                nombre: "Vuelo",
                promedio: 0,
            },
            {
                nombre: "Herbología",
                promedio: 2,
            },
            {
                nombre: "Historia de la Magia",
                promedio: 2,
            },
            {
                nombre: "Pociones",
                promedio: 8,
            },
            {
                nombre: "Transformaciones",
                promedio: 1,
            },
        ],
        amigues: [{
                nombre: "Richard Bean",
                edad: 21,
                casa: "Gryffindor",
                hechizoPreferido: "Expelliarmus",
                familiar: "Lechuza",
            },
            {
                nombre: "Sosa Martinez",
                edad: 19,
                casa: "Gryffindor",
                hechizoPreferido: "Petrificus Totalus",
                familiar: "Salamandra",
            },
            {
                nombre: "Kirk Joyner",
                edad: 15,
                casa: "Hufflepuff",
                hechizoPreferido: "Petrificus Totalus",
                familiar: "Rata",
            },
            {
                nombre: "Rodriquez Carey",
                edad: 13,
                casa: "Slytherin",
                hechizoPreferido: "Accio",
                familiar: "Salamandra",
            },
            {
                nombre: "Leslie Humphrey",
                edad: 19,
                casa: "Ravenclaw",
                hechizoPreferido: "Lumos",
                familiar: "Lechuza",
            },
            {
                nombre: "Ollie Merrill",
                edad: 12,
                casa: "Ravenclaw",
                hechizoPreferido: "Wingardium Leviosa",
                familiar: "Gato",
            },
            {
                nombre: "Vicky Boyd",
                edad: 16,
                casa: "Hufflepuff",
                hechizoPreferido: "Lumos",
                familiar: "Rata",
            },
            {
                nombre: "Edwards Mann",
                edad: 13,
                casa: "Hufflepuff",
                hechizoPreferido: "Expecto Patronum",
                familiar: "Sapo",
            },
        ],
    },
    {
        edad: 15,
        familiar: "Salamandra",
        casa: "Gryffindor",
        nombreCompleto: {
            nombre: "Neal",
            apellido: "Spence",
        },
        hechizoPreferido: "Lumos",
        materias: [{
                nombre: "Astronomía",
                promedio: 0,
            },
            {
                nombre: "Encantamientos",
                promedio: 8,
            },
            {
                nombre: "Defensa Contra las Artes Oscuras",
                promedio: 6,
            },
            {
                nombre: "Vuelo",
                promedio: 7,
            },
            {
                nombre: "Herbología",
                promedio: 1,
            },
            {
                nombre: "Historia de la Magia",
                promedio: 3,
            },
            {
                nombre: "Pociones",
                promedio: 10,
            },
            {
                nombre: "Transformaciones",
                promedio: 5,
            },
        ],
        amigues: [{
                nombre: "Morgan Wilson",
                edad: 13,
                casa: "Hufflepuff",
                hechizoPreferido: "Expelliarmus",
                familiar: "Rata",
            },
            {
                nombre: "Traci Arnold",
                edad: 19,
                casa: "Ravenclaw",
                hechizoPreferido: "Expelliarmus",
                familiar: "Sapo",
            },
            {
                nombre: "Pennington Rodriguez",
                edad: 17,
                casa: "Slytherin",
                hechizoPreferido: "Expecto Patronum",
                familiar: "Sapo",
            },
            {
                nombre: "Carrillo Hyde",
                edad: 15,
                casa: "Hufflepuff",
                hechizoPreferido: "Expelliarmus",
                familiar: "Rata",
            },
            {
                nombre: "Norton Foreman",
                edad: 14,
                casa: "Slytherin",
                hechizoPreferido: "Petrificus Totalus",
                familiar: "Sapo",
            },
            {
                nombre: "Addie Roach",
                edad: 21,
                casa: "Hufflepuff",
                hechizoPreferido: "Petrificus Totalus",
                familiar: "Lechuza",
            },
        ],
    },
]

// // recorro la constante estudiantes:
// for (const estudiante of estudiantes) {
//     console.log(estudiante)
// }
// // ENTRO A UNA DE SUS PROPIEDADES MEDIANTE EL PUNTO .
// for (const estudiante of estudiantes) {
//     console.log(estudiante.familiar)
// }

// // si quiero entrar a MAS DE UNA PROPIEDAD:
// // TEMBIEN PUEDO HACER UN "DESTRUCTURING" DE LAS PROPIEDADES QUE QUIERO:
// // se hace asi: abro llaves:{aca meto la/las propiedades que quiero}y lo igualo al objeto que seria = estudiantes:
// // por ejemplo:
// for (const estudiante of estudiantes) {
//     //hago el destructuring:
//     const {familiar, nombreCompleto, materias} = estudiante // pongo estudiante porque quiero el de CADA UNO de ellos
//     console.log(familiar);
//     console.log(nombreCompleto);
//     console.log(materias);
// }

// // TAMBIEN PUEDO HACER EL DESTRUCTURING ASI: QIE SERIA LOMISMO QUE ACA ARRIBA PERO MAS CORTO:

// for (const {familiar, nombreCompleto, materias} of estudiantes) {
//     console.log(familiar);
//     console.log(nombreCompleto);
//     console.log(materias);
// }

// // yo se que el objeto nombreCompleto es un ibjeto son dos propiedades: nombre y apellido:
// // si quiero acceder a uno de ellos: hago el destructuring de nombre completo:

// for (const { nombreCompleto : {nombre}} of estudiantes) {
//     console.log(nombre);
// }

// ARRAY DE OBJETOS : MATERIA
// ARRAY DE OBJETOS : MATERIA
// ARRAY DE OBJETOS : MATERIA
// ARRAY DE OBJETOS : MATERIA

// hago destructuring en el for: que seria luego lo mismo que poner estudiantes.materias:

// for (const {materias} of estudiantes) {
//     console.log(materias);
// }

// si necesito recorrer las materias que es un array de objetos: hago lo mismo que aca arriba pero:
// for (const {materias} of estudiantes) {
//     // tengo que hacer otro bucle: ya entre a materias pero necesito las propiedades de materias:
//     for ( const {nombre, promedio} of materias){
//         console.log(nombre, promedio)
//     }
// }

// EN RESUMEN PARA ENTRAR A LAS PROPIEDADES :
// HACEMOS FOR OF, Y FOR OF HASTA LLEGAR A DONDE TENEMOS QUE LLEGAR



// EJERCICIO MATIAS:
// TENGOS DOS ARRAYS Y CON ESO QUIERO CREAR UN NUEVO OBJETO USANDO LOS DATOS DE CADA OBJETO DE FORMA DINAMICA

// const propiedades = ["nombre", "edad"]
// const usuarios = ["pilar", 25]

// creo EL NUEVO OBJETO:
const user = []


// hacemos for in : porque devuelve los indices y justo son dos array con lis mismos indices
for (indice in propiedades) {
    //declaro propiedad y le doy el valor de una de las propiedades (por eso indice porque tienen la misma cant)
    const propiedad = propiedades[indice]
    //declaro valor y le doy el valor de una de las usuarios (por eso indice porque tienen la misma cant)
    const valor = propiedades[indice]
    //console.log(propiedad,valor)
    // aca le doy al objeto user la propiedad y el valor 
    user[propiedad] = valor
}

console.log(user);