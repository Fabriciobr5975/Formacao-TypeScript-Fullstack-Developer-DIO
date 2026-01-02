import Footer from "./Footer";
import Header from "./Header/Header";

export const Layout = ({ children } : React.PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
