import * as React from "react";
import clsx from "clsx";
import styles from "./Avatar.module.css";
import { useAuroraI18n } from "../../i18n";

export type AvatarSize = "sm" | "md" | "lg";

export type AvatarProps = React.HTMLAttributes<HTMLSpanElement> & {
  /** URL da imagem do avatar */
  src?: string;
  /** Texto alternativo para a imagem */
  alt?: string;
  /** Iniciais exibidas quando não há imagem */
  initials?: string;
  /** Tamanho do avatar */
  size?: AvatarSize;
};

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ src, alt, initials, size = "md", className, ...props }, ref) => {
    const { avatarFallbackLabel } = useAuroraI18n();

    return (
      <span
        ref={ref}
        role="img"
        aria-label={alt ?? initials ?? avatarFallbackLabel}
        className={clsx(
          styles.avatar,
          size === "sm" && styles.sm,
          size === "lg" && styles.lg,
          className
        )}
        {...props}
      >
        {src ? (
          <img src={src} alt={alt ?? ""} className={styles.image} aria-hidden="true" />
        ) : (
          <span aria-hidden="true" className={styles.initials}>
            {initials ? initials.slice(0, 2).toUpperCase() : "?"}
          </span>
        )}
      </span>
    );
  }
);

Avatar.displayName = "Avatar";
