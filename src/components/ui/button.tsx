import { BaseButton, type BaseButtonProps } from "@/components/ui/button-base"
import {
  buttonSizeToBaseSize,
  buttonThemeVariants,
  buttonVariants,
  resolveButtonClasses,
  type ButtonSize,
  type ButtonVariant,
} from "@/components/ui/button-theme"

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: Omit<BaseButtonProps, "variant" | "size"> & {
  variant?: ButtonVariant
  size?: ButtonSize
}) {
  return (
    <BaseButton
      asChild={asChild}
      variant={variant}
      size={buttonSizeToBaseSize[size]}
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  )
}

export { Button }
export { BaseButton, baseButtonVariants } from "@/components/ui/button-base"
export { buttonSizeToBaseSize, buttonThemeVariants, buttonVariants, resolveButtonClasses }
export type { BaseButtonProps, ButtonSize, ButtonVariant }
