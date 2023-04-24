const mongoose =  require('mongoose')

const connecionURL="mongodb+srv://joancema:joancema@cluster0.x7met.mongodb.net/restaurantes";

(async ()=>{
    try {
        ///conectar a la base de datos
        const estadoDeLaConexion =  await mongoose.connect(connecionURL)
        //definir un modelo
        const Restaurante =  mongoose.model("Restaurante",{nombre:String, direccion:String, ingresosMensuales:Number})
        //crear un objeto en base al modelo
        nameCustomer="John Cevallos"
        const restaurante1 =  new Restaurante({nombre:nameCustomer, direccion:"Manta Los Esteros", ingresosMensuales:2000})
        const restaurante2 =  new Restaurante({nombre:"Prueba", direccion:"Chone", ingresosMensuales:2000})
        ///almacenar el objeto en la base de datos
        const almacenoRestaurante =  await restaurante1.save()
        const almacenoRestaurante2 =  await restaurante2.save()
        
    } catch (error) {
        console.log(error);   
    }
})()

