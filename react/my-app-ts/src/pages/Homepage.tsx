import { Box, Button, Center, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import Card from "../components/Card";
import { login } from "../services/login";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const validateUser = async (email: string, password: string) => {
    const loggedIn = await login(email, password);

    if (!loggedIn) {
      return alert("Email inválido!");
    }

    setIsLoggedIn(true);
    changeLocalStorage({ login: true });
    navigate(`/conta/${1}`);
  };

  return (
    <Box padding="25px">
      <Card>
        <Center>
          <h1>Faça o Login</h1>
        </Center>
        <Input
          borderColor="#adadadff"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          borderColor="#adadadff"
          placeholder="senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button onClick={() => validateUser(email, password)}>Entrar</Button>
      </Card>
    </Box>
  );
};

export default Home;
