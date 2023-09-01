//EJERCICIO 1

const restarPares = (valor1,valor2) => {
    if (valor1 % 2 === 0 && valor2 % 2 === 0 ){
        return valor2 - valor1
    } else {
        return 'Lo siento, uno o mas parametros no son pares'
    }
}

let resultado1 = restarPares(6,22) 
console.log(resultado1)

// EJERCICIO 2

const controlAcceso = (edad, ticket) => {
    if(edad >= 18 && ticket) {
        return 'Puedes acceder '+ true
    } else if(ticket) {
        return 'Solo puedes acceder con un adulto acompañante'
    } else { return 'No puedes acceder ' + false}
}

let resultado2 = controlAcceso(15,false)
console.log(resultado2)

//EJERCICIO 3

let productos = [
    {
        producto : "remera",
        tipo: "indumentaria",
        precio: 2100
    },
    {
        producto : "notebook",
        tipo: "tecnologia",
        precio: 200000
    },
    {
        producto : "celular",
        tipo: "tecnologia",
        precio: 27000
    },
    {
        producto : "protector solar",
        tipo: "cosmetica",
        precio: 2500
    },
    {
        producto : "pantalon",
        tipo: "indumentaria",
        precio: 7500
    },
    {
        producto : "tablet",
        tipo: "tecnologia",
        precio: 60000
    },
   
]


const filtro = (arreglo) => {
    let nuevoArreglo = []
    for (let i = 0 ; i<arreglo.length ; i++){
        if (arreglo[i].tipo === 'tecnologia' && arreglo[i].precio >= 50000){
            nuevoArreglo.push(arreglo[i])
        }
    }
    return nuevoArreglo
}

let resultado3 = filtro(productos)
console.log(resultado3)