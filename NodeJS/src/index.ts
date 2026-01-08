import type { Request, Response } from "express";
import express from "express";
import { router } from "./routes";

const server = express();
server.use(express.json());

server.get("/", (request: Request, response: Response) => {
    return response.status(200).send({ message: "DioBank API" });
});

server.use(router);

server.listen(5000, () => console.log("Server is running on http://localhost:5000"));