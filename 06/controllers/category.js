const { response } = require('express')
const {Category } = require('../models');


// get
// ?limite=10 , desde
const getCategories = async (req,res = response  )=>{
    const { limite =10 , desde=0   } = req.query;
    const query = { status:true };

    const [ sum, categories ] =  await Promise.all(
        [
            Category.countDocuments(query),
            Category.
            find(query).
            limit(limite).
            skip(desde)
        ]
    );  
    //#region 
    // const consulta = await  Category.
    // find(query).
    // limit(limite).
    // skip(desde);
    // const consulta2 = await  Category.countDocuments(query);
    //#endregion
    res.json({
        sum,
        categories
    })
    

}
//      localhost:3000/consultaindividual/1
//GET individual
const getCategory = async ( req, res= response )=>{
    const { id  }  =  req.params
    const category = await   Category.findById(id);
    res.json(category);




}


// post
//put
//delete
