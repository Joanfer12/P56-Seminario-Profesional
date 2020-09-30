var docente = {
    nombre: 'Juan ',
    apellido:'Martial',
}
var docente2 ={
    nombre:'Joan',
    apellido: ' Fernández'
}
//Asignacion por paso de Valor 
var OtroDocente ={
    ...docente              // los ...  son para hacer una copia de docente en este objeto
}
console.log(docente == docente2)
console.log(docente == OtroDocente)

console.log(OtroDocente.nombre)
 //Asignación por referencia 
docente3 = OtroDocente
OtroDocente.nombre = 'Pepito'

console.log(docente3 == OtroDocente)
console.log(docente3)
console.log(docente)