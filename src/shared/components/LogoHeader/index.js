"use client";

import styles from "@/shared/components/LogoHeader/LogoHeader.module.css";
import Image from "next/image";

export default function LogoHeader() {
  return (
    <div className={styles.container}>
      <Image
        src="/img/logo.png"
        alt="Logomarca da Pródos digital"
        width={70}
        height={70}
        quality={100}
      />
      <span className={styles.brandName}>PRÓDOS DIGITAL</span>
    </div>
  );
}
