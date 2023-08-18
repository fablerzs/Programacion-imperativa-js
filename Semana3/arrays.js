// COLECCION DE PELICULAS 

let listaPeliculas1 = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]

let listaPeliculas2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]



//funcion para convertir a mayusculas

console.log("----------------LISTA EN MAYUSCULAS-------------- ")


const convertirMayusculas = (peliculas) => {


let peliculasMayuscula = []
    for (let i = 0; i<peliculas.length; i++) {
        peliculasMayuscula[i] = peliculas[i].toUpperCase()
        console.log(peliculasMayuscula[i])
    }   
    return peliculasMayuscula
}

//funcion para fusionar arrays con metodo concat

const combinarLista = (lista1,lista2) => {

    return lista1.concat(lista2)

}


let listaCombinada = combinarLista(listaPeliculas1,listaPeliculas2)


let resultadoMayusculas = convertirMayusculas(listaCombinada)

//eliminando ultima pelicula/elemento

let variableEliminada = resultadoMayusculas [resultadoMayusculas.length-1] 

resultadoMayusculas.pop()

console.log("----------------ELIMINANDO ULTIMO ELEMENTO-------------- ")


console.log(resultadoMayusculas)

//CALIFICACION DE PELICULAS 

console.log("----------------CALIFICACION PELICULAS-------------- ")


const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];


const compararPromedio = (promedioAsia,promedioEuro,resultadoMayusculas) => {
    for (i=0 ; i<resultadoMayusculas.length; i++) {
        if (promedioAsia[i]===promedioEuro[i]){
            console.log(`La pelicula ${resultadoMayusculas[i]} tiene una calificacion igual tanto en Europa como Asia` ) 
        } else {
            console.log(`La pelicula ${resultadoMayusculas[i]} tiene una calificacion diferente en Europa y Asia` ) 
        }
    }
}

compararPromedio (asiaScores,euroScores,resultadoMayusculas)


console.log("----------------ARRAY INVERSO-------------- ")

let arrayNormal = [1,2,3,4,5,6,7,8,9,10]

const imprimirInverso = (array) => {
    for (let i=array.length-1; i>=0; i--){
        console.log(array[i])
    }
}

imprimirInverso(arrayNormal)


console.log("----------------ARRAY INVERSO MODIFICADO-------------- ")

const invertirArray = (array) => {

    let j = array.length-1;
    let arrayInvertido = []
    for (let i=0 ; i<array.length ; i++){
        arrayInvertido[i] = array[j]
        j--
    }
    return arrayInvertido
}

let resultadoInvertido = invertirArray(arrayNormal)
console.log(resultadoInvertido)


console.log("----------------SUMMA ARRAY-------------- ")


let numeros = [2,344,342]

const sumaArray = (array) => {
    let total = 0
    for (i=0; i<array.length ; i++) {
        total += array[i]
    }
    console.log(total)
}

sumaArray(numeros)

console.log("----------------simulacion array join-------------- ")

let letras = ["f","a","b","i","a","n"]

const join = (array) => {
    let total =""
    for (i=0; i<array.length; i++){
        total += array[i]
    }
    console.log(total)
}

join(letras)





