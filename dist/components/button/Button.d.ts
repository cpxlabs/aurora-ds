import * as React from "react";
export type ButtonVariant = "solid" | "ghost";
export type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
    type?: "button" | "submit" | "reset";
    variant?: ButtonVariant;
};
export declare const Button: React.ForwardRefExoticComponent<Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
    type?: "button" | "submit" | "reset";
    variant?: ButtonVariant;
} & React.RefAttributes<HTMLButtonElement>>;
