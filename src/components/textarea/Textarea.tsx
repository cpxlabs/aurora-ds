import * as React from "react";
import clsx from "clsx";
import styles from "./Textarea.module.css";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  /** Exibe o campo no estado de erro com borda vermelha */
  invalid?: boolean;
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, invalid = false, ...props }, ref) => (
    <textarea
      ref={ref}
      aria-invalid={invalid || undefined}
      className={clsx(styles.textarea, invalid && styles.invalid, className)}
      {...props}
    />
  )
);

Textarea.displayName = "Textarea";
