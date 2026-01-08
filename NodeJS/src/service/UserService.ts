export interface  User {
    name: string;
    email: string
}

const database: User[] = [
    {
        name: "João",
        email: "exemplo@email.com",
    }
]

export class UserService {
    database: User[];

    constructor(dataBase = database) {
        this.database = dataBase
    }

    createUser(name: string, email: string) {
        const user = {
            name,
            email
        }

        this.database.push(user);
        console.log("DB atualizado:", database);
    }

    getAllUsers() {
        return this.database;
    }

    deleteUser(name: string) {
        const posicaoUsuario = database.findIndex((user: User) => user.name === name);

        if(posicaoUsuario === -1) {
            return false;
        }

        database.splice(posicaoUsuario, 1);
        return true;
    }
}