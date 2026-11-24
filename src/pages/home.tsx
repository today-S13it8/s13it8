import { useRef, useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowRight, CornerDownLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NetworkBackground } from '@/components/network-background'
import { Reveal, Stagger, StaggerItem, WordsIn, EASE } from '@/components/motion'
import { CtaBand, Eyebrow, ProjectImage } from '@/components/blocks'
import { builtWith, featured, heroChips, projects, services, steps } from '@/data/site'
import { asset } from '@/lib/asset'

export default function Home() {
  return (
    <>
      <Hero />
      <BuiltWith />
      <ServicesPreview />
      <Manifesto />
      <Path />
      <SelectedWork />
      <CtaBand title="Have a project in mind?" accent="Let's map it." cta="Start a project" />
    </>
  )
}

function Hero() {
  const [q, setQ] = useState('')
  const navigate = useNavigate()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 80])

  const ask = (e?: FormEvent) => {
    e?.preventDefault()
    navigate(q.trim() ? `/contact?q=${encodeURIComponent(q.trim())}` : '/contact')
  }

  return (
    <section ref={ref} className="relative -mt-[88px] overflow-hidden border-b border-border pt-[88px]">
      <NetworkBackground className="pointer-events-none absolute inset-0 size-full opacity-70 [mask-image:radial-gradient(ellipse_at_70%_40%,black_20%,transparent_75%)]" />
      <div className="container-site relative flex flex-wrap items-center gap-14 pt-20 pb-16 sm:pt-24">
        <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-7">
          <motion.p
            className="eyebrow m-0 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Studio for AI systems, infrastructure &amp; web
          </motion.p>
          <h1 className="display m-0 text-[clamp(46px,7vw,96px)] leading-[0.98]">
            <WordsIn text="We build the systems your business runs on." delay={0.1} />
          </h1>
          <motion.p
            className="m-0 max-w-[560px] text-[19px] text-muted-foreground"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.55 }}
          >
            AI agents, private servers, websites and the small tools in between. One studio. Built by hand, owned by you.
          </motion.p>

          <motion.div
            className="flex max-w-[620px] flex-col gap-3.5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.7 }}
          >
            <div className="flex flex-wrap gap-2.5">
              {heroChips.map((label) => (
                <motion.button
                  key={label}
                  type="button"
                  onClick={() => setQ(label)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="min-h-11 cursor-pointer rounded-full border border-input bg-secondary/80 px-4 text-sm font-medium backdrop-blur transition-colors hover:border-primary/60"
                >
                  {label}
                </motion.button>
              ))}
            </div>
            <form
              onSubmit={ask}
              className="flex gap-2 rounded-2xl border border-input bg-secondary/80 p-2 backdrop-blur transition-[border-color,box-shadow] focus-within:border-primary focus-within:shadow-[0_0_0_4px_rgba(76,155,255,0.15)]"
            >
              <label htmlFor="ask" className="sr-only">
                Ask a question
              </label>
              <input
                id="ask"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Ask a question about your project"
                className="min-w-0 flex-1 bg-transparent px-3 text-base outline-none placeholder:text-[#7d8baa]"
              />
              <Button type="submit" className="rounded-xl">
                Ask <CornerDownLeft />
              </Button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="min-w-0 flex-[1_1_420px]"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.25 }}
          style={{ y: imgY }}
        >
          <motion.img
            src={asset('img/s13it8-banner.webp')}
            alt="s13it8 wordmark inside a glass sphere over a blue node network"
            className="aspect-square w-full rounded-[28px] border border-border object-cover shadow-[0_30px_100px_-20px_rgba(76,155,255,0.35)]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
      <div className="container-site relative flex justify-between pb-8 font-mono text-[13px] text-muted-foreground">
        <span>St. Louis, Missouri</span>
        <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          Scroll ↓
        </motion.span>
      </div>
    </section>
  )
}

