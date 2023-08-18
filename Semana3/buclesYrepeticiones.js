// BUCLES Y REPETICIONES 


//numero 1

const imprimirNumeros =  () => {

for (let i = 5; i<=20 ; i+=3)
console.log(i)
}

imprimirNumeros()


//// numero 2 


let resultado=0;
for (let i = 0 ; i<=100 ; i++) {
    resultado +=i;
}

console.log(resultado)

//numero 3

const factorial = (numero) => {
    let resultado = 1;
    for (let i = 1 ; i<=numero ; i++) {
        resultado*=i
    }
    return resultado
}

let resultadoFactorial = factorial(9)
console.log(resultadoFactorial)