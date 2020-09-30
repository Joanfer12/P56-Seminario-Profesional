var persona = {
    nombre: 'Joan',
    Apellido: 'Fernandez',
    edad: 21,
    Universidad:' Universidad Politécnica Salesiana',
    Ingeniero:false,
    estudiante:true,
    master:false,
}

function ImprimirPersona(objeto){
    console.log(`${objeto.nombre} ${objeto.Apellido}`)
    console.log(`Edad: ${objeto.edad} años `)
    console.log(`Universidad: ${objeto.Universidad}`)
    if (objeto.Ingeniero) {  //dependiendo si los valores en el objeto son tru or false los valida 
        console.log('Es ingeniero')
    } 
    if(objeto.estudiante){
        console.log('Es un estudiante')
     }
     if(objeto.master){
        console.log('es master')            
    }
        
}

// SWITCH 
opcion = 2
switch (opcion ) {
    case 1:
            console.log('Caso 1')        
        break;
    case 2:
        console.log('Caso 2')
        break;
    default:
        console.log('Ya no hay opciones...')
        break;
}

ImprimirPersona(persona)