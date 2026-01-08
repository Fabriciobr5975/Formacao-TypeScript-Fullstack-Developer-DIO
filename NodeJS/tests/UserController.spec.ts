import { Request } from "express";
import { UserController } from "../src/controllers/UserController";
import { UserService } from "../src/service/UserService";
import { makeMockResponse } from "./__mocks__/mockResponse.mock";

describe("UserController", () => {
    const mockUserService: Partial<UserService> = {
        createUser: jest.fn(),
        getAllUsers: jest.fn(),
        deleteUser: jest.fn()
    }

    const mockName = "João";
    const mockEmail = "exemplo@email.com";

    const userController = new UserController(mockUserService as UserService);

    it("Deve adicionar um novo usuário", () => {
        const mockRequest = {
            body: {
                name: mockName,
                email: mockEmail,
            }
        } as Request

        const mockResponse = makeMockResponse();
        userController.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(201);
        expect(mockResponse.state.json).toMatchObject({ message: "Usuário criado" })
    });

    it("Não Deve adicionar um novo usuário sem nome", () => {
        const mockRequest = {
            body: {
                name: "",
                email: mockEmail,
            }
        } as Request

        const mockResponse = makeMockResponse();
        userController.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(400);
    });

    it("Não Deve adicionar um novo usuário sem Email", () => {
        const mockRequest = {
            body: {
                name: mockName,
                email: "",
            }
        } as Request

        const mockResponse = makeMockResponse();
        userController.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(400);
    });

    it("Deve buscar todos os usuários inseridos", () => {
        const mockRequest = {
            body: {
                name: mockName,
                email: "",
            }
        } as Request

        const mockResponse = makeMockResponse();
        userController.getAllUsers(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(200);
    });

    it("Deve remover um usuário inserido", () => {
        const deleteUserMock = mockUserService.deleteUser as jest.Mock;
        deleteUserMock.mockReturnValue(true);

        const mockRequest = {
            body: {
                name: mockName,
                email: mockEmail,
            }
        } as Request

        const mockResponse = makeMockResponse();
        userController.deleteUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(200);
    });

    it("Não Deve remover um usuário inserido", () => {
        (mockUserService.deleteUser as jest.Mock).mockReturnValue(false);

        const mockRequest = {
            body: {
                name: "",
                email: mockEmail,
            }
        } as Request

        const mockResponse = makeMockResponse();
        userController.deleteUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(404);
    });
});