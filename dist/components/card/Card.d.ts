import * as React from "react";
export type CardProps = React.ComponentPropsWithoutRef<"div"> & {
    asChild?: boolean;
};
export declare const Card: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    asChild?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
export declare const CardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export declare const CardTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
export declare const CardDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
export declare const CardAction: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export declare const CardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export declare const CardFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export type CardMediaProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "className"> & {
    className?: string;
    imageClassName?: string;
};
export declare const CardMedia: React.ForwardRefExoticComponent<Omit<React.ImgHTMLAttributes<HTMLImageElement>, "className"> & {
    className?: string;
    imageClassName?: string;
} & React.RefAttributes<HTMLDivElement>>;
export type CardBadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
    tone?: "neutral" | "positive" | "negative";
};
export declare const CardBadge: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLSpanElement> & {
    tone?: "neutral" | "positive" | "negative";
} & React.RefAttributes<HTMLSpanElement>>;
