//librerias del core
const path =  require("path")
//librerias externas
const cors =  require('cors')
const express= require('express')



const PUERTO = 8080;
const urlIndex =  path.join( __dirname,  'index.html') 
const urlAbout =  path.join( __dirname,  'about.html') 
const urlError =  path.join( __dirname,  'error.html') 




const server  =  express();
server.use(cors()).use(express.json())

function funcionIndex (req, res) {
    res.status(200).sendFile(urlIndex);
}


server.get('/', funcionIndex)



// server.get('/',(req,res)=>{
//     res.status(200).sendFile(urlIndex);
//     // res.status(200).jsonp({
//     //     'message':'Ejemplo'
//     // })
// })
/// http://localhost:8080/about
server.get('/about', (req,res)=>{
    // req.params["CEDULA"]
    res.status(200).sendFile(urlAbout);

    // res.status(200).json({
    //     'message':'Respuesta correcta'
    // })

})


server.use((req,res,next)=>{
    res.status(404).sendFile(urlError);
})



server.listen(PUERTO, ()=>{
    console.log(`Server running in port ${PUERTO}, u can use http://localhost:${PUERTO}`);
})



