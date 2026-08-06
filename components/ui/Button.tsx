import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-accent/90 shadow-soft",
  secondary: "bg-primary text-white hover:bg-secondary",
  outline: "border-2 border-primary bg-background text-primary hover:bg-primary hover:text-white",
  ghost: "bg-transparent text-text hover:bg-surface",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

const buttonClasses = (variant: Variant, size: Size, className?: string) =>
  clsx(
    "inline-flex items-center justify-center gap-2 rounded font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50",
    variants[variant],
    sizes[size],
    className
  );

type ButtonOwnProps = { variant?: Variant; size?: Size };

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & ButtonOwnProps
>(({ className, variant = "primary", size = "md", ...props }, ref) => (
  <button ref={ref} className={buttonClasses(variant, size, className)} {...props} />
));
Button.displayName = "Button";

// Same visual styling as Button, but renders a real <Link> for navigation
// (an <a> is the correct element for links; Button stays a plain <button>).
export function LinkButton({
  className,
  variant = "primary",
  size = "md",
  ...props
}: LinkProps & ButtonOwnProps & { className?: string; children?: ReactNode }) {
  return <Link className={buttonClasses(variant, size, className)} {...props} />;
}
