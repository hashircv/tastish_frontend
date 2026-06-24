import { cva, type VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

const buttonStyles = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition duration-200 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary !text-white shadow-lg shadow-red-700/25 hover:bg-[#b80020] [&_*]:!text-white",
        secondary: "bg-white text-dark shadow-sm ring-1 ring-black/15 hover:bg-secondary",
        accent: "bg-accent text-white shadow-lg shadow-black/20 hover:bg-black",
        ghost: "bg-transparent text-dark hover:bg-black/5",
      },
      size: {
        md: "min-h-11 px-5 py-3",
        lg: "min-h-12 px-6 py-3.5 text-base",
        icon: "h-11 w-11 px-0 py-0",
      },
      full: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles> & {
    children: ReactNode;
  };

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonStyles> & {
    children: ReactNode;
  };

export function Button({ className, variant, size, full, children, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonStyles({ variant, size, full }), className)} {...props}>
      {children}
    </button>
  );
}

export function LinkButton({ className, variant, size, full, children, ...props }: LinkButtonProps) {
  return (
    <a className={cn(buttonStyles({ variant, size, full }), className)} {...props}>
      {children}
    </a>
  );
}
