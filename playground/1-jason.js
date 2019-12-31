const fs = require('fs')

// const book = {
//     title: 'Best of Life',
//     author: 'Ibrahim wali'
// }

// //must convert json data into string before save into file
// fs.writeFileSync('1-json.json', JSON.stringify(book))

const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString()
const data = JSON.parse(dataJson)

data.name = 'Ibrahim'
data.age = '26'

const dataString = JSON.stringify(data)
fs.writeFileSync('1-json.json', dataString)

console.log(data)
console.log(dataString)