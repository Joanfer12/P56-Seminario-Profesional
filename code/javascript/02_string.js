var nombre="Joan"
var apellido="Fernández"

var nombre='Joan', apellido='Fernández'
 var nombreMayusculas = nombre.toUpperCase()
 var apellidoMayusculas =apellido.toUpperCase()

 console.log (nombreMayusculas + ' ' + apellidoMayusculas)// Salida por consola en JavaScript Puro 
 console.log (`${nombre} ${apellidoMayusculas}`) // Salida por consola en ECMAScript 
 var primeraLetraNombre =nombre.charAt(0)
 var longitudNombre = nombre.length
 var subcadenaNombre = nombre.substr(1,3)

 console.log(`${longitudNombre}`)// Numero de letras que contiene 
 console.log(`${primeraLetraNombre}`)//Primera letra del Nombre
 console.log(`${subcadenaNombre}`)//Presentan la primera hasta la tercera letra del nombre