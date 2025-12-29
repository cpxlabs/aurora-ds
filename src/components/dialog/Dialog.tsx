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

export function DialogContent({ className, children, ...props }: DialogContentProps) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className={styles.overlay} />
      <DialogPrimitive.Content className={clsx(styles.content, className)} {...props}>
        {children}
        <DialogPrimitive.Close className={styles.close} aria-label="Fechar">
          ×
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

export const DialogTitle = (
  p: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
) => <DialogPrimitive.Title {...p} className={clsx(styles.title, p.className)} />;

export const DialogDescription = (
  p: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
) => (
  <DialogPrimitive.Description
    {...p}
    className={clsx(styles.description, p.className)}
  />
);
