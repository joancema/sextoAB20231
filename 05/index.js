const express = require('express')
const cors  =require('cors')

const PORT = 2500;

const app =  express();
app.use(cors()).use(express.json())
app.use('/public',  express.static(__dirname+'/public'))


let students =[]

// GET  -> Consulta de información
app.get('/', (req, res)=>{
    res.status(200).send(students);
})
// GET INDIVIDUAL -> Consulta pero de un solo elemento
app.get('/:identificacion', (req,res)=>{
    const {identificacion} =  req.params
    const studentsFilter =  students.filter(p=> p.identificacion.toString() === identificacion.toString())
    if (studentsFilter.length>0)
    {
        res.status(200).send(studentsFilter[0])
    }
    res.status(403).send({
        message:'No pudo ser encontrado el recurso'
    })
    

})
// POST -> Insertar información
app.post('/',(req, res)=>{
    const {body} =  req
    students.push(body);
    res.status(201).send({
        message:'Dato insertado correctamente',
        response: body
    })
})
// PATCH OR PUT   -> Actualizar información
app.put('/',(req,res)=>{
    const { id, identificacion, nombre }  =  req.body;
    let student = students.filter(p=> p.identificacion=== identificacion)[0] || {}  
    student.nombre = nombre;

    res.status(202).send({
        message:'Dato modificado correctamente',
        response:student
    })


})
// DELETE -> Eliminar algún elemento de la lista

app.delete('/:identificacion',(req, res)=>{
    const { identificacion }  =  req.params
    students =  students.filter(p=> p.identificacion.toString() !== identificacion.toString())
    res.status(200).send({
        message:'Se eliminó el elemento correctamente'
    })

})


app.listen(PORT, ()=>{
    console.log(`Server running in http://localhost${PORT}`);
})