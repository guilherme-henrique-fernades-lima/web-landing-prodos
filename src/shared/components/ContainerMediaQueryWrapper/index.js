"use client";

import styles from "@/shared/components/ContainerMediaQueryWrapper/containerMediaQueryWrapper.module.css";

export default function ContainerMediaQueryWrapper({ children }) {
  return <div className={styles.container}>{children}</div>;
}
