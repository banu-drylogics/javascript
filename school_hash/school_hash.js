const { keys } = require('lodash');
const _ = require('lodash')


const school_hash = [{"teacher":"Raju","student":"Guru","subject":"History","mark1":"100","mark2":"100"},
{"teacher":"Shanta","student":"Murali","subject":"Geography","mark1":"80","mark2":"60"},
{"teacher":"Prabhu","student":"Guru","subject":"Maths","mark1":"90","mark2":"95"},
{"teacher":"Raju","student":"Murali","subject":"Civics","mark1":"100","mark2":"100"},
{"teacher":"Raju","student":"Guru","subject":"Civics","mark1":"85","mark2":"80"},
{"teacher":"Raju","student":"Jansi","subject":"Civics","mark1":"80","mark2":"70"},
{"teacher":"Raju","student":"Jansi","subject":"History","mark1":"100","mark2":"70"},
{"teacher":"Raju","student":"Murali","subject":"History","mark1":"70","mark2":"100"},
{"teacher":"Shanta","student":"Guru","subject":"Geography","mark1":"80","mark2":"90"},
{"teacher":"Shanta","student":"Jansi","subject":"Geography","mark1":"60","mark2":"100"},
{"teacher":"Prabhu","student":"Murali","subject":"Maths","mark1":"100","mark2":"85"},
{"teacher":"Prabhu","student":"Jansi","subject":"Maths","mark1":"100","mark2":"90"}]
// 1. Find the names of the students
const students =  _.map(school_hash, 'student');
console.log(_.uniq(students))

// 2. Find the name of the Teachers
const teachers =  _.map(school_hash, 'teacher');
console.log(_.uniq(teachers))

// 3. Display student marks in each subjects in ruby
// school_hash.group_by{|h|h[:student]}.map {|k,v| Hash[k,{subject:v.map{|g| Hash[g[:subject],[g[:mark1], g[:mark2]]]}}]}
const groupedHash =_.chain(school_hash)
.groupBy('student')
.mapValues((grouped) => _.map(grouped, (hash) =>  parseInt(hash.mark1) + parseInt(hash.mark2 )))
.value()
console.log(groupedHash)
// 4. Which teacher have the best success rate with students? ie what is the average marks by teacher?
const maxAvgHash =_.chain(school_hash)
.groupBy('teacher')
.mapValues((grouped) => _.map(grouped, (hash) =>  ((parseInt(hash.mark1) + parseInt(hash.mark2) / 2))))
.mapValues((array) => _.max(array))
.toPairs()
.maxBy((array) => array[1])
.thru((array) => _.fromPairs([array]))
.value()
console.log(maxAvgHash)

// 4. Which teacher have the best success rate with students? ie what is the average marks by teacher?
const values = _.chain(school_hash)
.groupBy('teacher')
.reduce((acc, array, teacherName) => {
  let a = _.max(_.map(array, (obj) => ((_.toInteger(obj.mark1) + _.toInteger(obj.mark2) / 2 ))))
    // acc[teacherName] = a
    hash = { teacherName, mark: a }
    acc.push(hash)
    // console.log(a, teacherName, acc)
    return acc
}, [])
.maxBy('mark')
// .toPairs()
// .maxBy((array) => array[1])
.value()
console.log(values)

