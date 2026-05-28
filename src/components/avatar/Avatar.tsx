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
    const normalizedAlt = alt?.trim();
    const normalizedInitials = initials?.trim();
    const fallbackInitials = normalizedInitials
      ? Array.from(normalizedInitials).slice(0, 2).join("").toUpperCase()
      : "?";
    const accessibleLabel = normalizedAlt || normalizedInitials || avatarFallbackLabel;

    return (
      <span
        ref={ref}
        role="img"
        aria-label={accessibleLabel}
        className={clsx(
          styles.avatar,
          size === "sm" && styles.sm,
          size === "lg" && styles.lg,
          className
        )}
        {...props}
      >
        {src ? (
          <img src={src} alt={normalizedAlt ?? ""} className={styles.image} aria-hidden="true" />
        ) : (
          <span aria-hidden="true" className={styles.initials}>
            {fallbackInitials}
          </span>
        )}
      </span>
    );
  }
);

Avatar.displayName = "Avatar";
