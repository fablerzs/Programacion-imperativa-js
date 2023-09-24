let numero1 = 20
let numero2 = 30

console.log (numero1 + numero2) 

function tablaDeMultiplicar(numero) {
	let i = 1
	let resultado
 	do {
		 resultado = numero * i
		 console.log(numero + ' * ' + i + ' = ' + resultado)
	 }   while(i<=10)
}

tablaDeMultiplicar(6)