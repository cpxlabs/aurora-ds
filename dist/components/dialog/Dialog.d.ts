import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
export type DialogProps = React.ComponentProps<typeof DialogPrimitive.Root>;
export type DialogContentProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>;
export declare function Dialog(props: DialogProps): import("react/jsx-runtime").JSX.Element;
export declare const DialogTrigger: React.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export declare function DialogContent({ className, children, ...props }: DialogContentProps): import("react/jsx-runtime").JSX.Element;
export declare const DialogTitle: (p: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>) => import("react/jsx-runtime").JSX.Element;
export declare const DialogDescription: (p: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>) => import("react/jsx-runtime").JSX.Element;
