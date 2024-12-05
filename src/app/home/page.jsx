"use client";

import styles from "./home.module.scss";

export default function Home() {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <h1 className={styles.text}>Lorem Ipsum is simply</h1>
        <h1 className={styles.textBrand}>PRÓDOS DIGITAL</h1>
        <h1 className={styles.text}>and typesetting industry</h1>
        <h4>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled
          psum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled
        </h4>
        <a href="#">SAIBA MAIS</a>
      </div>
    </div>
  );
}
