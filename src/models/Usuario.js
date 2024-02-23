const {Schema, model} = require('mongoose')

const productosSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    imageUrl: String
},
{
    timestamps: true
}) 

module.exports =   model('Producto',productosSchema)