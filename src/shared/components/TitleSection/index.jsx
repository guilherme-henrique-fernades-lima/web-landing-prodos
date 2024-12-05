"use client";

import styles from "@/shared/components/TitleSection/TitleSection.module.scss";

export default function TitleSection({ title, subtitle }) {
  return (
    <div className={styles.containerTitleSection}>
      <div className={styles.containerTexts}>
        <h3 className={styles.title}>{title}</h3>
        <h3 className={styles.subtitle}>{subtitle}</h3>
      </div>

      <div className={styles.gradientLine}></div>
    </div>
  );
}
