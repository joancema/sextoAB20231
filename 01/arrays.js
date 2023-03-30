
const books = [
    {id:1,title:'Aplicaciones Distribuidas',idauthor:1},
    {id:2,title:'Código limpio JS',idauthor:2},
    {id:3,title:'Patrones de diseño',idauthor:1},
]

const authors = [
    {id:1,name:'Luis Mendoza'},
    {id:2,name:'Antonio JosE'},
    {id:3,name:'Alex AndrEs'},
]


for (const iterator of books)
{
    authorAux =  authors.find(ele => ele.id=== iterator.idauthor)
    console.log(`Nombre del libro: ${iterator.title}  Autor: ${ authorAux.name }  `);

}
