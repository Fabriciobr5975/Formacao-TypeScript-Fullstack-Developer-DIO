import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    getLoan = (value: number): void => {
        if (this.validateStatus()) {
            this.setBalance(this.getBalance() + value);
        }
    }

    extract = (): string => {
        return `Companhia: ${this.getName()}, Número da conta: ${this.getAccountNumber()}, Saldo: ${this.getBalance()}`;
    }
}
