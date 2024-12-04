"use client";

import styles from "@/shared/components/Button/Button.module.scss";

export default function Button({ children }) {
  return <h3 className={styles.titleText}>{children}</h3>;
}
