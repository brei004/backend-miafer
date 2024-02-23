const usuarioCtrl = {}

const Producto = require('../models/Usuario')

usuarioCtrl.getProd = async(req,res) => {
    const prods = await Producto.find()
    res.json(prods)
}
usuarioCtrl.createProd = async(req,res) => {
    const {name,description,price,category,imageUrl} = req.body
    const newProd = new Producto({
        name: name,
        description: description,
        price: price,
        category: category,
        imageUrl: imageUrl
    })
    await newProd.save()
    res.json({message: "El producto ha sido creado"})
}
usuarioCtrl.getProdid = async(req,res) => {
    const product = await Producto.findById(req.params.id)
    res.json(product)
    
}
usuarioCtrl.deleteProd = async(req,res) => {
    await Producto.findByIdAndDelete(req.params.id)
    res.json({message: 'El producto fue borrado con éxito'})
}
usuarioCtrl.updateProd = async(req,res) => {
    const {name,description,price,category,imageUrl} = req.body
    await Producto.findByIdAndUpdate(req.params.id,{name,description,price,category,imageUrl})
    res.json({message: "Se actualizoó el producto con éxito"})
}
module.exports = usuarioCtrl