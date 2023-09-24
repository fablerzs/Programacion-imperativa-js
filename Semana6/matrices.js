const crearMatriz = () => {
    let matriz = []
    let contador = 1
    for (let i = 0 ; i < 10 ; i ++) {
        matriz.push([])
        for (let j = 0 ; j < 10 ; j++) {
            matriz[i].push(contador)
            contador ++;
        }
    }
    return matriz
}


console.table(crearMatriz())

const sumarDiagonal = (matriz) => {
    let suma = 0
    for (let i = 0; i < matriz.length ; i++){
        suma =+ matriz[i][j]
    }
}