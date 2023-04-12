const platos=[
    { id:1, descripcion:'Encebollado', idrestaurante:1  },
    { id:2, descripcion:'Ceviche', idrestaurante:1  },
    { id:3, descripcion:'Tigrillo', idrestaurante:2  },
    { id:4, descripcion:'Bolon de mani', idrestaurante:2  },
]
const restaurantes=[
    {id:1, nombre:'Mi restaurante', idpais:1},
    {id:2, nombre:'El secreto de Tere', idpais:1},
    {id:3, nombre:'El misterio', idpais:2},
]
const paises=[
    {id:1, nombre: 'Ecuador'},
    {id:2, nombre: 'Perú'},
]

function buscarPlatoPorId(id)
{
    return new Promise((resolve, reject)=>{
        const plato = platos.find(plato=> plato.id===id);
        if (!plato)
        {
            const error =  new Error();
            error.message=`No se encontró el plato con ID ${id}`
            reject(error)
        }
        resolve(plato)

    })
}
function buscarRestaurantePorId(id){
    return new Promise((resolve, reject)=>{
        const restaurante = restaurantes.find(restaurante=> restaurante.id===id);
        if (!restaurante)
        {
            const error= new Error();
            error.message=`El restaurante con id ${id} no pudo ser encontrado`
            reject(error)
        }
        resolve(restaurante)
    })
    
    
}


buscarPlatoPorId(2)
.then((plato)=>{
    console.log(plato);
    return buscarRestaurantePorId(plato.idrestaurante)
})
.then((restaurante)=>{
    console.log(restaurante);
    // return buscarpaisPorId(restaurante.idpais)
})
// .then((pais)=>{
    // console.log(pais)
// })
.catch((error)=>{
    console.log(error);
})
