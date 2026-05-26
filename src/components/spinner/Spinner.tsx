import * as React from "react";
import clsx from "clsx";
import styles from "./Spinner.module.css";
import { useAuroraI18n } from "../../i18n";

export type SpinnerSize = "sm" | "md" | "lg";

export type SpinnerProps = React.HTMLAttributes<HTMLSpanElement> & {
  /** Tamanho do spinner */
  size?: SpinnerSize;
  /** Rótulo acessível exibido para leitores de tela */
  label?: string;
};

export const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ size = "md", label, className, ...props }, ref) => {
    const { spinnerLabel } = useAuroraI18n();
    const resolvedLabel = label ?? spinnerLabel;

    return (
      <span
        ref={ref}
        role="status"
        aria-label={resolvedLabel}
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
    );
  }
);

Spinner.displayName = "Spinner";
