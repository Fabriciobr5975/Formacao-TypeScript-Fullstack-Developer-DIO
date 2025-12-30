import { DioAccount } from "./DioAccount";

export class AccountTest extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    deposit = (value: number) => {
        if (this.validateStatus()) {
            this.setBalance(this.getBalance() + value + 10);
        }
    }
}