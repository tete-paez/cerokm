// /* artistasSolistas, que tome por parámetro un array de artistas y 
// devuelva un array con les artistas que sean solistas */

// const artistasSolistas = (artistas) => {
//     const arrayFiltrado = artistas.filter(artista => artista.solista)
//     return arrayFiltrado
// }

// console.log(artistasSolistas(artistas))


//---------------------------------------------------------

// /* artistasPorEdad, que tome un parámetro "edad" y un array de artistas y
//  devuelva un array con les artistas que tengan dicha edad */

// const artistasPorEdad = (edad, artistas) => {
//     const arrayFiltrado = artistas.filter(artista => artista.edad === edad)
//     return arrayFiltrado
// }



//  console.log(artistasPorEdad(36, artistas))


//---------------------------------------------------------


/* cantidadDeArtistasPorInstrumento, que tome por parámetro un array de
 artistas y devuelva un objeto donde cada "instrumento" es
 una propiedad y su valor la cantidad de artistas que tocan dicho instrumento  */

/* const ejemplo = {
    bajo: 12,
    guitarra: 15,
    piano: 20
} */

// // nustro objetivo es crear un objeto y que sus propiedades sean los instrumentos, y luego darle a esas propiedades el valor de la cant de artistas que tocan ese instrumento
// const cantidadDeArtistasPorInstrumento = (artistas) => {
//                                 // Declaro array vacio para guardar los instrumentos
//     let instrumentos = []
//                                 // Itero sobre artistas y pregunto si ya incluye ese instrumento, si no lo incluye, lo pusheo
//                                 // si si lo incluye, entonces sigo de largo en el bucle
//     for (let prop in artistas) {
//         !instrumentos.includes(artistas[prop].instrumento) && instrumentos.push(artistas[prop].instrumento)
//     }
//                                 // en este punto ya creamos las propiedades dinamicas instrumentos, ahora necesito contar cuantos antistas tocan esos instrumentos
//                                 // Declaro objeto vacio para retornarlo luego
//     let artistaPorInstrumento = {}
//                                 // Itero sobre mi array de instrumentos y genero una propiedad por cada uno, en donde guardo
//                                 // la cantidad de artistas que tocan ese instrumento.
//                                 // Recordemos que filter retorna un nuevo array, por eso puedo usar .length
//     for (let instrumento of instrumentos) {
//         artistaPorInstrumento[instrumento] = artistas.filter(artista => artista.instrumento === instrumento).length
//     } 
//     return artistaPorInstrumento    
// }

// console.log(cantidadDeArtistasPorInstrumento(artistas))


// //RESPUESTA DE MATIAS:
// const cantidadDeArtistasPorGenero = (artistas) => {
//     const instrumentos = {};
//     for (const artista of artistas) {
//         if (instrumentos[artista.instrumento] === undefined) {
//             instrumentos[artista.instrumento] = 1
//         } else {
//             instrumentos[artista.instrumento]++
//         }
//     }
//     return instrumentos;
// }
// console.log(cantidadDeArtistasPorGenero(artistas))








//---------------------------------------------------------





/* cantidadDeArtistasPorGenero, que tome por parámetro un array de artistas y devuelva un
 objeto donde cada "género" es una propiedad y su valor la cantidad de artistas de dicho género  */

// const cantidadDeArtistasPorGenero = (artistas) => {
//     let generos = []
//     for (let prop in artistas) {
//         !generos.includes(artistas[prop].genero) && generos.push(artistas[prop].genero)
//     }
//     let nuevoObjeto = {}
//     for (let genero of generos) {
//         nuevoObjeto[genero] = artistas.filter(artista => artista.genero === genero).length
//     }
//     return nuevoObjeto
// }

// console.log(cantidadDeArtistasPorGenero(artistas))

// const maximo = (prop, array) => { // FUNCION AUXILIAR QUE DEVUELVE EL NUMERO MAYOR DENTRO DE UN OBJ
//     let valorMinimo = array[0][prop]
//     let valorMaximo = array[0]

//     for (let i = 0; i < array.length; i++) {
//         let valor = array[i][prop]
//         if (valorMinimo < valor) {
//             valorMinimo = valor
//             valorMaximo = array[i]
//         }
//     }
//     return valorMaximo
// }




//---------------------------------------------------------


