//Array

const array: Array<number> = [1,2,3,4,5]
const arrayString: string[] = ['a','b','c','d']

console.log(array[0])
console.log(arrayString.length)

console.log('Array original', array)
array.push(7)
console.log("Modificado ", array)

array.pop()//remoção

console.log("Utilizado pop - Array ", array)
