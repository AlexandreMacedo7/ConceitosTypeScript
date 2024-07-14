import { CompanyAccount } from "./CompanyAccount";
import { PeopleAccount } from "./PeopleAccount";
import { PersonalizedAccout } from './PersonalizedAccount';


const account: PeopleAccount = new PeopleAccount(1,'Alexandre',7)
account.deposit(100)
account.whitdraw(100)


const companyAccount: CompanyAccount = new CompanyAccount('A_Mac',2)
companyAccount.deposit(1000)
companyAccount.whitdraw(600)
companyAccount.getLoan(100000)

const personalized: PersonalizedAccout = new PersonalizedAccout('Mac', 2)
personalized.deposit(100)