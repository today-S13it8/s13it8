import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Reveal } from '@/components/motion'
import { CtaBand, PageHero, ProjectImage } from '@/components/blocks'
import { Badge } from '@/components/ui/badge'
import { projects, type Tag } from '@/data/site'
import { cn } from '@/lib/utils'

const FILTERS: ('All' | Tag)[] = ['All', 'AI', 'Web', 'Infra', 'Tools']

export default function Portfolio() {
  const [filter, setFilter] = useState<'All' | Tag>('All')
  const shown = projects.filter((p) => filter === 'All' || p.tags.includes(filter))

  return (
    <>
      <PageHero eyebrow={`Portfolio · ${projects.length} builds`} title="We run our own brands on everything we sell.">
        <Reveal delay={0.4}>
          <p className="m-0 max-w-[620px] text-[19px] text-muted-foreground">
            Every service on this site is tested on a real business first. These are the brands and systems built and
            run under s13it8, LLC.
          </p>
        </Reveal>
        <Reveal delay={0.5}>
          <div role="group" aria-label="Filter projects" className="mt-2 flex flex-wrap gap-2.5">
            {FILTERS.map((f) => {
              const active = f === filter
              const count = f === 'All' ? projects.length : projects.filter((p) => p.tags.includes(f)).length
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(f)}
                  className={cn(
                    'relative inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border px-4.5 text-sm font-medium transition-colors',
                    active ? 'border-primary text-primary-foreground' : 'border-input bg-secondary hover:border-primary/60',
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-primary"
                      transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                    />
                  )}
                  {f}
                  <span className={cn('font-mono text-xs', active ? 'text-primary-foreground/70' : 'text-faint')}>{count}</span>
                </button>
              )
            })}
          </div>
        </Reveal>
      </PageHero>

      <section className="container-site pt-18 pb-28">
        <motion.div layout className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,360px),1fr))] gap-x-7 gap-y-10">
          <AnimatePresence mode="popLayout" initial={false}>
            {shown.map((p, i) => (
              <motion.article
                key={p.name}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: Math.min(i, 6) * 0.04 }}
                className="group flex flex-col gap-4.5"
              >
                <ProjectImage p={p} />
                <div className="flex flex-col gap-2">
                  <div className="flex items-baseline justify-between gap-3">
                    <h2 className="m-0 font-display text-[22px] font-semibold transition-colors group-hover:text-primary">
                      {p.name}
                    </h2>
                    <Badge>{p.tags.join(' · ')}</Badge>
                  </div>
                  <p className="m-0 text-muted-foreground">{p.blurb}</p>
                  <p className="m-0 font-mono text-[13px] text-faint">{p.stack}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <CtaBand title="Your business could be next on this page." cta="Start a project" />
    </>
  )
}
