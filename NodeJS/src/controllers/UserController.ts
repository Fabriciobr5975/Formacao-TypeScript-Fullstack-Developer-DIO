import type { Request, Response } from "express";
import { UserService } from "../service/UserService";

export class UserController {
    userService: UserService;

    constructor(userService = new UserService()) {
        this.userService = userService;
    }

    createUser = (request: Request, response: Response) => {
        const user = request.body;

        if (!user.name || user.name.trim() === "") {
            return response.status(400).json({ message: "Nome é obrigatório" });
        }

        if (!user.name || user.email.trim() === "") {
            return response.status(400).json({ message: "Email é obrigatório" });
        }

        this.userService.createUser(user.name, user.email);
        return response.status(201).json({ message: "Usuário criado" });
    }

    getAllUsers = (request: Request, response: Response) => {
        const users = this.userService.getAllUsers();
        return response.status(200).json({ users });
    }

    deleteUser = (request: Request, response: Response) => {
        const user = request.body;
        const result = this.userService.deleteUser(user.name);
        console.log(result);

        if (!result) {
            return response.status(404).json({ message: "Usuário não encontrado" });
        }

        return response.status(200).json({ message: "Usuário removido com sucesso" });
    }
}