const { model, Schema } = require('mongoose')


const ProductSchema =  Schema(
    {
        name:{
            type:String,
            required:[true, 'EL nombre del producto es obligatorio'],
            unique:true
        },
        status:{
            type: Boolean,
            default:true
        },
        cost:{
            type: Number,
            default:0
        },
        price:{
            type: Number,
            default:0
        },
        minimum:{
            type: Number,
            default:0
        },
        category:{
            type: mongoose.Types.ObjectId,
            ref:"Category",
            required:false
        },

    }
);


ProductSchema.methods.toJSON = function(){
    const { __v, status, ...data  } =  this.toObject();
    return data;
}


module.exports =  model('Product', ProductSchema)











// const producto =  new Model('product')

// { _id: 12312312, name:'sdfsfgsfg', costo:23, precio:45, status:true, __v:2 }
//  ...data va a ser igual a {_id: 12312312, name:'sdfsfgsfg'}
// const variable =  producto.toJSON()
// console.log(variable);