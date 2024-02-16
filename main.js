//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function parseThrough(x){
    for (let i = 0; i < Object.keys(x).length; i++){ //everything in an array
        if(Array.isArray(Object.values(x)[i])){
            console.log(Object.values(x)[i])
        } else if(!Array.isArray(Object.values(x)[i])){
            console.log(Object.values(x)[i])
        }
    }
}
console.log(parseThrough(person3))

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person{
    constructor(name, age, hair_color, location){
        this.name = name;
        this.age = age;
        this.hair_color = hair_color;
        this.location = location;
    }

    incrementAge = () => {
        return (this.name == 'Brendan' && this.age > 0) ? this.age+=3 : this.age++;
    }

    printInfo = () => {
        console.log(`This person is ${this.name}. He/She is ${this.incrementAge()} year(s) old, has ${this.hair_color} hair, and lives in ${this.location}.`)
    }
}

let mary = new Person('Mary', 1, 'Blonde', 'California');

console.log(mary.printInfo())
console.log(mary.printInfo())

let brendan = new Person('Brendan', 2, 'Black', 'Massachusetts');

console.log(brendan.printInfo())
console.log(brendan.printInfo())


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/


function lengthGreaterTen(str){
    return new Promise( (resolve, reject) => {
        if(str.length >= 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

lengthGreaterTen('fabricating')
    .then( (result) => {
        console.log(`Greater than 10: ${result}`)
    })

    .catch( (error) => {
        console.log(`Less than or equal to 10: ${error}`)
    })
