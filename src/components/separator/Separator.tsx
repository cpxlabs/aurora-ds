import * as React from "react";
import clsx from "clsx";
import styles from "./Separator.module.css";

export type SeparatorOrientation = "horizontal" | "vertical";

export type SeparatorProps = React.HTMLAttributes<HTMLHRElement> & {
  /** Orientação do separador */
  orientation?: SeparatorOrientation;
};

export const Separator = React.forwardRef<HTMLHRElement, SeparatorProps>(
  ({ orientation = "horizontal", className, ...props }, ref) => (
    <hr
      ref={ref}
      role="separator"
      aria-orientation={orientation}
      className={clsx(
        styles.separator,
        orientation === "vertical" && styles.vertical,
        className
      )}
      {...props}
    />
  )
);

Separator.displayName = "Separator";
