///
///Object destructuring
///
const person = {
    name: 'Mohammed',
    age: 26,
    location: {
        city: 'fremont',
        temp: 102
    }
};

//creating two variables so you dont need to type "person.age" for ex
//creating a default for name + creating new variable name to be more specific
const {name: firstName = 'Anonymous', age} = person;

console.log(`${firstName} is ${age}.`)

//temp: temperature is changing the name of the variable 
const {city, temp: temperature} = person.location;
console.log(`${city} is ${temperature} degrees.`)


const book = {
    title: 'ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: "Penguin"
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher

console.log(publisherName);

///
/// Array destructuring
///

const address = ['3429 lake arrowhead ave', 'Fremont', 
'california', '94555'];

// this is the before destructuring
//console.log(`You are in ${address[1]} ${address[2]}`)
//below is after destructuring

const [street, cityy, state, zip] = address; 
console.log(`You are in ${cityy} ${state}`);

const item = ['coffee hot', '2$', '3$', '4$'];

const [drink, , medium,] = item;
console.log(`A medium ${drink} costs ${medium}`);