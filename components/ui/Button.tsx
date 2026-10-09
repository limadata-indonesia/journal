import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { Plus } from "lucide-react";
import clsx from "clsx";

// solid: blue pill on light backgrounds. white: white pill on blue backgrounds.
// outline: bordered pill for secondary actions. glass: outline pill on blue.
type Variant = "solid" | "white" | "outline" | "glass";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, { pill: string; dot: string }> = {
  solid: { pill: "bg-accent text-white hover:bg-secondary", dot: "border border-white/60 text-white" },
  white: { pill: "bg-white text-accent hover:bg-surface", dot: "bg-accent text-white" },
  outline: { pill: "border border-accent text-accent hover:bg-accent hover:text-white", dot: "bg-accent text-white" },
  glass: { pill: "border border-white/60 text-white hover:bg-white/10", dot: "bg-white text-accent" },
};

const sizes: Record<Size, { pill: string; dot: string }> = {
  sm: { pill: "h-10 pl-5 pr-2 text-sm", dot: "h-6 w-6" },
  md: { pill: "h-12 pl-7 pr-2.5 text-[15px]", dot: "h-7 w-7" },
  lg: { pill: "h-14 pl-8 pr-3 text-base", dot: "h-8 w-8" },
};

const pillClasses = (variant: Variant, size: Size, className?: string) =>
  clsx(
    "group inline-flex items-center justify-center gap-4 rounded-full font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50",
    variants[variant].pill,
    sizes[size].pill,
    className
  );

function Dot({ variant, size, icon }: { variant: Variant; size: Size; icon?: ReactNode }) {
  return (
    <span
      className={clsx(
        "grid shrink-0 place-items-center rounded-full transition-transform duration-300 group-hover:rotate-90",
        variants[variant].dot,
        sizes[size].dot
      )}
    >
      {icon ?? <Plus className="h-4 w-4" strokeWidth={2.25} />}
    </span>
  );
}

type OwnProps = { variant?: Variant; size?: Size; icon?: ReactNode; children?: ReactNode };

export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement> & OwnProps>(
  ({ className, variant = "solid", size = "md", icon, children, ...props }, ref) => (
    <button ref={ref} className={pillClasses(variant, size, className)} {...props}>
      {children}
      <Dot variant={variant} size={size} icon={icon} />
    </button>
  )
);
Button.displayName = "Button";

// Same pill, rendered as a real <Link> for navigation.
export function LinkButton({
  className,
  variant = "solid",
  size = "md",
  icon,
  children,
  ...props
}: LinkProps & OwnProps & { className?: string; target?: string; rel?: string }) {
  return (
    <Link className={pillClasses(variant, size, className)} {...props}>
      {children}
      <Dot variant={variant} size={size} icon={icon} />
    </Link>
  );
}
