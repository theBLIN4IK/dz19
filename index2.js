const lodash = require("lodash")

const arr1 = [1, 2, 3, 4, 5, 6, 7]
const doFunArr = lodash.chunk(arr1, 3)
console.log('arr1:', doFunArr)

const arr2 = [5, 15, 20, 25, 30, 35, -5, -15, -20, -25, -30, -35]
const filter = lodash.filter(arr2, num => num > 20)
console.log('arr2:', filter)

const arr3 = 'hello world'
const doHighFirst = lodash.capitalize(arr3)
console.log('arr3:', doHighFirst)