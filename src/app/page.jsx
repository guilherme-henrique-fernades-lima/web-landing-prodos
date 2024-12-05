"use client";

//Pages
import Home from "./home/page";
import Services from "./servicos/page";
import OurClients from "./nossos-clientes/page";
import Portfolio from "./portfolio/page";
import CallToAction from "./call-to-action/page";

export default function Index() {
  return (
    <>
      <Home />
      <Services />
      <CallToAction />
      <OurClients />
      <Portfolio />
    </>
  );
}
