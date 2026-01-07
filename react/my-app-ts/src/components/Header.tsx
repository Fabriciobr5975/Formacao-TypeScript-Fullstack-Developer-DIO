import {
  Box,
  Button,
  CardRoot,
  CardTitle,
  Flex,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../../services/storage";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    changeLocalStorage({login: false});
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <CardRoot border="none">
      <Flex bg="#442c66ff" padding="5px" alignItems="center">
        <Box
          color="white"
          p="15px"
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap="10px"
        >
          <Image
            src="/assets/images/logo.png"
            alt="Logo"
            w="125px"
            h="125px"
            boxSize="100px"
          />
          <CardTitle fontSize="x-large">Dio Bank</CardTitle>
        </Box>
        <Spacer />
        {isLoggedIn && (
          <Button bg="#fff" color="#000" onClick={() => logout()}>
            Sair
          </Button>
        )}
      </Flex>
    </CardRoot>
  );
};

export default Header;
