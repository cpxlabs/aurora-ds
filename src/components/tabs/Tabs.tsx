import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import clsx from "clsx";
import styles from "./Tabs.module.css";

export type TabsProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>;

export function Tabs(props: TabsProps) {
  return <TabsPrimitive.Root {...props} />;
}

export type TabsListProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>;

export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List ref={ref} className={clsx(styles.list, className)} {...props} />
));
TabsList.displayName = "TabsList";

export type TabsTriggerProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>;

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={clsx(styles.trigger, className)}
    {...props}
  />
));
TabsTrigger.displayName = "TabsTrigger";

export type TabsContentProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>;

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={clsx(styles.content, className)}
    {...props}
  />
));
TabsContent.displayName = "TabsContent";
