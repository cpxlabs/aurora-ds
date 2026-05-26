import * as React from "react";
import clsx from "clsx";
import styles from "./Progress.module.css";

export type ProgressTone = "neutral" | "positive" | "negative" | "warning";

export type ProgressProps = Omit<React.HTMLAttributes<HTMLDivElement>, "children"> & {
  /** Valor atual (0–100) */
  value?: number;
  /** Tom de cor da barra */
  tone?: ProgressTone;
  /** Rótulo acessível */
  label?: string;
};

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ value = 0, tone = "neutral", label = "Progresso", className, ...props }, ref) => {
    const clamped = Math.min(100, Math.max(0, value));
    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
        className={clsx(styles.track, className)}
        {...props}
      >
        <span
          className={clsx(
            styles.fill,
            tone === "positive" && styles.positive,
            tone === "negative" && styles.negative,
            tone === "warning" && styles.warning
          )}
          style={{ width: `${clamped}%` }}
        />
      </div>
    );
  }
);

Progress.displayName = "Progress";
