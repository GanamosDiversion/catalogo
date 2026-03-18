import ClienteWrapper from "@/_EXTRAS/LadoCliente/ClienteWraper";
import { metadata } from "./metadataHeader";
import Header from "@/_Pages/main/header/header";
import Footer from "@/_Pages/main/footer/Footer";
export default function MainLayout({ children }) {
  return (
    <>
      <ClienteWrapper>
        <Header/>
      </ClienteWrapper>
      <ClienteWrapper>{children}</ClienteWrapper>
      <ClienteWrapper>
        <Footer/>
      </ClienteWrapper>
    </>
  );
}
