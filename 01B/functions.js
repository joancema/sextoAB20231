function operation(n1, n2, operation){
    switch(operation)
    {
        case "sum":
            return n1+n2;
        case "subs":
            return n1-n2;
        case "multiplicate":
            return n2*n3;
        case "divide":
            return n1/n2;
        default:
            return 0;
    }

}
function greet(name){
    return `Hola como estas ${name}`
}

module.exports= {
    functionToCall: operation,
    greet ,
    iva:12,
    ice:10,
 };