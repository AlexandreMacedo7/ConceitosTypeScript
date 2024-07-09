import { CompanyAccount } from "./CompanyAccount"
import { PeopleAccount } from "./PeopleAccount"


const account: PeopleAccount = new PeopleAccount(1,'Alexandre',7)
console.log(account)


const companyAccount: CompanyAccount = new CompanyAccount('A_Mac',2)
console.log(companyAccount)