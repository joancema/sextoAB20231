const mongoose =  require('mongoose')

const dbConnection = async  ()=>{
    try {
        await mongoose.connect( process.env.MONGODB_CNN );
        console.log(`Conexión exitosa`);
        
    } catch (error) {
        // console.log(``);
        throw new Error(``)
    }
}


module.exports = {
    dbConnection
}

