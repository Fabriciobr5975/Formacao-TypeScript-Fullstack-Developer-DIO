import { Box, CardRoot, CardTitle, Center, Input } from "@chakra-ui/react";
import { loginMessage } from "../../services/loginMessage";
import ButtonComponent from "../Button/Button";

const CardLogin = () => {
  return (
    <CardRoot border="none">
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
              <CardTitle fontSize="1.5rem" marginBottom="20px">
                Faça o login
              </CardTitle>
            </Center>
            <Box display="flex" flexDirection="column" rowGap="1.5rem">
              <Input
                placeholder="email"
                borderWidth="2px"
                borderColor="#c5c5c5ff"
              />
              <Input
                placeholder="senha"
                type="password"
                borderWidth="2px"
                borderColor="#c5c5c5ff"
              />
            </Box>
            <Center>
              <ButtonComponent
                label="Entrar"
                type="submit"
                backgroundColor="#442c66"
                onClick={() => loginMessage("João")}
              />
            </Center>
          </Box>
        </Center>
      </Box>
    </CardRoot>
  );
};

export default CardLogin;
