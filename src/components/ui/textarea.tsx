import * as React from 'react'
import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'min-h-32 w-full rounded-xl border border-input bg-background px-3.5 py-3 text-base text-foreground transition-[border-color,box-shadow] outline-none placeholder:text-[#7d8baa] focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/30',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
