import * as React from "react";
import clsx from "clsx";
import styles from "./Badge.module.css";

export type BadgeTone = "neutral" | "positive" | "negative" | "warning";
export type BadgeSize = "sm" | "md";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  /** Cor semântica do badge */
  tone?: BadgeTone;
  /** Tamanho do badge */
  size?: BadgeSize;
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ tone = "neutral", size = "md", className, ...props }, ref) => (
    <span
      ref={ref}
      className={clsx(
        styles.badge,
        tone === "positive" && styles.positive,
        tone === "negative" && styles.negative,
        tone === "warning" && styles.warning,
        size === "sm" && styles.sm,
        className
      )}
      {...props}
    />
  )
);

Badge.displayName = "Badge";
