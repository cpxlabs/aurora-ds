import * as React from "react";
import clsx from "clsx";
import styles from "./Alert.module.css";

export type AlertTone = "neutral" | "positive" | "negative" | "warning";

export type AlertProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Cor semântica do alerta */
  tone?: AlertTone;
};

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ tone = "neutral", className, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={clsx(
        styles.alert,
        tone === "positive" && styles.positive,
        tone === "negative" && styles.negative,
        tone === "warning" && styles.warning,
        className
      )}
      {...props}
    />
  )
);
Alert.displayName = "Alert";

export type AlertTitleProps = React.HTMLAttributes<HTMLParagraphElement>;

export const AlertTitle = React.forwardRef<HTMLParagraphElement, AlertTitleProps>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={clsx(styles.title, className)} {...props} />
  )
);
AlertTitle.displayName = "AlertTitle";

export type AlertDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

export const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  AlertDescriptionProps
>(({ className, ...props }, ref) => (
  <p ref={ref} className={clsx(styles.description, className)} {...props} />
));
AlertDescription.displayName = "AlertDescription";
