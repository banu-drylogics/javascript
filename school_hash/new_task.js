const { keys } = require('lodash');
const _ = require('lodash')


const array_of_hash = [{name: 'John Smith', age: 54, favorites: ['food', 'movies']},
 {name: 'Mary Smith', age: 42, favorites: ['food', 'travel']},
 {name: 'Peter Pan', age: 15, favorites: ['minecraft', 'pokemo']},
 {name: 'Joe Johnson', age: 46, favorites: ['travel', 'movies']},
 {name: 'Ben Smith', age: 35, favorites: ['craft', 'food']}]

 // What are all the unique last names?
const last_names = _.chain(array_of_hash)
.map((hash) => hash.name)
.map((val) => val.split(" ")[1])
.value()
console.log(_.uniq(last_names))

// What are all the unique favorites?
const favorites_hash = [{name: 'John Smith', age: 54, favorites: ['food', 'movies']},
 {name: 'Mary Smith', age: 42, favorites: ['food', 'travel']},
 {name: 'Peter Pan', age: 15, favorites: ['minecraft', 'pokemo']},
 {name: 'Joe Johnson', age: 46, favorites: ['travel', 'movies']},
 {name: 'Ben Smith', age: 35, favorites: ['craft', 'food']}]


const favorites_names = _.chain(favorites_hash)
.map((hash) => hash.favorites)
.value()
console.log(_.uniq(_.flatten(favorites_names)))
