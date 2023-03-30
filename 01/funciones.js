function operation(n1, n2, operation)
{
    switch(operation)
    {
        case "sum":
            return n1+n2;
        case "rest":
            return n1-n2;
        case "multiplication":
            return n1*n2;
        case "divide":
            return n1/n2;
        default:
            return 0;
    }
}


function salute(nombre)
{
    return `Hola que tal ${nombre}`
}





module.exports = {
    functionToCall: operation,
    salute,
    variable: 12,
};



