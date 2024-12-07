"use client";
import React, { useState, useRef } from "react";

import Image from "next/image";

import styles from "./styles.module.scss";

//Components
import TitleSection from "@/shared/components/TitleSection";

//Icons
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className={styles.accordionItem}>
    <div
      className={`${styles.question} ${isOpen ? styles.open : ""} ${
        isOpen ? styles.open : ""
      }`}
      onClick={onClick}
    >
      <p className={isOpen ? styles.openTitle : ""}>{question}</p>
      <div className={styles.boxIcon}>
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
    </div>

    <div
      className={styles.answer}
      style={{
        maxHeight: isOpen ? "1000px" : "0",
        transition: "all 0.3s ease",
      }}
    >
      <p>{answer}</p>
    </div>
  </div>
);

const PERGUNTAS = [
  { id: 1, pergunta: "title", resposta: "pergunta" },
  { id: 2, pergunta: "title", resposta: "pergunta" },
  { id: 3, pergunta: "title", resposta: "pergunta" },
  { id: 4, pergunta: "title", resposta: "pergunta" },
  { id: 5, pergunta: "title", resposta: "pergunta" },
  { id: 6, pergunta: "title", resposta: "pergunta" },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {PERGUNTAS.map((pergunta, index) => (
        <AccordionItem
          key={pergunta.id}
          question={`TÍTULO DA QUESTÃO`}
          answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          isOpen={openIndex === index}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </>
  );
};

export default function Faq() {
  return (
    <section id="faq" className={styles.section}>
      <TitleSection
        title="PERGUNTAS FREQUENTES (FAQ)"
        subtitle="Tire suas dúvidas sobre os serviços prestados"
      />
      <div className={styles.content}>
        <div className={styles.faq}>
          <Accordion />
        </div>

        <Image
          src="/svg/faq.svg"
          alt="faq"
          width={480}
          height={480}
          quality={100}
        />
      </div>
    </section>
  );
}
