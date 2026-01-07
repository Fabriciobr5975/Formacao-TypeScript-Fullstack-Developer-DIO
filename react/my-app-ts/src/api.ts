
export interface Conta {
    id: string;
    email: string;
    password: string;
    name: string;
    balance: number;
}

const conta: Conta = {
    id: "1",
    email: "example@email.com",
    password: "123456",
    name: "João",
    balance: 2000.00,
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
});