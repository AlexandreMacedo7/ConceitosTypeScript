export abstract class Account{

    name: string
    accountNumber: number
    balance: number = 0

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit = () => {
        console.log('Você fez um deposito')
    }

    whitdraw = () =>{
        console.log('Você fez um saque')
    }

    getBalance = () =>{
        console.log(this.balance)
    }
}