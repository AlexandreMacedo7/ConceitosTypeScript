export abstract class Account{

    private name: string
    private readonly accountNumber: number //apenas leitura
    private balance: number = 0
    private statusAccount = true

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit = (amount : number): void => {
        if(this.validadeStatus()){
            this.balance =+ amount
        console.log('Você fez um deposito de: R$', amount,'- seu saldo atual é de: R$', this.balance)
        }
    }

    whitdraw = (amount: number): void =>{
        if(this.validadeStatus() && this.validadeBalance(amount)){
            this.balance = this.balance - amount
            console.log('Você fez um saque de: R$', amount, '- seu saldo atual é de: R$ ', this.balance)
        }
    }    

    getBalance = (): number =>{
        return this.balance
    }
    setBalance = (amount: number): void =>{
        this.balance = amount
    }

    protected validadeStatus = (): boolean => {
        if(this.statusAccount){
            return this.statusAccount
        }
        throw new Error('Conta inválida')
    }

    private validadeBalance = (amount : number): boolean =>{
        if(this.balance >= amount){
            return true
        }
        throw new Error('Saldo insuficiente')
    }
}