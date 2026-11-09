import { ComponentProps } from "react";
import styles from "./Input.module.css";

interface Props extends ComponentProps<"input">{
  label?: string;
  icon?: string;
  required?: boolean;
}

export default function Input({
  id,
  icon,
  required = false,
  label,
  ...props
}: Props) {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        {icon && <span>{icon}</span>}
        {label}
      </label>

      <div className={styles.inputWrapper}>
        {icon && <span className={styles.inputIcon}>{icon}</span>}

        <input
          className={styles.input}
          id={id}
          required={required}
          {...props}
        />
      </div>
    </div>
  );
}