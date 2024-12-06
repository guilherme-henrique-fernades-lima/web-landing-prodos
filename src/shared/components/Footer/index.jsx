"use client";
import Image from "next/image";

import styles from "@/shared/components/Footer/styles.module.scss";

//Icons
import { IoIosArrowUp } from "react-icons/io";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.containerNavs}>
        {/* <div className={styles.imgWrapper}>
          <Image
            src="/img/logo.png"
            alt="Logo da Pródos digital"
            width={200}
            height={200}
            quality={100}
          />

          <div className={styles.prodos}>
            <h3>PRÓDOS DIGITAL</h3>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </span>
          </div>
        </div> */}

        <div className={styles.navWrapper}>
          <div className={styles.grid}>
            <div className={styles.nav}>
              <div className={styles.imgWrapper}>
                <Image
                  src="/img/logo.png"
                  alt="Logo da Pródos digital"
                  width={200}
                  height={200}
                  quality={100}
                />

                <div className={styles.prodos}>
                  <h4>PRÓDOS DIGITAL</h4>
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.nav}>
              <h4>NAVEGAÇÃO</h4>
              <ul className={styles.navList}>
                <li className={styles.navItem}>Home</li>
                <li className={styles.navItem}>Serviços</li>
                <li className={styles.navItem}>Quem somos</li>
                <li className={styles.navItem}>Clientes</li>
                <li className={styles.navItem}>Contatos</li>
              </ul>
            </div>

            <div className={styles.nav}>
              <h4>NAVEGAÇÃO</h4>
              <ul className={styles.navList}>
                <li className={styles.navItem}>Home</li>
                <li className={styles.navItem}>Serviços</li>
                <li className={styles.navItem}>Quem somos</li>
                <li className={styles.navItem}>Clientes</li>
                <li className={styles.navItem}>Contatos</li>
              </ul>
            </div>

            <div className={styles.nav}>
              <h4>NAVEGAÇÃO</h4>
              <ul className={styles.navList}>
                <li className={styles.navItem}>Home</li>
                <li className={styles.navItem}>Serviços</li>
                <li className={styles.navItem}>Quem somos</li>
                <li className={styles.navItem}>Clientes</li>
                <li className={styles.navItem}>Contatos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.divider} />
      <div className={styles.containerCopyright}>
        <span>
          2024. <strong>PRÓDOS DIGITAL</strong>. Todos os direitos reservados.
        </span>
        <div className={styles.upButton}>
          <IoIosArrowUp />
        </div>
      </div>
    </div>
  );
}
