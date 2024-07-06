//Objetos e interfaces

interface Pessoa{
    nome: string,
    idade: number,
    profissao?: string //propriedade opcional
}

const pessoa: Pessoa ={
    nome:'Alexandre',
    idade: 28
}

const pessoa2: Pessoa ={
    nome:'Luiza',
    idade: 20,
    profissao:'estudante' 
}

//Formas de declaração de array
const arrayPessoa: Array<Pessoa> = [
    pessoa,
    pessoa2
]

const arrayNumber: number[] = [
    1,2,3
]
const arrayString: Array<String> = [
    'a','b','c'
]
