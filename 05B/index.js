const express= require('express')
const cors = require('cors')

const app = express();
const PUERTO = 2500;

app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public'))

const fruits = []

// REST
// get   -> Consultar
app.get('/',(req,res)=>{
    res.status(200).json(fruits)
})

// get individual -> Consulta individual




// post    -> Insertar

app.post('/',(req, res )=>{
    // const body =  req.body
    const { body } =  req;
    fruits.push(body)
    res.status(200).send({
        message:'Dato insertado correctamente',
        response: body
    })

})

// put or patch   -> Actualizar

// delete   -> Eliminar





app.listen(PUERTO, ()=>{
    console.log(`SErver running http://localhost:${PUERTO}`);
})