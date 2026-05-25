import * as React from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

export type ButtonVariant = "solid" | "ghost";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, type = "button", variant = "solid", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={clsx(styles.button, variant === "ghost" && styles.ghost, className)}
      {...props}
    />
  )
);

Button.displayName = "Button";
