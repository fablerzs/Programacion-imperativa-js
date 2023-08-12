let edad = 51

//(el número es a modo de ejemplo, podes cambiarlo o crear otras para tener varias pruebas) 
const entrada = (edad) => {
    if (edad < 18 && edad > 0) {
        return edad % 2 === 1 ? `No puede pasar al bar y ademas tu edad ${edad} es impar ` : "No puede pasar al bar"
    }
    else if (edad <= 0) {
        return "Error, edad invalida, por favor ingrese un número válido"
    }
    else if (edad < 21) {
        return edad % 2 === 1 ? `Puede pasar al bar, pero no puede tomar alcohol y ademas tu edad ${edad} es impar ` : "Puede pasar al bar, pero no puede tomar alcohol"
    }
    else if (edad === 21) {
        return `Puede pasar al bar y tomar alcohol, felicidades por cumplir 21 y ademas tu edad ${edad} es impar `
    }

    else {
        return edad % 2 === 1 ? `Puede pasar al bar  y tomar alcohol, ademas tu edad ${edad} es impar ` : "Puede pasar al bar  y tomar alcohol"

    }

}

let resultadoEntrada = entrada(21)
console.log(resultadoEntrada)


//total a PAGAR gasolina

let totalAPagar = (vehiculo, litrosConsumidos) => {
    let precioLitro
    if (vehiculo === coche) {
        precioLitro = 86
    } else if (vehiculo === moto) {
        precioLitro = 70
    } else if (vehiculo === autobus) {
        precioLitro = 55 
    }


}

// LOCAL SANDWICHES

let miOrden = (tipoSandwich, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) => {
    let total = 0;

    //seleccionar TIPO

    if (tipoSandwich == "pollo") {
        total = 150 
        }
        else if (tipoSandwich == "carne") {
        total = 200;
        }
        else if (tipoSandwich == "veggie") {
        total = 100;    
        }
        else {
        return 'Seleccione una opcion valida'
    }

    //seleccionar PAN

    if (pan == 'blanco') {
        total += 50  
    }
    else if (pan == 'negro') {
        total +=60
    }
    else if (pan == 's/gluten') {
        total +=75
    }
    else { return 'Seleccione una opcion valida' }
    
    // elegir COMPLEMENTOS

    if (queso == true) {
        total += 20
    }
    if (tomate == true) {
        total +=15
    }
    if (lechuga == true) {
        total +=10
    }
    if (cebolla == true) {
        total +=15
    }
    if (mayonesa == true) {
        total +=5
    }
    if (mostaza == true) {
        total +=5
    }

    return total;

}

let resultado = miOrden('pollo', 'negro', true, true, true, true, true, false); 
console.log('El total de la orden es : $'+ resultado);


//abrir PARACAIDAS

let abrirParacaidas = (velocidad, altura) => {
    if (velocidad < 1000 && altura >= 2000 && altura < 3000) {
        console.log('Se puede abrir paracaidas')
    } else {
        console.log('No se recomienda abrir paracaidas')
    }
}

abrirParacaidas(1500,6999)


// NUMERO SECRETO

let crearNumeroSecreto = (min, max, numeroIngresado) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    let numeroSecreto = Math.floor(Math.random() * (max - min + 1) + min)
    if (numeroSecreto === numeroIngresado) {
        console.log('Felicidades, lo has adivinado')
    } else {
        console.log('Lo lamento, tu número ingresado fue: '+numeroIngresado+' y tu numero secreto fue: '+numeroSecreto+'. Intenta nuevamente.')
    }
  }
  
crearNumeroSecreto(1, 10,6)



// PELICULAS

let valorarPeliculas = (valoracion) => {
    switch (valoracion) {
        case 1:
            console.log("Calificaste la pelicula como muy mala. Lo lamentamos mucho. Agradecemos tu valoracion ")
            break;
        case 2:
            console.log("Calificaste la pelicula como mala. Lo lamentamos mucho. Agradecemos tu valoracion ")
            break;
        case 3:
            console.log("Calificaste la pelicula como mediocre. Lo lamentamos mucho. Agradecemos tu valoracion ")
            break;
        case 4:
            console.log("Calificaste la pelicula como buena. Nos alegramos. Agradecemos tu valoracion ")
            break;
        case 5:
            console.log("Calificaste la pelicula como muy buena. Nos alegramos. Agradecemos tu valoracion")
            break;
        default : console.log("Ingresaste valor invalido")
    }
}

valorarPeliculas(4)
