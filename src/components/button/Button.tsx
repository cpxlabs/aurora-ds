import * as React from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

export type ButtonVariant = "solid" | "ghost";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({ className, variant = "solid", ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        styles.button,
        variant === "ghost" && styles.ghost,
        className
      )}
      {...props}
    />
  );
}
