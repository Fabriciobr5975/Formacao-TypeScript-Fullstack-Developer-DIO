import {
  ChakraProvider,
  defaultSystem
} from "@chakra-ui/react";

import CardLogin from "./components/CardLogin";
import Header from "./components/Header/Header";

function App() {
  return (
    <ChakraProvider value={defaultSystem} >
      <Header />
      <CardLogin />
    </ChakraProvider>
  );
}

export default App;
