const { Schema, model } = require('mongoose')

const ProductSchema = Schema(
    {
        name:{
            type: String,
            required: [true,   "El nombre del producto es obligatorio"],
            unique: true
        },
        status:{
            type: Boolean,
            default: true,
            required: true
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
            type: Schema.Types.ObjectId,
            ref:"Category",
            required: false
        }
    }
)

module.exports = model("Product", ProductSchema );

 