
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

async function findBookForId(id){
    const book =  books.find(book=> book.id===id);
    if (!book)
    {
        const error = new Error()
        error.message=`Libro con id  ${id} no fue encontrado`
        throw error;
    }
    return book;
}
async function findAuthorForId(id){
    const author =  authors.find(author => author.id=== id)
    if (!author)
    {
        const error= new Error()
        error.message= `El autor con id ${id} no fue encontrado`
        throw error;
    }
    return author;
    
}


(async ()=>{
    try {
        const book = await findBookForId(145);
        const author = await findAuthorForId(book.idauthor);
        book.author= author;
        console.log(book);
        
    } catch (error) {
        console.log(error.message);
    }
})();

