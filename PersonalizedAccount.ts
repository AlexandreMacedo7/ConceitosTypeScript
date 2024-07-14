import { Account } from "./Account";

export class PersonalizedAccout extends Account{

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    deposit = (amount: number): void =>{
        if(this.validadeStatus()){
        this.setBalance(amount + 10)
        console.log('Você fez um depósito: de R$', amount, '- Saldo atual com bônus a mais de 10: R$', this.getBalance())
        }
    }
}