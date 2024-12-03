"use client";
import { useState } from "react";

import styles from "@/shared/components/LayoutClientSide/Layout.module.css";

//Components
import LogoHeader from "@/shared/components/LogoHeader";
import ContainerMediaQueryWrapper from "@/shared/components/ContainerMediaQueryWrapper";

//Icons
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function LayoutClientSide({ children }) {
  const [section, setSection] = useState("home");

  return (
    <main className={styles.containerPage}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContacts}>
          <ContainerMediaQueryWrapper>
            <div className={styles.contentContacts}>
              <div className={styles.socialIcons}>
                <FaInstagram />
                <FaFacebookSquare />
                <FaLinkedin />
                <FaSquareXTwitter />
                <FaYoutube />
              </div>
              <div className={styles.contacts}>
                <div className={styles.phone}>
                  <FaPhoneAlt />
                  <a href="#">86 99999-9999</a>
                </div>

                <div className={styles.email}>
                  <IoMdMail />
                  <a href="#">email@email.com</a>
                </div>
              </div>
            </div>
          </ContainerMediaQueryWrapper>
        </div>

        <header className={styles.header}>
          <ContainerMediaQueryWrapper>
            <div className={styles.headerContent}>
              <LogoHeader />

              <nav className={styles.nav}>
                <ul className={styles.navList}>
                  <li className={styles.navItem}>
                    <a
                      href="#home"
                      className={`${styles.navLink} ${
                        section === "home" ? styles.active : ""
                      }`}
                    >
                      HOME
                    </a>
                  </li>
                  <li className={styles.navItem}>
                    <a href="#about" className={styles.navLink}>
                      SERVIÇOS
                    </a>
                  </li>
                  <li className={styles.navItem}>
                    <a href="#services" className={styles.navLink}>
                      QUEM SOMOS
                    </a>
                  </li>
                  <li className={styles.navItem}>
                    <a href="#contact" className={styles.navLink}>
                      CLIENTES
                    </a>
                  </li>

                  <li className={styles.navItem}>
                    <a href="#contact" className={styles.navLink}>
                      CONTATOS
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </ContainerMediaQueryWrapper>
        </header>
      </div>

      {children}
    </main>
  );
}
