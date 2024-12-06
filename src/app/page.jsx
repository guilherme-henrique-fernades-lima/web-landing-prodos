"use client";

//Pages
import Home from "./home/page";
import Services from "./servicos/page";
import OurClients from "./nossos-clientes/page";
import Portfolio from "./portfolio/page";
import CallToAction from "./call-to-action/page";
import Faq from "./faq/page";
import Contacs from "./contatos/page";

//Components
import Footer from "../shared/components/Footer";

export default function Index() {
  return (
    <>
      <Home />
      <Services />
      <CallToAction />
      <OurClients />
      <Portfolio />
      <Contacs />
      <Faq />
      <Footer />
    </>
  );
}
