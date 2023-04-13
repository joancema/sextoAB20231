
const books= [
    {id:1, title:'Cocina para tontos', idauthor:1},
    {id:2, title:'Master en React', idauthor:1},
    {id:3, title:'Angular desde 0', idauthor:2},
]
const authors=[
    {id: 1, name:'Andres Marquez', idcity:1},
    {id: 2, name:'Juan de la Torre', idcity:2},
]
const citys =[
    {id:1, name:'Ecuador'},
    {id:2, name:'Chile'},
]


function findBookForId(id, callback){
    const book =  books.find(book=> book.id===id);
    if (!book)
    {
        const error = new Error()
        error.message=`Libro con id  ${id} no fue encontrado`
        return callback(error)
    }
    return callback(null, book);
}
function findAuthorForId(id,callback){
    const author =  authors.find(author => author.id=== id)
    if (!author)
    {
        const error= new Error()
        error.message= `El autor con id ${id} no fue encontrado`
        return callback(error)
    }
    return callback(null, author)
    
}
function findCityForId(id, callback)
{
    const city  =  citys.find(city=> city.id===id);
    if (!city)
    {
        return callback(new Error(`La ciudad con id ${id} no fue encontrada`))
    }
    return callback(null, city );
}


findBookForId(3, (err, book)=>{
    if (err)
    {
        console.log(err.message);
        return;
    }
    findAuthorForId(book.idauthor, (err, author)=>{
        if (err)
        {
            return console.log(err.message);
        }
        // findCountryForId
        book.authorFull= author;
        delete book.idauthor;
        
        findCityForId(author.id, (err, city)=>{
            if (err)
            {
                return console.log(err.message)
            }
            book.authorFull.CityFull= city;
            console.log(book);
        })
    })
})






