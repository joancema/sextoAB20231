const express =  require('express');
const cors =  require('cors')

const { dbConnection } =  require('./database/config')

class Server 
{
    constructor(){
        this.port=  process.env.PORT
        this.app =   express.Router()
        this.router= express.Router()

        this.paths = {
            categories: '/categories',
            customers: '/customers',
        }

        this.connectDB();
        this.addMiddleware();
        this.configRoutes();
        this.router.use('/v1/inventory', this.app);
        this._express = express().use(this.router);
    }

    async connectDB(){
        await dbConnection()
    }

    addMiddleware(){
        this.app.use(cors())
        this.app.use(express.json())

    }

    configRoutes(){
        this.app.use(this.paths.categories, require('./routes/Categories') )
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(``);
        })
    }



}



// base de datos

// routes


// middlewares

