import { login } from "../services/login";

//const mockSetIsLoggedIn = jest.fn();
//const mockNavigate = jest.fn();

// jest.mock("react", () => ({
// ...jest.requireActual("react"),
// useContext: () => ({
// setIsLoggedIn: mockSetIsLoggedIn
// })
// }));

// jest.mock('react-router-dom', () => ({
// ...jest.requireActual('react-router-dom') as any,
// useNavigate: () => mockNavigate
// }));

describe("login", () => {
    //const mockAlert = jest.fn();
    //window.alert = mockAlert;
    const email = "example@email.com"
    const password = "123456"

    it("Deve retornar true se as credenciais de acesso seja verdadeiras", async () => {
        const response = await login(email, password);
        expect(response).toBeTruthy();
    });

    it("Deve trazer informações do usuário corretamente", async () => {
        const response = await login(email, password);
        expect(response).toBeTruthy();
    });

    it("Deve retornar false caso o email esteja vazio", async () => {
        const response = await login("", password);
        expect(response).toBeFalsy();
    });

    it("Deve retornar false caso a senha esteja vazio", async () => {
        const response = await login(email, "");
        expect(response).toBeFalsy();
    });

    it("Deve retornar false caso o email seja inválido", async () => {
        const response = await login("email@invalido.com", password);
        expect(response).toBeFalsy();
    });

    it("Deve retornar false caso a senha seja inválida", async () => {
        const response = await login(email, "12345");
        expect(response).toBeFalsy();
    });
});