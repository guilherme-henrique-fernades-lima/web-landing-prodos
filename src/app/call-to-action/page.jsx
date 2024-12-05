"use client";

import styles from "./styles.module.scss";

//Components
import TitleSection from "@/shared/components/TitleSection";
import ButtonAnchor from "@/shared/components/ButtonAnchor";

export default function CallToAction() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div>
          <h3>Transforme ideias em resultados reais! 🚀</h3>
          <p>
            Desenvolvemos soluções personalizadas para o seu negócio, unindo
            estratégias de marketing digital e tecnologia de ponta. Seja para
            conquistar novos clientes, otimizar processos ou aumentar sua
            presença online, estamos prontos para ajudar.
          </p>
          <p>
            Entre em contato agora e descubra como podemos impulsionar seu
            sucesso!
          </p>

          <div style={{ marginTop: "30px" }} />
          <ButtonAnchor label="Entre em contato" />
        </div>
      </div>
    </section>
  );
}
