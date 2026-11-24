import { motion } from 'motion/react'
import { Reveal, Stagger, StaggerItem, EASE } from '@/components/motion'
import { CtaBand, Eyebrow, PageHero } from '@/components/blocks'
import { rules } from '@/data/site'
import { asset } from '@/lib/asset'

const NAME: { glyph: string; letter: string; key?: boolean }[] = [
  { glyph: 's', letter: 'S' },
  { glyph: '13', letter: 'M', key: true },
  { glyph: 'i', letter: 'I' },
  { glyph: 't', letter: 'T' },
  { glyph: '8', letter: 'H', key: true },
]

export default function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Small studio. Direct line to the builder.">
        <Reveal delay={0.4}>
          <p className="m-0 max-w-[640px] text-[19px] text-muted-foreground">
            No account managers, no handoffs to a team you never meet. The person on your call is the person writing
            your code.
          </p>
        </Reveal>
      </PageHero>

      <section className="container-site flex flex-wrap items-start gap-16 py-28">
        <Reveal className="flex min-w-0 flex-[1_1_380px] flex-col gap-5">
          <div className="overflow-hidden rounded-3xl border border-border shadow-[0_30px_80px_-30px_rgba(76,155,255,0.35)]">
            <motion.img
              src={asset('img/founder.webp')}
              alt="Matthew Smith, founder of s13it8"
              width={1200}
              height={1600}
              loading="lazy"
              className="block aspect-[3/4] w-full object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6, ease: EASE }}
            />
          </div>
          <div className="flex justify-between gap-3">
            <div className="flex flex-col">
              <span className="font-display text-2xl font-semibold">Matthew Smith</span>
              <span className="text-muted-foreground">Founder, builder</span>
            </div>
            <span className="font-mono text-[13px] text-muted-foreground">St. Louis, MO</span>
          </div>
        </Reveal>
        <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-7">
          <Reveal>
            <Eyebrow>The story</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="m-0 font-display text-[clamp(28px,3vw,40px)] leading-[1.15] font-medium tracking-[-0.02em]">
              s13it8 started as the workshop behind our own brands. Every tool we sell, we first built for ourselves.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="m-0 text-lg text-muted-foreground">
              s13it8, LLC runs TodaySmith, Family Roots Films and Bloodline Films. Each one needed a site, a booking flow,
              an inbox and a way to stop doing the same task twice. So we built a private server, wired in AI agents, and
              kept notes on what worked.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="m-0 text-lg text-muted-foreground">
              Now we build the same systems for other small businesses. You get tested parts, plain docs and a stack that
              belongs to you.
            </p>
          </Reveal>
          {/* TODO (Matt): add a personal line here: background and why you started s13it8. */}
        </div>
      </section>

      <section className="border-y border-border bg-muted">
        <div className="container-site py-28">
          <Reveal>
            <Eyebrow className="mb-4">What we hold to</Eyebrow>
          </Reveal>
          <Reveal as="h2" delay={0.05} className="display m-0 mb-14 text-[clamp(36px,4.5vw,60px)] leading-[1.02]">
            Four rules for every build.
          </Reveal>
          <Stagger className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-8">
            {rules.map((r, i) => (
              <StaggerItem key={r.title} className="relative flex flex-col gap-3 pt-6">
                <span className="absolute top-0 left-0 h-0.5 w-full bg-input" />
                <motion.span
                  className="absolute top-0 left-0 h-0.5 w-full origin-left bg-primary"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.2 + i * 0.15 }}
                />
                <span className="font-mono text-[13px] text-muted-foreground">Rule {String(i + 1).padStart(2, '0')}</span>
                <h3 className="display m-0 text-2xl tracking-[-0.02em]">{r.title}</h3>
                <p className="m-0 text-muted-foreground">{r.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="container-site flex flex-wrap items-center gap-14 py-28">
        <div className="flex min-w-0 flex-[999_1_520px] flex-col gap-5">
          <Reveal>
            <Eyebrow>The name</Eyebrow>
          </Reveal>
          <Reveal as="h2" delay={0.05} className="display m-0 text-[clamp(36px,4.5vw,56px)] leading-[1.05]">
            s13it8, said out loud.
          </Reveal>
          <Reveal delay={0.1}>
            <p className="m-0 text-lg text-muted-foreground">
              Swap each number for the letter at that spot in the alphabet. 13 is M. 8 is H. Read it again and s13it8
              spells SMITH.
            </p>
          </Reveal>
          <NameTiles />
        </div>
        <Reveal delay={0.1} className="min-w-0 flex-[1_1_380px]">
          <img
            src={asset('img/s13it8-banner.webp')}
            alt="s13it8 wordmark inside a glass sphere"
            className="aspect-[3/2] w-full rounded-3xl border border-border object-cover"
          />
        </Reveal>
      </section>

      <CtaBand title="Talk to the person who builds it." cta="Get in touch" />
    </>
  )
}

/** Each tile flips from the glyph to its letter, spelling SMITH. */
function NameTiles() {
  return (
    <div role="img" aria-label="s, 13 equals M, i, t, 8 equals H, spelling SMITH" className="mt-2 grid max-w-[520px] grid-cols-5 gap-2.5">
      {NAME.map((n, i) => (
        <motion.div
          key={i}
          aria-hidden="true"
          className={`flex flex-col items-center gap-1.5 rounded-2xl border bg-card py-4 ${n.key ? 'border-primary' : 'border-input'}`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.2 + i * 0.08 }}
        >
          <span className={`font-display text-[34px] leading-none font-bold ${n.key ? 'text-primary' : ''}`}>{n.glyph}</span>
          <motion.span
            className={`font-mono text-sm ${n.key ? 'text-foreground' : 'text-muted-foreground'}`}
            initial={{ opacity: 0, y: -6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.8 + i * 0.12 }}
          >
            {n.letter}
          </motion.span>
        </motion.div>
      ))}
    </div>
  )
}
