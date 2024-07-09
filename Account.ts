export abstract class Account{

    private name: string
    private accountNumber: number
    private balance: number = 0
    private statusAccount = true

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit = (): void => {
        if(this.validadeStatus()){
        console.log('Você fez um deposito')
        }
    }

    whitdraw = (): void =>{
        if(this.validadeStatus()){
            console.log('Você fez um saque')
        }
    }    

    getBalance = (): void =>{
        console.log(this.balance)
    }

    private validadeStatus = (): boolean => {
        if(this.statusAccount){
            return this.statusAccount
        }
        throw new Error('Conta inválida')
    }
}