


function saludar(nombre)
{
    return `Hola como estas ${nombre}`
}


const saludar2 =  function(nombre){
    return `Hola como estas ${nombre}`
}

const saludar3 =  (nombre)=> `Hola como estas ${nombre}`

function mostrarSaludoPorConsola(fn, parametro){
    console.log(fn(parametro));
}

mostrarSaludoPorConsola(saludar5, 'Pedro')