const { model, Schema } = require('mongoose')

const CategorySchema =  Schema(
    {
        name: {
            type: String,
            required: [true, "El nombre de la categorIa es obligatorio asignarlo"],
            unique: true
        },
        status: {
            type: String,
            default: true,
            required: true 
        }
    }
);


module.exports =  model('Category', CategorySchema )