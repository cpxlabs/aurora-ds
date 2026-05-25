import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import styles from "./Card.module.css";

export type CardProps = React.ComponentPropsWithoutRef<"div"> & {
    asChild?: boolean;
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ asChild = false, className, ...props }, ref) => {
        const Comp = asChild ? Slot : "div";
        return <Comp ref={ref} className={clsx(styles.card, className)} {...props} />;
    }
);
Card.displayName = "Card";

export const CardHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={clsx(styles.header, className)} {...props} />
));
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3 ref={ref} className={clsx(styles.title, className)} {...props} />
));
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p ref={ref} className={clsx(styles.description, className)} {...props} />
));
CardDescription.displayName = "CardDescription";

export const CardAction = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        data-slot="card-action"
        className={clsx(styles.action, className)}
        {...props}
    />
));
CardAction.displayName = "CardAction";

export const CardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={clsx(styles.content, className)} {...props} />
));
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={clsx(styles.footer, className)} {...props} />
));
CardFooter.displayName = "CardFooter";

export type CardMediaProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "className"> & {
    className?: string;
    imageClassName?: string;
};

export const CardMedia = React.forwardRef<HTMLDivElement, CardMediaProps>(
    ({ className, imageClassName, ...imgProps }, ref) => (
        <div ref={ref} className={clsx(styles.media, className)}>
            <img className={clsx(styles.mediaImage, imageClassName)} {...imgProps} />
        </div>
    )
);
CardMedia.displayName = "CardMedia";

export type CardBadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
    tone?: "neutral" | "positive" | "negative";
};

export const CardBadge = React.forwardRef<HTMLSpanElement, CardBadgeProps>(
    ({ tone = "neutral", className, ...props }, ref) => (
        <span
            ref={ref}
            className={clsx(
                styles.badge,
                tone === "positive" && styles.badgePositive,
                tone === "negative" && styles.badgeNegative,
                className
            )}
            {...props}
        />
    )
);
CardBadge.displayName = "CardBadge";
