//Herança

class Account{

    name: string
    accountNumber: number

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
}

const account: Account = new Account('Alexandre',7)
console.log(account)

class Admin extends Account{
    balance: number
    
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
        this.balance = 20
    }
}

const adminAccount: Admin = new Admin('Alexandre', 1)
console.log(adminAccount)