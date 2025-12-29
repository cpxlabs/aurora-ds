import * as React from "react";
export type ButtonVariant = "solid" | "ghost";
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
};
export declare function Button({ className, variant, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
