import { AccountTest } from "./class/AccountTest";
import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(123456789, "João", 1);
peopleAccount.deposit(500);
peopleAccount.withdraw(200);
console.log(peopleAccount.extract());

console.log("--------------------------------------------------");

const companyAccount: CompanyAccount = new CompanyAccount("Maria", 2);
companyAccount.deposit(10000);
companyAccount.getLoan(10000);
companyAccount.withdraw(15000);
console.log(companyAccount.extract());

console.log("--------------------------------------------------");

const accountTest: AccountTest = new AccountTest("Teste", 3);
accountTest.deposit(500);
accountTest.withdraw(200);
console.log(accountTest.extract());

