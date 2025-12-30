export abstract class DioAccount {
    private readonly name: string;
    private readonly accountNumber: number;
    private balance: number;
    private status: boolean;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.balance = 0;
        this.status = true;
    }

    // Getters and Setters
    getName(): string { return this.name; }
    getAccountNumber(): number { return this.accountNumber; }
    setBalance(balance: number): void { this.balance = balance; }
    getBalance(): number { return this.balance; }

    deposit = (value: number): void => {
         if (this.validateStatus()) {
            this.balance += value;
        }
    }

    withdraw = (value: number): void => {
        if (this.validateStatus() && this.balance >= value) {
            this.balance -= value;
        }
    }

    protected validateStatus = (): boolean => {
        if (this.status) {
            return this.status;
        }

        throw new Error("Conta inválida");
    }

    extract = (): string => {
        return `Nome: ${this.name}, Número da conta: ${this.accountNumber}, Saldo: ${this.balance}`;
    }
}  
