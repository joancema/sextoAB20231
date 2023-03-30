const person = {
    firstName:'Pedro',
    lastName:'Pihuave',
    isStudent:true,
    geolocation:{
        lat:23.34,
        lng:12.11,
    },
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}


function showData( {  firstName, lastName, geolocation: { lat, lng }  } )
{
    console.log(firstName)
    console.log(lastName)
    console.log(lat)
    console.log(lng)
}


showData(person)