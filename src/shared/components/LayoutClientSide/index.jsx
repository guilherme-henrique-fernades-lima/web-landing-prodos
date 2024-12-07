"use client";
import { useState, useEffect } from "react";

import styles from "@/shared/components/LayoutClientSide/Layout.module.scss";

//Components
import LogoHeader from "@/shared/components/LogoHeader";

//Icons
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export default function LayoutClientSide({ children }) {
  const [section, setSection] = useState("home-section");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  function setSectionNavbar(target) {
    setSection(target);
  }

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <main className={styles.containerPage}>
      {isMenuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsMenuOpen(false)} // Fecha o drawer ao clicar no overlay
        ></div>
      )}

      <div className={styles.headerContainer}>
        <div className={styles.headerContacts}>
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
        </div>

        <header className={styles.header}>
          <div className={styles.headerContent}>
            <LogoHeader />

            <nav className={styles.nav}>
              <ul className={styles.navList}>
                <li className={styles.navItem}>
                  <a
                    id="home-section"
                    onClick={(e) => setSectionNavbar(e.target.id)}
                    href="#home"
                    className={`${styles.navLink} ${
                      section === "home-section" ? styles.active : ""
                    }`}
                  >
                    HOME
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a
                    href="#about"
                    className={`${styles.navLink} ${
                      section === "services-section" ? styles.active : ""
                    }`}
                    id="services-section"
                    onClick={(e) => setSectionNavbar(e.target.id)}
                  >
                    SERVIÇOS
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a
                    href="#services"
                    className={`${styles.navLink} ${
                      section === "who-we-are-section" ? styles.active : ""
                    }`}
                    id="who-we-are-section"
                    onClick={(e) => setSectionNavbar(e.target.id)}
                  >
                    QUEM SOMOS
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a
                    href="#contact"
                    className={`${styles.navLink} ${
                      section === "clients-section" ? styles.active : ""
                    }`}
                    id="clients-section"
                    onClick={(e) => setSectionNavbar(e.target.id)}
                  >
                    CLIENTES
                  </a>
                </li>

                <li className={styles.navItemButtonContact}>
                  <a
                    className={styles.linkButton}
                    href="#contact"
                    id="contacts-section"
                    onClick={(e) => setSectionNavbar(e.target.id)}
                  >
                    CONTATOS
                  </a>
                </li>
              </ul>
            </nav>

            <button className={styles.burguerMenuButton} onClick={toggleMenu}>
              <IoMenu />
            </button>
          </div>
        </header>

        <div
          className={`${styles.drawer} ${isMenuOpen ? styles.drawerOpen : ""}`}
        >
          <div className={styles.closeButton}>
            <button className={styles.closeButton} onClick={toggleMenu}>
              <IoClose />
            </button>
          </div>

          <nav className={styles.drawerNav}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <a
                  id="home-section"
                  onClick={(e) => setSectionNavbar(e.target.id)}
                  href="#home"
                  className={styles.navLink}
                >
                  HOME
                </a>
              </li>
              <li className={styles.navItem}>
                <a
                  href="#about"
                  className={styles.navLink}
                  id="services-section"
                  onClick={(e) => setSectionNavbar(e.target.id)}
                >
                  SERVIÇOS
                </a>
              </li>
              <li className={styles.navItem}>
                <a
                  href="#services"
                  className={styles.navLink}
                  id="who-we-are-section"
                  onClick={(e) => setSectionNavbar(e.target.id)}
                >
                  QUEM SOMOS
                </a>
              </li>
              <li className={styles.navItem}>
                <a
                  href="#contact"
                  className={styles.navLink}
                  id="clients-section"
                  onClick={(e) => setSectionNavbar(e.target.id)}
                >
                  CLIENTES
                </a>
              </li>

              <li className={styles.navItem}>
                <a
                  href="#contact"
                  className={styles.navLink}
                  id="contacts-section"
                  onClick={(e) => setSectionNavbar(e.target.id)}
                >
                  CONTATOS
                </a>
              </li>

              <li className={styles.navItem}>
                <a
                  href="#portfolio"
                  className={styles.navLink}
                  id="portfolio-section"
                  onClick={(e) => setSectionNavbar(e.target.id)}
                >
                  PORTFÓLIO
                </a>
              </li>

              <li className={styles.navItem}>
                <a
                  href="#testimonials"
                  className={styles.navLink}
                  id="testimonials-section"
                  onClick={(e) => setSectionNavbar(e.target.id)}
                >
                  TESTEMUNHOS
                </a>
              </li>

              <li className={styles.navItem}>
                <a
                  href="#faq"
                  className={styles.navLink}
                  id="faq-section"
                  onClick={(e) => setSectionNavbar(e.target.id)}
                >
                  PERGUNTAS FREQUENTES (FAQ)
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {children}
    </main>
  );
}
