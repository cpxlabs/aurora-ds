import * as React from "react";
import clsx from "clsx";
import styles from "./Label.module.css";

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  /** Exibe o rótulo no estado de erro */
  invalid?: boolean;
};

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, invalid = false, ...props }, ref) => (
    <label
      ref={ref}
      className={clsx(styles.label, invalid && styles.invalid, className)}
      {...props}
    />
  )
);

Label.displayName = "Label";
