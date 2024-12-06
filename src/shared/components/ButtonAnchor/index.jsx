"use client";

import styles from "@/shared/components/ButtonAnchor/ButtonAnchor.module.scss";

export default function ButtonAnchor({
  label,
  pathUrl,
  icon,
  contrastButton,
  onClick,
}) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={pathUrl ? pathUrl : "#"}
      className={`${
        contrastButton ? styles.anchorButtonContrast : styles.anchorButton
      }`}
    >
      {label}

      {icon && icon}
    </a>
  );
}
