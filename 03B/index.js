const mongoose =  require('mongoose');

const cadenaConexion= "mongodb+srv://joancema:joancema@cluster0.x7met.mongodb.net/acceso";

(async ()=>{

    try {
        const conexion =  await mongoose.connect(cadenaConexion);
        //usuarios pertenece a un grupo, tiene varios permisos
        //grupos tienen 0...n usuarios
        //permisos tienen 0...n usuarios

        const Group =  mongoose.model("Group", { name:String });
        const Permission = mongoose.model("Permission", {name:"String"});
        const User = mongoose.model("User", {
            name:String,
            idgroup: { type: mongoose.Types.ObjectId, ref:"Group" },
            // permissions: [{ type: mongoose.Types.ObjectId, ref:"Permission" }],
            permissions: [
            {
                permission:{ type: mongoose.Types.ObjectId, ref:"Permission" },
                state: {type:Boolean},
            }],
        });

        const group1 = new Group({name:"Gerentes"})
        const group2 = new Group({name:"Ventas"})
        const group1Save= await group1.save();
        const group2Save = await group2.save();

        const permission1 =  new Permission({name:"Consultar reportes"});
        const permission2 =  new Permission({name:"Enviar a papelera"});
        const permission3 =  new Permission({name:"Descargar archivos"});
        const permission1Save = await permission1.save();
        const permission2Save = await permission2.save();
        const permission3Save = await permission3.save();


        const user1 =  new User({
            name:"Fernanda",
            idgroup: group1Save._id,
            permissions:[
                {permission:permission1Save._id  , state:true},
                {permission:permission2Save._id  , state:true},
                {permission:permission3Save._id  , state:false},
            ]
        });
        const user1Save =  await user1.save();


        const result =  await User.find().populate("idgroup").populate("permissions.permission") ;
        // console.log(result[0].permissions)
        
        for (let i =0; i<result.length-1; i++)
        {
            console.log(result[i].name);
        }



        // user1.save().then((usuarioAlmacenado)=>{
        //     console.log(usuarioAlmacenado);
        //     return User.find().populate("idgroup")
        // }).then((resultadoConsulta)=>{
        //     console.log(resultadoConsulta);
        // }).catch((err)=>{
        //     console.log(err);
        // })



    } catch (error) {
        console.log(error);
    }
})()

