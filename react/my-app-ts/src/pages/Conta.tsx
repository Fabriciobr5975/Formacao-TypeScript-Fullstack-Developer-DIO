import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api";
import CardInfo from "../components/CardInfo";
import { AppContext } from "../components/AppContext";

interface UserData {
  id: string;
  email: string;
  password: string;
  name: string;
  balance: number;
}

const Conta = () => {
  const [userData, setUserData] = useState<UserData | null>();
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoggedIn } = useContext(AppContext);

  !isLoggedIn && navigate("/");

  useEffect(() => {
    const getData = async () => {
      const data: UserData | any = await api;
      setUserData(data);
    };

    getData();
  }, []);

  const actualData = new Date();

  if (userData && id !== userData?.id) {
    navigate("/");
  }

  return (
    <Center>
      <SimpleGrid columns={2} columnGap={8} pt={16}>
        {!userData ? (
          <Center>
            <Spinner size="xl"></Spinner>
          </Center>
        ) : (
          <>
            <CardInfo
              mainContent={`Bem vindo ${userData?.name}`}
              content={`${actualData.getDay().toString().padStart(2, "0")}/${(
                actualData.getMonth() + 1
              )
                .toString()
                .padStart(
                  2,
                  "0"
                )}/${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`}
            />
            <CardInfo mainContent="Saldo" content={`R$ ${userData?.balance}`} />
          </>
        )}
      </SimpleGrid>
    </Center>
  );
};

export default Conta;
