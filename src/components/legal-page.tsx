import type { ReactNode } from 'react'
import { Reveal } from '@/components/motion'
import { PageHero } from '@/components/blocks'

export type LegalSection = { title: string; body: ReactNode }

/** Shared layout for the Privacy Policy and Terms pages. */
export function LegalPage({ eyebrow, title, updated, intro, sections }: {
  eyebrow: string
  title: string
  updated: string
  intro: ReactNode
  sections: LegalSection[]
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title}>
        <Reveal delay={0.35}>
          <p className="m-0 font-mono text-[13px] text-muted-foreground">Last updated {updated}</p>
        </Reveal>
      </PageHero>
      <section className="container-site grid gap-14 py-20 lg:grid-cols-[240px_minmax(0,1fr)]">
        <nav aria-label="On this page" className="hidden lg:block">
          <ol className="sticky top-28 m-0 flex list-none flex-col gap-2.5 p-0 text-sm text-muted-foreground">
            {sections.map((s, i) => (
              <li key={s.title}>
                <a href={`#s${i + 1}`} className="hover:text-foreground">
                  <span className="mr-2 font-mono text-primary">{String(i + 1).padStart(2, '0')}</span>
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="flex max-w-[760px] flex-col gap-12 text-[17px] text-muted-foreground [&_a]:text-primary [&_a:hover]:underline [&_li]:mb-2 [&_p]:m-0 [&_strong]:text-foreground [&_ul]:m-0 [&_ul]:pl-5">
          <div className="text-lg text-foreground">{intro}</div>
          {sections.map((s, i) => (
            <Reveal key={s.title} as="div">
              <section id={`s${i + 1}`} className="flex scroll-mt-28 flex-col gap-4">
                <h2 className="display m-0 text-2xl tracking-[-0.02em] text-foreground">
                  <span className="mr-3 font-mono text-base text-primary">{String(i + 1).padStart(2, '0')}</span>
                  {s.title}
                </h2>
                {s.body}
              </section>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
