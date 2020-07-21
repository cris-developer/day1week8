//Rest parameter
// const add1 = (...args) => {
//    console.log(args)
// }

// add1(); // 0
// add1(1); // 1
// add1(1, "Alejandro", {}, [false]); // 16




//Spread operator
// const reptiles = ['snake', 'lizard', 'alligator'];
// const mammals = ['puppy', 'kitten', 'bunny'];

// console.log( [...reptiles] )



//Mixed destructuring

// const students = [{name:"Michel", secondName:"Cristina"}, "Hello"]

// const [object1, object2] = students

// console.log(object1, object2)
// const customer = {
//   name: {
//     firstName: 'ivan',
//     lastName: 'zoro'
//   },
//   age: 32,
//   preferences: [
//     {
//       tech: ['cameras', 'smartwatches'],
//       books: ['science fiction', 'coding']
//     }
    
//   ]
// };

// const {
//   name: { firstName, lastName },
//   age,
//   preferences: [{ tech, books }]
// } = customer;

// console.log(firstName, lastName, age); // ==> 'ivan' 'zoro' 32
// console.log(tech, books); // ==> [ 'cameras', 'smartwatches' ] [ 'science fiction', 'coding' ]

//Array destructuring 
// const campuses = ["Miami", "Barcelona", "Paris"];

// //ES5
// const firstCampus = campuses[0];
// const secondCampus = campuses[1];
// const thirdCampus = campuses[2];

//ES6
// let [ , , thirdCampus, forthCampus = null] = campuses;

// console.log(thirdCampus)

// const [firstCampus, secondCampus, thirdCampus] = campuses;

//Nested Arrays




// const europeanCampuses = [
//  ['madrid', 'es'],
//  ['barcelona', 'es'],
//  ['berlin', 'de'],
//  ['paris', 'fr'],
//  ['amsterdam', 'nl'],
//  ['lisbon', 'pt']
// ];

// const [ companyName, , [ city]] = europeanCampuses
// console.log(  country2)


//OBJECT DESTRUCTURING
// const student = {
//  name: 'Mark',
//  lastname: 'marcus',
//  age: 25,
//  address: {
//    street: '2259 west ave',
//    city: 'Miami'
//  }
// };

// let {name, lastName, age, address: {street, city} } = student



// console.log(name, age, street, city)




// const apiCall = async () => {
//   const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
//   const pokemonData = await response.json(); //extract JSON from the http response
//   // do something with myJson
//   const {id,height,name} = pokemonData
// //   console.log(pokemonData)
//   console.log(`id: ${id},height: ${height},name: ${name}`)
// }

// apiCall()



// let student = {
//  name: 'Mark',
//  age: 25,
//  address: '2259 west ave'
// };

// //ES5 

// const studentName = student.name;
// const studentAge = student.age;
// const address = student.address;
// // console.log(studentName, studentAge, address)


// //ES6 
// const { age: studentAge, name: firstName, address, phoneNumber = '64738291'} = student

// console.log(firstName, studentAge, phoneNumber)