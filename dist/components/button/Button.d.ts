import * as React from "react";
export type ButtonVariant = "solid" | "ghost";
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
};
export declare const Button: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
} & React.RefAttributes<HTMLButtonElement>>;
