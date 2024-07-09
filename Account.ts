export abstract class Account{

    name: string
    accountNumber: number
    balance: number = 0

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit = (): void => {
        console.log('Você fez um deposito')
    }

    whitdraw = (): void =>{
        console.log('Você fez um saque')
    }

    getBalance = (): void =>{
        console.log(this.balance)
    }
}