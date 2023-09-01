const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

const menores = (arreglo) => {
    //let menor = arreglo [0]
    let arregloNuevo = []
    
    for ( let i = 0; i < arreglo.length ; i ++) {
        
        if ( arreglo[i] < 18) {
            arregloNuevo.push(arreglo[i])
            
        }

    } return arregloNuevo
}

let resultado = menores(edades)
console.log(resultado)

//NUMERO 2

const mayores = (arreglo) => {
    //let menor = arreglo [0]
    let arregloNuevo = []
    
    for ( let i = 0; i < arreglo.length ; i ++) {
        
        if ( arreglo[i] >= 18) {
            arregloNuevo.push(arreglo[i])
            
        }

    } return arregloNuevo
}

let resultado2 = mayores(edades)
console.log(resultado2)

//NUMERO 3 

const iguales = (arreglo) => {
    //let menor = arreglo [0]
    let arregloNuevo = []
    
    for ( let i = 0; i < arreglo.length ; i ++) {
        
        if ( arreglo[i] === 18) {
            arregloNuevo.push(arreglo[i])
            
        }

    } return arregloNuevo
}

let resultado3 = iguales(edades)
console.log(resultado3)

// NUMERO 4 - D 


const numeroMenor = (arreglo) => {
    let menor = arreglo [0]
    
    
    for ( let i = 1; i < arreglo.length ; i ++) {
        
        if ( menor > arreglo[i]) {
            menor = arreglo[i]
        }

    } return menor
}

let resultado4 = numeroMenor(edades) 
console.log(resultado4)

// numero 5 - E

const numeroMayor = (arreglo) => {
    let menor = arreglo [0]
    
    
    for ( let i = 1; i < arreglo.length ; i ++) {
        
        if ( menor < arreglo[i]) {
            menor = arreglo[i]
        }

    } return menor
}

let resultado5 = numeroMayor(edades) 
console.log(resultado5)





// promedio- F


const promedio = (arreglo) => {
    let suma = 0
    for ( let i = 0; i< arreglo.length ; i++ ) {
        suma += arreglo[i]
    }
    return suma/arreglo.length
}

let resultadoPromedio = promedio(edades)
console.log ( resultadoPromedio)

// G 

const sumaUno = (arreglo) => {
    
    for ( let i = 0; i< arreglo.length ; i++ ) {
        arreglo[i] += 1
    }
}

sumaUno(edades)
console.log(edades)

//PUNTO 2
const arrayCuentas =
[
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: 3253.40,
      edadTitular: 33,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Roslyn Torres",
      estaHabilitada: false,
      saldo: 3229.45,
      edadTitular: 27,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: 1360.19,
      edadTitular: 34,
      tipoCuenta: "corriente"
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: true,
      saldo: 3627.12,
      edadTitular: 30,
      tipoCuenta: "sueldo"
    },
    {
        titular: "Ethel Leon",
        estaHabilitada: true,
        saldo: 1616.52,
        edadTitular: 34,
        tipoCuenta: "sueldo"
      },
      {
        titular: "Harding Mitchell",
        estaHabilitada: true,
        saldo: 1408.68,
        edadTitular: 25,
        tipoCuenta: "corriente"
      }
    ]
  
//parte A

const edadesClientes = (arrayCuentas) => {
    let ClienteMenores30 = []
    for (let i = 0; i < arrayCuentas.length; i++) {
        if (arrayCuentas[i].edadTitular < 30) {
            ClienteMenores30.push(arrayCuentas[i])
        }
    }
    return ClienteMenores30
}

let Cliente30 = edadesClientes(arrayCuentas)
console.log(Cliente30)

 

 console.log("------------PARTE B ------------")
//2b. Clientes mayores 30 años 
const edadesClientesMayores = (arrayCuentas) => {
    let ClienteMenores30 = []
    for (let i = 0; i < arrayCuentas.length; i++) {
        if (arrayCuentas[i].edadTitular >= 30) {
            ClienteMenores30.push(arrayCuentas[i])
        }
    }
    return ClienteMenores30
}

let ClienteMas30 = edadesClientesMayores(arrayCuentas)
console.log(ClienteMas30)


// PARTE C 
console.log("------------PARTE C ------------")

const edadesClientes30 = (arrayCuentas) => {
    let ClienteMenores30 = []
    for (let i = 0; i < arrayCuentas.length; i++) {
        if (arrayCuentas[i].edadTitular <= 30) {
            ClienteMenores30.push(arrayCuentas[i])
        }
    }
    return ClienteMenores30
}

let ClienteIgual30 = edadesClientes30(arrayCuentas)
console.log(ClienteIgual30)

// PARTE D
console.log("------------PARTE D ------------")



let ClienteMasJoven = (arrayCuentas) => {
    let minTemp = arrayCuentas[0].edadTitular
    let index = 0
    for (let i = 1; i < arrayCuentas.length; i++) {
        if (arrayCuentas[i].edadTitular < minTemp) {
            minTemp = arrayCuentas[i].edadTitular
            index = i
        }
    }
    return arrayCuentas[index]
}

let TitularMasJoven = ClienteMasJoven(arrayCuentas)
console.log(TitularMasJoven)

// PARTE E
console.log("------------PARTE E ------------")

const cuentaHabil = (arrayCuentas) => {
    let cuentas = []
    for (let i = 0; i < arrayCuentas.length; i++) {
        if (arrayCuentas[i].estaHabilitada === true) {
            cuentas.push(arrayCuentas[i])
        }
    }
    return cuentas
}

let resultadoCuentas = cuentaHabil(arrayCuentas)
console.log(resultadoCuentas)



console.log ("----------------EXTRAS-.--------------------")
 // EXTRA 2: 

const buscarPorId = (arr, theId) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === theId) {
      return arr[i];
    }
  }
  return null;
};

let idUno = buscarPorId(arrayCuentas, 1);
let idDos = buscarPorId(arrayCuentas, 20);
console.log(idUno);
console.log(idDos);


//Extra 1:

const generarID = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].id = 1;
  }
};

generarID(arrayCuentas);
console.log(arrayCuentas);