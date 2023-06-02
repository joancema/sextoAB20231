const { response} =  require('express')

const { Category } = require('../models');

//get
// localhost:3000/api/categorias?limite=10,desde= 0
// localhost:3000/api/categorias
const getCategories = async  ( req, res =response  )=>{
    const {  limite=100, desde=0   } =  req.query;
    const query = {status: true}
    const [categories, total ] = await   Promise.all(
        Category
        .find(query)
        .skip(desde)
        .limit(limite),
        Category.count()
    )
    res.json({
        categories,
        total
    })
}
//get
//localhost:3000/api/categorias/2
const getCategory = async (req, res =  response )=>{
    const { id } =  req.params;
    const category   =  await  Category.findById(id)
    res.json(category);
}
//post
const createCategory = async (req, res = response)=>{
    //obtener el body
    const {   status,  ...body } =  req.body;
    
    //validar
    const existCategory = await Category.findOne({name:body.name});
    if (existCategory)
    {
        return res.status(400).json({
            message:`La categoria ${ body.name }  ya existe`
        })
    }
    //armar el objeto para almacenar

    const data= {
        ...body
    }
    const category =  new Category(data);
    //almacenar
    const categoryNew =  await category.save();
    //enviar respuesta
    res.status(201).json(categoryNew)
}
//put
const updateCategory = async  (req,  res= response)=>{
    const  {id} =  req.params;
    const { status,  ...data } =   req.body;
    const categoryUpdated =await 
      Category.findByIdAndUpdate(id, data, {new:true});
    res.json(categoryUpdated);
}

//delete  http://localhost:3000/api/category/1
const deleteCategory = async (req,res=response)=>{
    const  {id} =  req.params;
    const categoryDeleted =await 
      Category.findByIdAndUpdate(id, {status:false}, {new:true});

      res.json(categoryDeleted);

}


module.exports= {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
}