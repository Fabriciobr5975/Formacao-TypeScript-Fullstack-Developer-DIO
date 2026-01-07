import { Box, Center, Input } from "@chakra-ui/react";
import { useState } from "react";
import { login } from "../services/login";
import ButtonComponent from "./Button/Button";

const CardLogin = ({}) => {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  return (
    <Box minHeight="100vh" backgroundColor="#f1eef3ff" padding="50px">
      <Center>
        <Box
          width="50vw"
          backgroundColor="#fff"
          borderRadius="25px"
          padding="15px"
          display="flex"
          flexDirection="column"
          rowGap="2rem"
        >
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Box display="flex" flexDirection="column" rowGap="1.5rem">
            <Input
              placeholder="email"
              borderWidth="2px"
              borderColor="#c5c5c5ff"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              placeholder="senha"
              type="password"
              borderWidth="2px"
              borderColor="#c5c5c5ff"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
            />
          </Box>
          <Center>
            <ButtonComponent
              label="Entrar"
              type="submit"
              backgroundColor="#442c66"
              onClick={() => login(email)}
            />
          </Center>
        </Box>
      </Center>
    </Box>
  );
};

export default CardLogin;
