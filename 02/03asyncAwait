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

async function buscarPlatoPorId(id)
{
    const plato = platos.find(plato=> plato.id===id);
    if (!plato)
    {
        const error =  new Error();
        error.message=`No se encontró el plato con ID ${id}`
        throw error;
    }
    return plato;
}
async function buscarRestaurantePorId(id){
    const restaurante = restaurantes.find(restaurante=> restaurante.id===id);
    if (!restaurante)
    {
        const error= new Error();
        error.message=`El restaurante con id ${id} no pudo ser encontrado`
        throw error;
    }
    return  restaurante;
}


// buscarPlatoPorId(1).then


(async  ()=>{

    try {
        const plato =  await buscarPlatoPorId(1);
        const restaurante =  await buscarRestaurantePorId(plato.idrestaurante)
        // const pais =  await buscarPaisPorId(restaurante.idpais)
        plato.restaurante= restaurante;
        // plato.restaurante.pais= pais;
        console.log(plato);
        
    } catch (error) {
        console.log(error.message);   
    }


})()
