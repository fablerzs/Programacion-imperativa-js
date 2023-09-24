let matriz = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4]
  ];

  
  const recorrerMatriz = (mat) => {

    let total = 0

    for (let i = 0; i<mat.length ; i++){
        for (let j = 0 ; j<mat[i].length ; j++){
            if(mat[i][j]>=10 && mat[i][j]<1000){
                console.log(mat[i][j])
                total += mat[i][j]
            }
        }
    }
    return total

  }

  let resultado = recorrerMatriz(matriz)
  console.log(resultado)