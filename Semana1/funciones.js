function stringToUrl(nombre) {
    return 'www.'+nombre+'.com'
}

console.log(stringToUrl('prueba'));


function admiracion(palabra) {
    return '¡'+palabra+'!'
}

console.log(admiracion('hola'));

function edadPerros(edad) {
    return edad * 7;
}

console.log(edadPerros(18));


function sueldoHora(sueldoMensual) {
    return sueldoMensual / 4 / 45;
}

console.log(sueldoHora(500));

function imc(peso, altura) {
    let alturaCuadrada = altura * altura;
    return peso / alturaCuadrada;
}

console.log(imc(75, 1.76));


let imc 