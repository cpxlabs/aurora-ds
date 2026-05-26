import * as React from "react";
import clsx from "clsx";
import styles from "./Select.module.css";

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  /** Exibe o campo no estado de erro com borda vermelha */
  invalid?: boolean;
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, invalid = false, ...props }, ref) => (
    <select
      ref={ref}
      aria-invalid={invalid || undefined}
      className={clsx(styles.select, invalid && styles.invalid, className)}
      {...props}
    />
  )
);

Select.displayName = "Select";