// // EJERCICIO 5

// /* artistasConMasDiscosQue, que tome por parámetro "cantidadDeDiscos" y un array de artistas y
//  devuelva un array con les artistas que tiene más de esa cantidad de discos */

// const artistasConMasDiscosQue = (cantidadDeDiscos, artistas) => {
//     const arrayFiltrado = artistas.filter(artista => artista.discos.length > cantidadDeDiscos)
//     return arrayFiltrado
// }

// console.log(artistasConMasDiscosQue(4, artistas))

//---------------------------------------------------------




// /* artistaConMasEntradasVendidas, que tome por parámetro un array de artistas
//  y devuelva el objeto artista que vendió más entradas en su último recital */

// const artistaConMasEntradasVendidas = (artistas) => {
//     let elQueMasVendio = maximo("entradasVendidas", artistas)
//     return elQueMasVendio
// }

// //console.log(artistaConMasEntradasVendidas(artistas))






//---------------------------------------------------------


// /* artistaConMayorRecaudacion, que tome por parámetro un array de artistas y
//  devuelva el objeto artista que más recaudó en su último recital
//   (entradasVendidas * costoEntradas) */

// // EXPLICACION SPREAD OPERATOR
// // EXPLICACION SPREAD OPERATOR
// // EXPLICACION SPREAD OPERATOR
// // EXPLICACION SPREAD OPERATOR


// const numeros = [12, 46, 78]
// // El spread toma el array original, crea una COPIA y le podemos agregar lo
// // que queremos, sin modificar ese array original porque trabajamos sobre la COPIA
// const numeros1 = [...numeros, 37, 45, 98]

// const artistaConMayorRecaudacion = (artistas) => {
//     const nuevoArray = artistas.map(artista => [{...artista, recaudacion: artista.ultimoRecital.entradasVendidas * artista.ultimoRecital.costoEntradas}])
//     return maximo("recaudacion", nuevoArray)
// }

// //console.log(artistaConMayorRecaudacion(artistas))





//---------------------------------------------------------





/* artistasConDiscoEnAnio, que tome por parámetro un parámetro "anio", y 
devuelva true un array con los artistas que tengan publicado al menos un disco en dicho 
año */

// const artistasConDiscoEnAnio = (anio) => {
//     // entrar dentro de la propiedad disco de cada artista
//     // chekear el anioLanzamiento
//     // comparar que coincida con el anio parametro
//     // devuelva un array con los artistas que coincidan
//     const artistasConDiscoEnEseAnio = [];
//     artistas.forEach(artista => {
//         artista.discos.forEach(disco => {
//             if (disco.anioLanzamiento === anio) {
//                 artistasConDiscoEnEseAnio.push(artista)
//             }
//         })
//     })
//     return artistasConDiscoEnEseAnio;
// }

// console.log(artistasConDiscoEnAnio(2015));

// esta colucion con matias
// esta colucion con matias
// esta colucion con matias
// esta colucion con matias
// esta colucion con matias
// esta colucion con matias



// const artistasConDiscoEnAnio = (anio) => {
    
//     const discosPublicados = artistas.filter((artista) => artista.discos.filter{
//         artista.discos.forEach(disco => {
//             if (disco.anioLanzamiento === anio) {
//                 artistasConDiscoEnEseAnio.push(artista)
//             }
//         })
//     })
//     return artistasConDiscoEnEseAnio;
// }

// console.log(artistasConDiscoEnAnio(2015));





// // const cantidadDeArtistasPorInstrumento2 = (artistas) => {
// //     // forEach, in, ||
// //     let instrumentos = {}
// //     artistas.forEach( (artista) => {
// //         if('instrumento' in artista) {
// //             instrumentos[artista.instrumento] = (instrumentos[artista.instrumento] || 0) + 1;
// //         }
// //     });
// //     return instrumentos    
// // }

// // console.log(cantidadDeArtistasPorInstrumento2(2000));



//b EXPLICACION DE COMO ENTRAR A LAS PROPIEDADES DE LOS OBJETOS:
/*




FOR OF NO VA CON OBJETOS
FOR OF VA CON ARRAYS DE OBJETOS 

EN EL FOR IN ME DEVUEVE INDICES  DE LOS ELEMENTOS QUE ESTOY RECORRIENDO 







*/