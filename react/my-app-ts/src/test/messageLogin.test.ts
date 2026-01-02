import { loginMessage } from "../services/loginMessage";

describe("loginMessage", () => {
    const messageMock = jest.fn();
    window.alert = messageMock;

    it("Deve retornar uma mensagem de boas vindas com o nome do usuário", () => {
        loginMessage("João");
        expect(window.alert).toHaveBeenCalledWith("Login realizado com sucesso. Boas vindas, João!");
    })
});