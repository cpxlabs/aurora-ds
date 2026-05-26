import * as React from "react";
import clsx from "clsx";
import styles from "./Input.module.css";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  /** Exibe o campo no estado de erro com borda vermelha */
  invalid?: boolean;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, invalid = false, ...props }, ref) => (
    <input
      ref={ref}
      aria-invalid={invalid || undefined}
      className={clsx(styles.input, invalid && styles.invalid, className)}
      {...props}
    />
  )
);

Input.displayName = "Input";