function BuiltWith() {
  const row = [...builtWith, ...builtWith]
  return (
    <section aria-label="Tools we build with" className="overflow-hidden border-b border-border">
      <div className="container-site flex items-center gap-10 py-7">
        <span className="eyebrow shrink-0 text-xs text-faint">Built with</span>
        <div className="relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <motion.div
            className="flex w-max gap-12 font-display text-xl text-muted-foreground"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {row.map((t, i) => (
              <span key={i} aria-hidden={i >= builtWith.length}>
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ServicesPreview() {
  return (
    <section className="container-site py-28">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <div className="flex flex-col gap-4">
          <Reveal>
            <Eyebrow>What we do</Eyebrow>
          </Reveal>
          <Reveal as="h2" delay={0.05} className="display m-0 max-w-[720px] text-[clamp(36px,4.5vw,60px)] leading-[1.02]">
            Four services. One stack you control.
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <Link to="/services" className="group inline-flex items-center gap-2 border-b border-primary pb-1 font-semibold">
            All services <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
      <Stagger className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
        {services.map((s) => (
          <StaggerItem key={s.id}>
            <Link
              to={`/services#${s.id}`}
              className="group relative flex h-full min-h-[300px] flex-col gap-5 overflow-hidden rounded-2xl border border-border bg-[#0b1120] p-7 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-primary/50"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-24 size-56 rounded-full bg-primary/0 blur-3xl transition-colors duration-500 group-hover:bg-primary/20"
              />
              <div className="flex items-center justify-between">
                <span className="font-mono text-[13px] text-primary">{s.num}</span>
                <s.icon className="size-6 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <h3 className="display m-0 text-[26px] leading-tight tracking-[-0.02em]">{s.title}</h3>
              <p className="m-0 text-muted-foreground">{s.short}</p>
              <ArrowRight className="mt-auto size-5 text-primary transition-transform group-hover:translate-x-1.5" />
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}

function Manifesto() {
  const specs: [string, string, string?][] = [
    ['Headline', 'Space Grotesk 600'],
    ['Body', 'Inter 16 / 160%'],
    ['Ground', '#070B14', '#070B14'],
    ['Signal', '#4C9BFF', '#4C9BFF'],
    ['Hosting', 'Own VPS'],
    ['Templates', 'None'],
  ]
  return (
    <section className="border-y border-border bg-muted">
      <div className="container-site flex flex-wrap items-center gap-14 py-28">
        <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-6">
          <Reveal>
            <Eyebrow>How we think</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="m-0 font-display text-[clamp(30px,4vw,52px)] leading-[1.1] font-medium tracking-[-0.025em]">
              A good system is a hundred small decisions, made on purpose.{' '}
              <span className="text-faint">We make them by hand, write them down, and hand you the keys.</span>
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="min-w-0 flex-[1_1_340px]">
          <div className="overflow-hidden rounded-2xl border border-input bg-card font-mono text-[13px] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
            <div className="flex justify-between border-b border-input px-4 py-3 text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="size-2 animate-pulse rounded-full bg-primary" /> Inspect · this page
              </span>
              <span className="text-primary">Design / Code</span>
            </div>
            <Stagger className="grid grid-cols-2 gap-x-4 gap-y-3.5 px-4 py-5">
              {specs.map(([k, v, swatch]) => (
                <StaggerItem key={k} className="col-span-2 grid grid-cols-2 gap-x-4">
                  <span className="text-faint">{k}</span>
                  <span className="flex items-center gap-2">
                    {swatch && (
                      <span aria-hidden="true" className="size-3.5 rounded border border-[#3a4a6e]" style={{ background: swatch }} />
                    )}
                    {v}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Path() {
  return (
    <section className="container-site py-28">
      <Reveal>
        <Eyebrow className="mb-4">The path</Eyebrow>
      </Reveal>
      <Reveal as="h2" delay={0.05} className="display m-0 mb-14 text-[clamp(36px,4.5vw,60px)] leading-[1.02]">
        From idea to running system.
      </Reveal>
      <Stagger as="ol" className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-8 p-0">
        {steps.map((s, i) => (
          <StaggerItem as="li" key={s.title} className="relative flex flex-col gap-3.5 pt-6">
            <span className="absolute top-0 left-0 h-0.5 w-full bg-input" />
            <motion.span
              className="absolute top-0 left-0 h-0.5 w-full origin-left bg-primary"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 + i * 0.15 }}
            />
            <span className="font-mono text-[13px] text-muted-foreground">
              Step {String(i + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
            </span>
            <h3 className="display m-0 text-[26px] tracking-[-0.02em]">{s.title}</h3>
            <p className="m-0 text-muted-foreground">{s.text}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}

function SelectedWork() {
  const items = featured.map((n) => projects.find((p) => p.name === n)!)
  return (
    <section className="container-site pb-28">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <Reveal as="h2" className="display m-0 text-[clamp(36px,4.5vw,60px)] leading-[1.02]">
          Selected work
        </Reveal>
        <Reveal delay={0.1}>
          <Link to="/portfolio" className="group inline-flex items-center gap-2 border-b border-primary pb-1 font-semibold">
            See the portfolio <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
      <Stagger className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {items.map((p) => (
          <StaggerItem key={p.name}>
            <Link to="/portfolio" className="group flex flex-col gap-4">
              <ProjectImage p={p} ratio="aspect-[4/3]" />
              <div className="flex justify-between gap-3">
                <span className="font-semibold transition-colors group-hover:text-primary">{p.name}</span>
                <span className="text-sm text-muted-foreground">{p.stack}</span>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
