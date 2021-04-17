const fs = require('fs')

const file = fs.readFileSync('./namespace.yaml')
console.log(file.toString().split('\n'))
