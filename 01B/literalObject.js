
const person ={
    firstName:'Juan',
    lastName:'Pihuave',
    isStudent:true,
    geolocation:{
        lat:2.34,
        lng:5.67,
    },
    getFullName(){
        return `${this.firsName} ${this.lastName}`
    }
}

function showData({ firstName, lastName, geolocation:{ lat, lng } })
{
    console.log(firstName);
    console.log(lastName);
    console.log(lat);
    console.log(lng);
}

showData(person)

