// EJERCICIO 1 

const autos = [
    {
        marca: 'Toyota',
        modelo: 2022,
        color: 'rojo'
    },
    {
        marca: 'Renault',
        modelo: 2015,
        color: 'gris'
    },
    {
        marca: 'Peugeot',
        modelo: 2017,
        color: 'rojo'
    },
    {
        marca: 'Fiat',
        modelo: 2021,
        color: 'negro'
    }
]


const filtroModelo = (array) => {
    let nuevoArray = []
    for (i = 0; i < array.length; i++) {
        if (array[i].modelo >= 2020) {
            nuevoArray.push(array[i])
        }
    }
    return nuevoArray
}

let resultado1 = filtroModelo(autos)
console.table(resultado1)


//EJERCICIO 2

let estudiantes = [
    {
        nombre: "juan",
        activo: true,
        notaPromedio: 5
    },
    {
        nombre: "maria",
        activo: false,
        notaPromedio: 3
    },
    {
        nombre: "florencia",
        activo: true,
        notaPromedio: 9
    },
    {
        nombre: "carlos",
        activo: false,
        notaPromedio: 8
    },
    {
        nombre: "jose",
        activo: true,
        notaPromedio: 6
    },
]


const ordenarArray = (array) => {
    let temp
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length - 1; j++) {
            if (array[j].notaPromedio < array[j + 1].notaPromedio) {
                temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
}

ordenarArray(estudiantes)
console.table(estudiantes)

//EJERCICIO 3.1

let matrix = [
    [1, 4, 7, 4],
    [5, 7, 6, 2],
    [6, 2, 3, 3],
    [2, 6, 8, 1],
]


const arrayColumna = (array, posicion) => {
    let nuevoArray = []
    for (i = 0; i < array.length; i++) {
        nuevoArray.push(array[i][posicion])
    }
    return nuevoArray
}

let resultado3 = arrayColumna(matrix, 1)
console.table(resultado3)

//EJERCICIO 3.2

const eliminarImpares = (array) => {
    for (i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] % 2 != 0) {
                array[i][j] = 0

            }
        }
    }
    return array
}

let resultadoPunto2 = eliminarImpares(matrix)
console.table(resultadoPunto2)