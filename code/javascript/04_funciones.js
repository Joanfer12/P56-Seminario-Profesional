nombreApellido = 'Joan Fernández'
var edad = 21
// FUNCIÓN TIPO DECLARATORIA 
function imprimirEdad(nombre, edad){
    console.log(`${nombre} tiene la edad de ${edad}. `)
}
// FUNCIÓN TIPO FLECHA
var imprimirEdad2 = (nombre, edad) => { console.log(`${nombre} tiene la edad de ${edad}. `)}

// FUNCIÓN TIPO EXPRESIVA
var imprimirEdad3 =function(nombre, edad){
    console.log(`${nombre} tiene la edad de ${edad}`)
}

imprimirEdad(nombreApellido,edad)
imprimirEdad2 (nombreApellido,edad)
imprimirEdad3('Joan Fernandez', edad)