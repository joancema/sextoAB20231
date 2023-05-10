const { Schema, model } = require('mongoose')

const CategorySchema = Schema(
    {
        name:{
            type: String,
            required: [true,   "El nombre del categoria es obligatorio"],
            unique: true
        },
        status:{
            type: Boolean,
            default: true,
            required: true
        }
    }
)

module.exports = model("Category", CategorySchema );

 