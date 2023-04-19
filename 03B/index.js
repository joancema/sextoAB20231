const mongoose =  require('mongoose');

const cadenaConexion= "mongodb+srv://joancema:joancema@cluster0.x7met.mongodb.net/ejemplo";

(async ()=>{

    try {
        const stateConnection= await mongoose.connect(cadenaConexion);
        const Estudiante= await mongoose.model("Estudiante", {name:String, identification:String});
        const estudianteByron =  new Estudiante({name:"Jeferson", identification:"1314151212"});
        const saveStudent= await estudianteByron.save()
    } catch (error) {
        console.log(error);
    }
})()

