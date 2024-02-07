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

for (let i = 0; i < Object.keys(person3).length; i ++){
    console.log(Object.keys(person3)[i])
}

console.log(`My favorite types of pizza are ${person3.pizza[0]} and ${person3.pizza[1]}.`)
console.log(`For taco night, I'll take ${person3.tacos}.`)
console.log(`My favorite burgers are ${person3.burgers}.`)
console.log(`My favorite flavors of ice cream are ${person3.ice_cream[0]}, ${person3.ice_cream[1]}, and ${person3.ice_cream[2]}.`)
console.log(`Lastly, I get my ${person3.shakes[0].oberwise} shakes from Oberwise, ${person3.shakes[0].dunkin} from Dunkin', ${person3.shakes[0].mcDonalds} from McDonalds, ${person3.shakes[0].cupids_candies} from Cupid's Candies, and ${person3.shakes[0].culvers} from Culvers. `)


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
    // Use an arrow to create the printInfo method
    printInfo = () => {
        console.log(`This person is ${this.name}. He/She is ${this.age} year(s) old, has ${this.hair_color}, and lives in ${this.location}.`);
        return (this.name == 'Brendan' && this.age > 0) ? this.age+=3 : this.age++;
    }

    incrementAge = () => {
        return (this.name == 'Brendan' && this.age > 0) ? this.age+=3 : this.age++;
    }

}

let mary = new Person('Mary', 1, 'Blonde', 'California');

console.log(mary.printInfo())
console.log(mary.printInfo())
console.log(mary.printInfo())

let brendan = new Person('Brendan', 1, 'Black', 'Massachusetts');

console.log(brendan.printInfo())
console.log(brendan.printInfo())
console.log(brendan.printInfo())
console.log(brendan.printInfo())



// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function lengthGreaterTen(str){
    return new Promise( (resolve, reject) => {
        if(str.length >= 10){
            resolve('Big word')
        } else {
            reject('Small Number')
        }
    })
}

console.log(lengthGreaterTen('mouse'))
console.log(lengthGreaterTen('fabricating'))
console.log(lengthGreaterTen('cat'))
