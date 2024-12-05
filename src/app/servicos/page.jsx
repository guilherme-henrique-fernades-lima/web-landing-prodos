"use client";

import styles from "./services.module.scss";

//Components
import TitleSection from "@/shared/components/TitleSection";

//Icons
import { MdDeveloperMode } from "react-icons/md";
import { MdOutlineMilitaryTech } from "react-icons/md";
import { IoRocketSharp } from "react-icons/io5";
import { TbPresentationAnalytics } from "react-icons/tb";
import { MdDesignServices } from "react-icons/md";
import { RiRobot2Fill } from "react-icons/ri";

const cards = [
  {
    id: 1,
    icon: <MdDeveloperMode />,
    title: "LOREM IPSUM",
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    id: 2,
    icon: <MdOutlineMilitaryTech />,
    title: "LOREM IPSUM",
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    id: 3,
    icon: <IoRocketSharp />,
    title: "LOREM IPSUM",
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    id: 4,
    icon: <TbPresentationAnalytics />,
    title: "LOREM IPSUM",
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    id: 5,
    icon: <MdDesignServices />,
    title: "LOREM IPSUM",
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    id: 6,
    icon: <RiRobot2Fill />,
    title: "LOREM IPSUM",
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
];

export default function Services() {
  return (
    <section id="services-section" className={styles.section}>
      <TitleSection
        title="NOSSOS SERVIÇOS"
        subtitle="Nossas soluções são personalizadas para atender às suas necessidades"
      />

      <div className={styles.grid}>
        {cards.map((card) => (
          <div key={card.id} className={styles.card}>
            <div className={styles.boxIcon}>{card.icon}</div>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardContent}>{card.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
