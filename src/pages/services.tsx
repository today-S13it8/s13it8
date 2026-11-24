import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'motion/react'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { Reveal, Stagger, StaggerItem, EASE } from '@/components/motion'
import { CtaBand, PageHero } from '@/components/blocks'
import { services } from '@/data/site'
import { cn } from '@/lib/utils'

export default function Services() {
  const { hash } = useLocation()

  // Jump to a service when arriving from a home page card (e.g. /services#infra).
  useEffect(() => {
    if (!hash) return
    const t = setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 400)
    return () => clearTimeout(t)
  }, [hash])

  return (
    <>
      <PageHero eyebrow="Services · 04" title="Pick one. Or let us connect all four.">
        <Reveal delay={0.4}>
          <p className="m-0 max-w-[620px] text-[19px] text-muted-foreground">
            Each service stands on its own. Together they form one stack: your site, your data, your agents, all on
            hardware you control.
          </p>
        </Reveal>
        <Reveal delay={0.5}>
          <nav aria-label="Jump to service" className="mt-2 flex flex-wrap gap-2.5">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-input px-4 text-sm transition-colors hover:border-primary/60 hover:bg-accent"
              >
                <span className="font-mono text-primary">{s.num}</span> {s.jump}
              </a>
            ))}
          </nav>
        </Reveal>
      </PageHero>

      {services.map((s) => (
        <section
          key={s.id}
          id={s.id}
          className={cn('scroll-mt-20 border-b border-border', s.muted && 'bg-muted')}
        >
          <div className="container-site flex flex-wrap gap-14 py-24">
            <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-5">
              <Reveal className="flex items-center gap-3">
                <span className="font-mono text-sm text-primary">{s.num}</span>
                <motion.span
                  className="h-px w-16 origin-left bg-primary"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
                />
                <s.icon className="size-5 text-primary" />
              </Reveal>
              <Reveal as="h2" delay={0.05} className="display m-0 text-[44px] leading-[1.05] tracking-[-0.03em]">
                {s.title}
              </Reveal>
              <Reveal delay={0.1}>
                <p className="m-0 text-lg text-muted-foreground">{s.intro}</p>
              </Reveal>
            </div>
            <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-4">
              <Stagger className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
                {s.items.map((it) => (
                  <StaggerItem key={it.title} className="h-full">
                    <Card className="h-full transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-primary/50">
                      <CardTitle>{it.title}</CardTitle>
                      <CardDescription>{it.text}</CardDescription>
                    </Card>
                  </StaggerItem>
                ))}
              </Stagger>
              <Reveal delay={0.2}>
                <p className="m-0 pt-2 font-mono text-[13px] text-muted-foreground">{s.stack}</p>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <CtaBand title="Not sure which one you need?" accent="Start with a call." cta="Book a call" />
    </>
  )
}
