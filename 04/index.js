///dependencias que pertenecen al core de node
const path =  require('path')

/// dependencias externas npmjs
const cors = require('cors')
const express = require('express')

///librerias creadas por mi


const server = express();
server.use(cors()).use(express.json());

const PUERTO = 8080;

const urlAbout =  path.join( __dirname,"./about.html")
const urlIndex =  path.join( __dirname,"./index.html")
const urlError =  path.join( __dirname,"./error.html")

server.get('/',(req,res)=>{
    res.status(200).sendFile(urlIndex)
})

server.get('/acercade',(req,res)=>{

    res.status(200).sendFile(urlAbout)
    // res.json({
    //     message:'Dato correcto'
    // })
})


server.use((req,res, next)=>{
    res.status(404).sendFile(urlError)
})


server.listen(PUERTO, ()=>{
    console.log(`Server running http://localhost:${PUERTO}`);
})