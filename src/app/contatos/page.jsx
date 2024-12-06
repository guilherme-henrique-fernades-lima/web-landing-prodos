"use client";
import styles from "./styles.module.scss";

//Components
import TitleSection from "@/shared/components/TitleSection";

//Icons
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";

export default function Contatos() {
  return (
    <section id="section-contacts" className={styles.section}>
      <TitleSection
        title="CONTATOS"
        subtitle="Entre em contato e solicite
um orçamento sem compromisso"
      />

      <div className={styles.content}>
        <div className={styles.cardsWrapper}>
          <div className={styles.card}>
            <IoIosMail />
            <div className={styles.text}>
              <h3>E-mail</h3>
              <a>email@email.com</a>
            </div>
          </div>

          <div className={styles.card}>
            <FaWhatsapp />
            <div className={styles.text}>
              <h3>Whatsapp</h3>
              <a>email@email.com</a>
            </div>
          </div>
          <div className={styles.card}>
            <IoLocationSharp />
            <div className={styles.text}>
              <h3>Endereço</h3>
              <a>email@email.com</a>
            </div>
          </div>
          <div className={styles.card}>
            <HiMiniDevicePhoneMobile />
            <div className={styles.text}>
              <h3>Redes sociais</h3>
              <a>email@email.com</a>
            </div>
          </div>
        </div>

        <div className={styles.formWrapper}></div>
      </div>
    </section>
  );
}
