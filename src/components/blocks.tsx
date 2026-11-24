import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal, WordsIn } from '@/components/motion'
import type { Project } from '@/data/site'
import { asset } from '@/lib/asset'
import { cn } from '@/lib/utils'

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn('eyebrow m-0 text-primary', className)}>{children}</p>
}

/** Top-of-page intro used by every inner page. */
export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] size-[520px] rounded-full bg-primary/15 blur-[120px]"
      />
      <div className="container-site relative flex flex-col gap-6 pt-20 pb-16 sm:pt-24 sm:pb-20">
        <Reveal>
          <p className="eyebrow m-0 text-muted-foreground">{eyebrow}</p>
        </Reveal>
        <h1 className="display m-0 max-w-[1000px] text-[clamp(44px,7vw,96px)] leading-[0.98]">
          <WordsIn text={title} delay={0.05} />
        </h1>
        {children}
      </div>
    </section>
  )
}

export function CtaBand({ title, accent, cta, to = '/contact' }: { title: string; accent?: string; cta: string; to?: string }) {
  return (
    <section className="relative overflow-hidden border-t border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-60%] left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-primary/12 blur-[140px]"
      />
      <div className="container-site relative flex flex-wrap items-end justify-between gap-8 py-28">
        <Reveal as="h2" className="display m-0 max-w-[860px] text-[clamp(40px,5.5vw,76px)] leading-none">
          {title} {accent && <span className="text-primary">{accent}</span>}
        </Reveal>
        <Reveal delay={0.1}>
          <Button asChild size="lg" className="group">
            <Link to={to}>
              {cta} <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}

export function ProjectImage({ p, ratio = 'aspect-[16/10]' }: { p: Project; ratio?: string }) {
  return (
    <div
      className={cn(ratio, 'overflow-hidden rounded-2xl border border-border transition-colors group-hover:border-primary/50')}
      style={{ background: p.bg, padding: p.pad ?? 0 }}
    >
      <motion.img
        src={asset(p.img)}
        alt={`${p.name} logo`}
        loading="lazy"
        className="block size-full"
        style={{ objectFit: p.fit, objectPosition: p.pos ?? 'center' }}
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  )
}
