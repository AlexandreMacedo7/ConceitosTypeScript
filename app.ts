//Decissões e repetições

//const num: number = 20

//if(num > 20){
//    console.log('Num maior que 20')
//}
//else if(num === 20){ //compara tipo e valor
 //   console.log('Num é igual a 20')
//}
//else{
//    console.log('Num é menor que 20')
//}

const typeUser = {
    admin: 'Seja bem vindo admin',
    student: 'Seja bem vindo estudante',
    viewer: 'Seja bem vindo, você só pode vizualizar'
}

function validateUser(user: string){
    //A linha abaixo obtém o valor associado à chave `user` em `typeUser`
    // `user as keyof typeof typeUser` assegura que `user` é uma chave válida em `typeUser`
    console.log(typeUser[user as keyof typeof typeUser])
}

const user = 'student'

validateUser(user)