const sumar = (numero1, numero2) => numero1 + numero2;


const restar = (numero1, numero2) => numero1 - numero2;

const multiplicar = (numero1, numero2) => numero1 * numero2;

const dividir = (numero1, numero2) => numero1 / numero2;

console.log("-------------- Testeo de Operaciones / Calculadora --------------");

let resultadoSuma = sumar(2, 2);
console.log(resultadoSuma);

let resultadoResta = restar(4, 2);
console.log(resultadoResta);

let resultadoMultiplicar = multiplicar(4, 4);
console.log(resultadoMultiplicar);

let resultadoDividir = dividir(4, 4);
console.log(resultadoDividir);

let resultadoDividir2 = dividir(4, 0);
console.log(resultadoDividir2);


console.log("--------------  Calculadora  N3--------------");

const cuadradoDeUnNumero = (numero1) => multiplicar(numero1, numero1);

let resultadoCuadrado = cuadradoDeUnNumero(3);
console.log(resultadoCuadrado);

const promedioDeTresNumeros = (numero1, numero2, numero3) => {
    let sumaTotal = sumar(sumar(numero1, numero2), numero3);
    return dividir(sumaTotal, 3);
}

let resultadoPromedio = promedioDeTresNumeros(5,5,5);
console.log(resultadoPromedio);


const calcularPorcentaje = (numero1, numero2) => {
    let division1 = dividir(numero2,100);
    return multiplicar(division1, numero1);
}

let resultadoPorcentaje = calcularPorcentaje(300, 15);
console.log(resultadoPorcentaje);

const generadorDePorcentaje = (numero1, numero2) => {
    let division1 = dividir(numero1, numero2);
    return multiplicar(division1, 100);
}

let resultadoGenerador = generadorDePorcentaje(11800, 21800);
console.log(resultadoGenerador);
