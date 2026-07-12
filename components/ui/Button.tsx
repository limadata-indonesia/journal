import { ButtonHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-secondary shadow-premium",
  secondary: "bg-accent text-white hover:opacity-90",
  outline: "border border-border bg-background text-text hover:border-accent/50",
  ghost: "bg-transparent text-text hover:bg-surface",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size }
>(({ className, variant = "primary", size = "md", ...props }, ref) => (
  <button
    ref={ref}
    className={clsx(
      "inline-flex items-center justify-center gap-2 rounded-2xl font-medium transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50",
      variants[variant],
      sizes[size],
      className
    )}
    {...props}
  />
));
Button.displayName = "Button";
