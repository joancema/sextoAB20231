const express= require('express')
const cors = require('cors')

const app = express();
const PUERTO = 2500;

app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public'))

let fruits = []

// REST
// get   -> Consultar
app.get('/',(req,res)=>{
    res.status(200).json(fruits)
})
// get individual -> Consulta individual
app.get('/:codigo',(req,res)=>{
    // const codigo = req.params.codigo
    const { codigo  } = req.params;
    const fruitsSelect = fruits.filter(p=> p.codigo === codigo)
    if (fruitsSelect.length>0)
    {
        return res.status(200).send(fruitsSelect[0])
    }
    res.status(404).send({
        message:'La fruta con ese código no existe'
    })
})
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
app.put('/', (req,res)=>{
    const { codigo, nombre, color, tipo } =  req.body
    const fruit =  fruits.filter(p=> p.codigo===codigo)[0] || {}
    fruit.nombre= nombre;
    fruit.color= color;
    fruit.tipo= tipo;
    res.status(200).send({
        message:'Fruta modificada con éxito',
        response: fruit
    })
})
// delete   -> Eliminar
app.delete('/:codigo',(req, res)=>{
    const { codigo  } = req.params;
    fruits =  fruits.filter(p=> p.codigo !== codigo)
    res.status(200).send({
        message:`Fruta con código ${codigo} fue eliminada`
    })
})

app.listen(PUERTO, ()=>{
    console.log(`SErver running http://localhost:${PUERTO}`);
})