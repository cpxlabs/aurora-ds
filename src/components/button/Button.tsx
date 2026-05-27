import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import styles from "./Button.module.css";

export type ButtonVariant = "solid" | "ghost";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  asChild?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, type = "button", variant = "solid", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        {...(!asChild && { type })}
        className={clsx(styles.button, variant === "ghost" && styles.ghost, className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
