//Array

const array: Array<number> = [1,2,3,4,5]
const arrayString: string[] = ['a','b','c','d']

const buscarNum = array.find(num => num === 4)
//const buscarNum = array.find(num => num > 2) - retorna o primeiro elemento que seja maior que 2

console.log(buscarNum)


//Array Foreach

array.forEach(num => console.log(num))

array.forEach(num => {
    if(num > 2 && num % 2 === 0 ){
        console.log('resultado = ', num * 2)
    }
}
)

//array map - mais performatico

array.map(num => console.log(num))