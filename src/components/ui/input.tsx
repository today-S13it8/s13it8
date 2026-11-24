import * as React from 'react'
import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'h-12 w-full min-w-0 rounded-xl border border-input bg-background px-3.5 text-base text-foreground transition-[border-color,box-shadow] outline-none placeholder:text-[#7d8baa] focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/30',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
