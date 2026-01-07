import { Box } from "@chakra-ui/react";

const Card = ({ children }: React.PropsWithChildren) => {
  return (
    <Box backgroundColor="#f1eef3ff" borderRadius="25px" padding="15px">
      {children}
    </Box>
  );
};

export default Card;
