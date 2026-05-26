import * as React from "react";
import clsx from "clsx";
import styles from "./Spinner.module.css";

export type SpinnerSize = "sm" | "md" | "lg";

export type SpinnerProps = React.HTMLAttributes<HTMLSpanElement> & {
  /** Tamanho do spinner */
  size?: SpinnerSize;
  /** Rótulo acessível exibido para leitores de tela */
  label?: string;
};

export const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ size = "md", label = "Carregando…", className, ...props }, ref) => (
    <span
      ref={ref}
      role="status"
      aria-label={label}
      className={clsx(
        styles.spinner,
        size === "sm" && styles.sm,
        size === "lg" && styles.lg,
        className
      )}
      {...props}
    >
      <span className={styles.track} aria-hidden="true" />
    </span>
  )
);

Spinner.displayName = "Spinner";
