const { keys } = require('lodash');
const _ = require('lodash');

const fs = require("fs");
csv = fs.readFileSync('mock_data.json', 'utf8');
// const rawValues = csv.toString();
const rawValues = JSON.parse(csv)
// children - person below 18
children = _.filter(rawValues, (hash) => hash.age < "18")
// console.log(children)
// adults - every other person
adults = _.filter(rawValues, (hash) => hash.age >= "18")
// console.log(adults)

// 1. filter by age under 30 and has the skills 'run' or 'swim'.
const under30 = _.chain(adults)
.filter((hash) => ((hash.age < 30) && ((hash.skills === 'swim')|| (hash.skills === 'run'))))
.value()
// console.log(under30)

// 2. list all children who can swim or dance, and sort by gender and age.
const swimDanceChildren = _.chain(children)
.filter((hash) => (hash.skills === "swim") || (hash.skills === 'dance'))
.sortBy((hash) => hash.age)
.map("first_name")
.value()

// console.log(swimDanceChildren)

// 3. get an array of population, which contains all the people (adults and children) in the array.

// 4. filter by people who have daughters and are not married.
const daughtersWithUnmarried = _.chain(adults)
.filter((hash) => (!(hash.married)) && (hash.gender === 'Female'))
.map("first_name")
.value()
// console.log(daughtersWithUnmarried)
// 5. filter by married people who can jump.
const marriedAndJumpAdults = _.chain(adults)
.filter((hash) => (hash.married) && (hash.skills === 'jump'))
.map("first_name")
.value()
// console.log(marriedAndJumpAdults)
// 6. filter by people who have last name that starts with 'j' or later in the alphabet, and have married children.
const startWithJ = _.chain(rawValues)
.filter((hash) => (_.startsWith(hash.last_name, ('J')) && (hash.married)))
// .filter((hash) => (hash.last_name[0] == 'J') && (hash.married))
.map("first_name")
.value()
// console.log(startWithJ)
// 7. change the collection so that the name of each person is: name: {first: 'string', last: 'string'} instead of firstName and lastName
// [
//     {
//     "name": {
//         "first": "Madelaine",
//         "last": "Druett"
//     },
//     "age": 53,
//     "gender": "Female",
//     "skills": "jump",
//     "married": true
//   }
// ]

const updatedObject = _.chain(rawValues)
.map((hash) => {
    // let ommittedHash = _.omit(hash, ["age","gender","skills","married"]);
    // let newHashes = _.omit(hash, ["first_name","last_name"]);
    // let createdHash  = { "name": { first: hash.first_name, last: hash.last_name } };
    // return _.merge(createdHash, newHashes);
    // return {...createdHash,...newHashes}

    const { first_name: first,last_name: last,...rest } = hash;
    return {name: {first, last},...rest}

})
.value()
// console.log(updatedObject)


// statesObj = _.map(rawValues, (hash) =>{
//     return _.omit(hash, ["age","gender","skills","married"])
// })
// .map((hash) => console.log())
// console.log(statesObj)

// 8. get an array of all children
const arrayChildren = _.map(rawValues,"first_name")
// _.chain(children)
// .map("first_name")
// .value()
console.log(arrayChildren)
// 9. get an array of just the ages
const age = _.map(rawValues,"age")
// _.chain(rawValues)
// .map("age")
// .value()
// console.log(age)
