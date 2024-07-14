import { Account } from "./Account"

export class CompanyAccount extends Account{

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = (amount: number): void =>{
        if(this.validadeStatus())
            this.setBalance(amount + this.getBalance())
        console.log('Você fez um empréstimo de: R$', amount, 'Seu saldo atual é de: R$', this.getBalance())
    }
}