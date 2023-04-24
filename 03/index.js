const mongoose =  require('mongoose')

const connecionURL="mongodb+srv://joancema:joancema@cluster0.x7met.mongodb.net/accesos";

(async ()=>{
    try {
        ///conectar a la base de datos
        const estadoDeLaConexion =  await mongoose.connect(connecionURL)


        // definición de usuarios, 
        // un usuario pertenece a un grupo
        // un usuario tiene varios permisos

        const Group= mongoose.model("Group", { name:String });
        const Permission = mongoose.model("Permission", {name:String});
        const User =mongoose.model("User",{
            name:String,
            idgroup: { type: mongoose.Types.ObjectId, ref:"Group" },
            permissions: [ // {type: mongoose.Types.ObjectId, ref:"Permission"}]
                {
                    permission: {type: mongoose.Types.ObjectId, ref:"Permission"}, 
                    state: { type:Boolean },
                }

            ],
        });

        const group1 = new Group({name:"Gerente"});
        const group2 = new Group({name:"Administrador"});
        const saveGroup1 =  await group1.save();
        // console.log(saveGroup1);
        const saveGroup2 =  await group2.save();


        const permission1 = new Permission({name:"Grabar"});
        const permission2 = new Permission({name:"Eliminar"});
        const savePermission1 =  await permission1.save();
        const savePermission2 =  await permission2.save();


        const user1 =  new User({
            name:"Pedro Pihuave",
            idgroup: saveGroup1._id,
            permissions:[
                {permission: savePermission1._id  , state:true},
                {permission: savePermission2._id  , state:false},
            ]

        })



        // user1.save().then((usuarioAlmacenado)=>{
        //     console.log(usuarioAlmacenado);
        //     return User.find()
        // }).then((usuariosConsultados)=>{
        //     console.log(usuariosConsultados);
        // })
        // .catch((err)=>{
        //     console.log(`error en la consulta de informaciOn`);
        // })

        const saveUser =  await user1.save();
        const result=  await User.find().populate("idgroup").populate("permissions.permission");
        console.log(result[0].permissions  );
        console.log(result[result.length-1].permissions  );

        
    } catch (error) {
        console.log(error);   
    }
})()

