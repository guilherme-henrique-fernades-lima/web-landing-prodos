"use client";
import Marquee from "react-fast-marquee";

import styles from "./nossosClientes.module.scss";

//Components
import TitleSection from "@/shared/components/TitleSection";

export default function OurClients() {
  return (
    <section id="services-section" className={styles.section}>
      <TitleSection
        title="NOSSOS CLIENTES"
        subtitle="Conheça nossos parceiros que confiam no nosso trabalho"
      />

      <div className={styles.containerCarouselClients}>
        <Marquee
          autoFill
          gradient
          loop={0}
          direction="left"
          speed={45}
          gradientColor={"#0f0f0f"}
        >
          {[1, 2, 3, 4, 5, 6].map((card, index) => (
            <div className={styles.card} key={index}>
              <span>LOGO DO PARCEIRO</span>
            </div>
          ))}
        </Marquee>

        <div className={styles.dividerSpace} />

        <Marquee
          autoFill
          gradient
          loop={0}
          direction="rigth"
          speed={45}
          gradientColor={"#0f0f0f"}
        >
          {[1, 2, 3, 4, 5, 6].map((card, index) => (
            <div className={styles.card} key={index}>
              <span>LOGO DO PARCEIRO</span>
            </div>
          ))}
        </Marquee>

        <div className={styles.dividerSpace} />

        <Marquee
          autoFill
          gradient
          loop={0}
          direction="left"
          speed={45}
          gradientColor={"#0f0f0f"}
        >
          {[1, 2, 3, 4, 5, 6].map((card, index) => (
            <div className={styles.card} key={index}>
              <span>LOGO DO PARCEIRO</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
