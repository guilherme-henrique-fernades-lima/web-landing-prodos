"use client";

import styles from "@/shared/components/ButtonAnchor/ButtonAnchor.module.scss";

//Icons
import { FiExternalLink } from "react-icons/fi";

export default function ButtonAnchor({ label, pathUrl, hasIcon }) {
  return (
    <a href={pathUrl ? pathUrl : "#"} className={styles.anchorButton}>
      {label}

      {hasIcon && <FiExternalLink />}
    </a>
  );
}
