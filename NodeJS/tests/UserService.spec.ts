import { User, UserService } from "../src/service/UserService";

describe("UserService", () => {
    const mockDB: User[] = [];
    const userService = new UserService(mockDB);

    it("Deve adicionar um novo usuário", () => {
        const mockConsole = jest.spyOn(global.console, "log");
        userService.createUser("João", "exemplo@email.com");
        expect(mockConsole).toHaveBeenCalledWith("DB atualizado:", mockDB);
    });

    it("Deve retornar todos os usuários encontrados", () => {
        const result = userService.getAllUsers();
        expect(result).not.toBeNull();
        expect(result).toHaveLength(1);
    })

    it("Deve remover um usuário que exista", () => {
        const result = userService.deleteUser("João");
        expect(result).toBeTruthy();
    })

    it("Não deve remover remover um usuário que não exista", () => {
        const result = userService.deleteUser("João");
        expect(result).toBeFalsy();
    })
})