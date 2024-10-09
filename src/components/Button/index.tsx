import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react"
import { cn } from "../../lib/utils"
import { cva, type VariantProps } from 'class-variance-authority';
type ButtonProps = {
  children : ReactNode
} & ComponentPropsWithoutRef<'button'> & VariantProps<typeof buttonVariants>

const buttonVariants = cva('inline-flex px-4 rounded-md items-center justify-center min-w-16 ', {
  variants : {
    variant : {
      default : 'bg-gray-400 text-white ',
      primary : 'bg-primary text-white ',
      outlined : 'bg-white border border-primary text-primary'
    },
    size : {
      sm : 'h-8',
      md : 'h-9',
      lg : 'h-11'
    }

  }
})

const Button = ({children, className , variant, size}: ButtonProps) => {
  return (<button className={cn(buttonVariants({className, variant, size}))}>{children}</button>)
}

Button.displayName = 'Button'
export default Button