import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { ArrowRight, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { nav } from '@/data/site'
import { asset } from '@/lib/asset'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 24))

  return (
    <header
      className={cn(
        'sticky top-0 z-40 border-b transition-[background-color,border-color,backdrop-filter] duration-300',
        scrolled ? 'border-border bg-background/85 backdrop-blur-xl' : 'border-transparent bg-transparent',
      )}
    >
      <div
        className={cn(
          'container-site flex items-center justify-between gap-4 transition-[padding] duration-300',
          scrolled ? 'py-2.5' : 'py-4',
        )}
      >
        <Link to="/" aria-label="s13it8 home" className="shrink-0">
          <img
            src={asset('img/s13it8-logo.webp')}
            alt="s13it8"
            className={cn('block w-auto transition-[height] duration-300', scrolled ? 'h-12' : 'h-14')}
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                cn(
                  'relative rounded-full px-4 py-2 text-[15px] transition-colors',
                  isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                )
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full border border-input bg-secondary"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  {item.label}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <Link to="/contact">
              Start a project <ArrowRight />
            </Link>
          </Button>

          <Sheet key={pathname}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Site navigation</SheetDescription>
              <nav aria-label="Mobile" className="mt-16 flex flex-col">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.4 }}
                  >
                    <SheetClose asChild>
                      {/* SheetClose's Slot flattens NavLink's className function, so compute active state here. */}
                      <Link
                        to={item.to}
                        aria-current={pathname === item.to ? 'page' : undefined}
                        className={cn(
                          'display flex min-h-14 items-center border-b border-border text-3xl',
                          pathname === item.to ? 'text-primary' : 'text-foreground',
                        )}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  </motion.div>
                ))}
              </nav>
              <SheetClose asChild>
                <Button asChild size="lg" className="mt-auto">
                  <Link to="/contact">
                    Start a project <ArrowRight />
                  </Link>
                </Button>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
