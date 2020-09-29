var persona = {
nombre: 'Joan', 
apellido:'Fernández',
Institucion:'Universidad Politecnica Salesiana',
}
var persona2 ={
    nombre :'Juanito',
    apellido : 'Alimaña',
    Edad:33,
}
function imprimirObjeto(objeto) { 
   var {nombre} = objeto //Para referirse a un atributo en específico de un objeto 
    console.log(`${objeto.nombre.toUpperCase()}  ${objeto.apellido}`)
}


 function ImprimirNombre(objeto){
     console.log(`${objeto.nombre.toLowerCase()} ${objeto.apellido}`)
 }

 
 //Otra manera de referirse a un atributo de manera específica
 function ImprimirApellido({apellido}){
     console.log(`${apellido}`)
 }
imprimirObjeto(persona)
imprimirObjeto(persona2)
ImprimirNombre(persona)
ImprimirApellido(persona)
