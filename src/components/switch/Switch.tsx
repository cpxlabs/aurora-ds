import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import clsx from "clsx";
import styles from "./Switch.module.css";

export type SwitchProps = React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>;

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root ref={ref} className={clsx(styles.switch, className)} {...props}>
    <SwitchPrimitive.Thumb className={styles.thumb} />
  </SwitchPrimitive.Root>
));

Switch.displayName = "Switch";
