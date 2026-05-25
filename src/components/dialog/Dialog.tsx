import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import clsx from "clsx";
import styles from "./Dialog.module.css";

export type DialogProps = React.ComponentProps<typeof DialogPrimitive.Root>;
export type DialogContentProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>;

export function Dialog(props: DialogProps) {
  return <DialogPrimitive.Root {...props} />;
}

export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className={styles.overlay} />
    <DialogPrimitive.Content
      ref={ref}
      className={clsx(styles.content, className)}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className={styles.close} aria-label="Fechar diálogo">
        <span aria-hidden="true">×</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));
DialogContent.displayName = "DialogContent";

export const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    {...props}
    className={clsx(styles.title, className)}
  />
));
DialogTitle.displayName = "DialogTitle";

export const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    {...props}
    className={clsx(styles.description, className)}
  />
));
DialogDescription.displayName = "DialogDescription";
