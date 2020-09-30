var objeto1 ={
    nombre:'Joan',
    Apellido:'Fernández',
    altura:175,
    cantidadLibros:20,
}
var objeto2 ={
    nombre:'Juan ',
    Apellido:'Cortez',
    altura:150,
    cantidadLibros:60,
}
var objeto3 ={
    nombre:'Aimar',
    Apellido:'Cruz',
    altura:160,
    cantidadLibros:50,
}
var objeto4 ={
    nombre:'José',
    Apellido:'Calamaro',
    altura:180,
    cantidadLibros:33,
}
var objeto5 ={
    nombre:'Bon',
    Apellido:'Jovi',
    altura:170,
    cantidadLibros:30,
}

var personas = [objeto1, objeto2, objeto3, objeto4, objeto5 ] //lista de objetos 
//1. Forma de recorrer un arreglo 
for (persona of personas) {
    console.log(`${persona.nombre} ${persona.Apellido}`)
}

console.log('\n')
//2. Forma de recorrer un arreglo 
for (let i = 0; i < personas.length; i++) {
    console.log(`${personas[i].nombre} ${personas[i].Apellido}`)
    
}

//Filtro para ver quien es la persona o persona más altas
const EsAlta =(objeto) => objeto.altura > 1.70
var personasAltas = personas.filter(EsAlta)
console.log (personasAltas)

for (persona of personasAltas) {
    console.log(`${persona.nombre} ${persona.Apellido}`)
}

// CONVERTIR DE CM  A METROS

// 1. Mediante un forof
 for (const persona of personas) {
     persona.altura = personas.altura / 100
 }
 console.log(personas)


 // Mediante el uso de la Funcion map y funcion tipo flecha
const AlturaMetros = (objeto) => { objeto.altura =objeto.altura /100
   return objeto
}
 var Conversion = personas.map(AlturaMetros)
 console.log(Conversion)


 // segunda manera de usar las funciones 
 var personasCm =personas.map(  function(objeto){
objeto.altura =objeto.altura * 100 
return objeto 
 })

 console.log(personasCm)

// VER LA CANTIDAD DE LIBROS EN TOTAL 
// Mediante el uso de forof 
var sum = 0
for ( persona of personas) {
       sum += persona.cantidadLibros  
 }
 console.log(`La cantidad de libros es: ${sum}`)

//Uso de la función 'Reduce' en arreglos 
 const contabilizarLibros = (acum, cantidadLibros) => acum + cantidadLibros
 var CanLibros = personas.reduce(contabilizarLibros, 0 )
 console.log(`La cantidad total de libros es ${CanLibros}`)