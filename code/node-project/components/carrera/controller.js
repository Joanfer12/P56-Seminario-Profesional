const storage = require('./storage')

function addCarrera(nombre, descripcion) {
    return new Promise((resolve, reject) => {
        let carrera = {
            nombre: nombre,
            descripcion: descripcion,
        }
        storage.add( carrera )
        resolve( carrera )
    })
}

function getCarreras(){
    return new Promise((resolve, reject) => {
        resolve(storage.get() )
    })
}
function updateCarrera( nombre, descripcion) {
    return new Promise(  (resolve, reject) => {
        let carrera = {
            nombre: nombre,
            descripcion: descripcion,
        }
        storage.update( carrera)
        resolve( carrera )
    })
}

function deleteCarrera(nombre) {
    return new Promise((resolve, reject) => {
        storage.delete( nombre )
           resolve( nombre )
    })
}

module.exports = {
    addCarrera,
    getCarreras,
    updateCarrera,
    deleteCarrera,
}




/*
const storage = require('./storage')

function addCarrera(nombre, abreviatura, descripcion) {
    return new Promise((resolve, reject) => {
        let carrera = {
            nombre: nombre,
            abreviatura: abreviatura,
            descripcion: descripcion,
        }
        storage.add( carrera )
        resolve( carrera )
    })
}

function getCarreras( filtroCarrera ) {
    return new Promise( (resolve, reject) => {
        resolve( storage.get( filtroCarrera ) )
    } )
}

function updateCarrera(idCarrera, nombre, abreviatura, descripcion) {
    return new Promise( async (resolve, reject) => {
        let carrera = {
            nombre: nombre,
            abreviatura: abreviatura,
            descripcion: descripcion,
        }
        const result = await storage.update(idCarrera, carrera)
        resolve( result )
    })
}

function deleteCarrera(idCarrera) {
    return new Promise((resolve, reject) => {
        storage.delete( idCarrera )
            .then(() => { resolve() })
            .catch((error) => { reject( error ) })
    })
}

module.exports = {
    addCarrera,
    getCarreras,
    updateCarrera,
    deleteCarrera,
}
*/