import { cloneElement, useEffect } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { SiteHeader } from './site-header'
import { SiteFooter } from './site-footer'

const titles: Record<string, string> = {
  '/': 's13it8 · AI systems, infrastructure & web',
  '/services': 's13it8 · Services',
  '/portfolio': 's13it8 · Portfolio',
  '/about': 's13it8 · About Us',
  '/contact': 's13it8 · Contact',
  '/privacy': 's13it8 · Privacy Policy',
  '/terms': 's13it8 · Terms of Service',
}

export function Layout() {
  const location = useLocation()
  const outlet = useOutlet()

  useEffect(() => {
    document.title = titles[location.pathname] ?? 's13it8'
  }, [location.pathname])

  return (
    <div className="flex min-h-svh flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteHeader />
      <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo({ top: 0 })}>
        <motion.main
          id="main"
          key={location.pathname}
          className="flex-1"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {outlet && cloneElement(outlet, { key: location.pathname })}
        </motion.main>
      </AnimatePresence>
      <SiteFooter />
    </div>
  )
}
