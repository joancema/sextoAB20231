const books = [
    {id:1, title:'Node Js Aplicaciones distribuidas',idauthor:1},
    {id:2, title:'Clean code javaScript',idauthor:2},
    {id:3, title:'Design patterns',idauthor:1},
]
const authors = [
    {id:1, name:'Jorge Carrasco'},
    {id:2, name:'Manuel  Bravo'},
    {id:3, name:'Elvis Castro'},
]


for (const iterator of books)
{
    const authorAuxiliar =  authors.find( ele=> ele.id=== iterator.idauthor   )
    console.log( ` Libro es  ${iterator.title} y su autor ${ authorAuxiliar.name } `);
}



