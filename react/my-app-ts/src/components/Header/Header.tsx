import { CardHeader, CardTitle, CardRoot, Image } from "@chakra-ui/react";

const Header = () => {
  return (
    <CardRoot border="none">
      <CardHeader bg="#442c66ff" color="white" p="15px" display="flex" flexDirection="row" alignItems="center" gap="10px">
        <Image src="/assets/images/logo.png" alt="Logo" w="125px" h="125px" boxSize="100px" />
        <CardTitle fontSize="x-large">Dio Bank</CardTitle>
      </CardHeader>
    </CardRoot>
  );
};

export default Header;
