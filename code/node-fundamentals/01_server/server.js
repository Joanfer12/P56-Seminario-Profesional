const express = require('express')
const bodyParser = require('body-parser')

const router = express.Router()

var app = express()
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( {extended:false} ) )
app.use( router )

router.get('/carrera', function(req, res) {
    res.send ( 'Lista de carreras de la UPS. ')
})
router.post('/carrera', function(req, res) {
   console.log( req.body )
   console.log( req.body )

    res.status(201).send( {tipo_error:0, mensaje_error:'', mensaje_exito: 'Añadido exitosamente.' })
})

app.use( '/', express.static('public') )

app.listen( 5000 )
console.log( 'La aplicación está escuchando en http://localhost:5000' )