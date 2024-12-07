"use client";
import Image from "next/image";

import styles from "./styles.module.scss";

//Components
import TitleSection from "@/shared/components/TitleSection";

//Icons
import { FaLaptopCode } from "react-icons/fa";
import { MdRocketLaunch } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";

export default function AboutUs() {
  return (
    <section id="section-contacts" className={styles.section}>
      <TitleSection
        title="SOBRE NÓS"
        subtitle="Saiba um pouco mais sobre a nossa história"
      />

      <div className={styles.content}>
        <div className={styles.containerHistory}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's orem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's orem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's orem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
          </p>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's orem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
          </p>
        </div>

        <div className={styles.containerImage}>
          <Image
            src="/img/logo_full.png"
            alt="Logo da Pródos Digital"
            fill
            quality={100}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className={styles.containerCards}>
        <div className={styles.card}>
          <FaLaptopCode />
          <h3>
            TECNOLOGIA
            <br />
            DE PONTA
          </h3>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </span>
        </div>

        <div className={styles.card}>
          <HiOutlineLightBulb />
          <h3>
            SOLUÇÕES
            <br />
            CRIATIVAS
          </h3>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </span>
        </div>

        <div className={styles.card}>
          <MdRocketLaunch />
          <h3>
            RESULTADOS
            <br />
            COMPROVADOS
          </h3>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </span>
        </div>

        <div className={styles.card}>
          <IoIosPeople />
          <h3>
            EQUIPE
            <br />
            EXPERIENTE
          </h3>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </span>
        </div>
      </div>
    </section>
  );
}
