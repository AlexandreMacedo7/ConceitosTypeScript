import { Account } from "./Account"

export class CompanyAccount extends Account{

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = () => {
        console.log("Você fez um empréstimo")
    }
}