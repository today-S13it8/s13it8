import { useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowRight, ArrowUpRight, CalendarDays, Check, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Reveal, Stagger, StaggerItem, WordsIn, EASE } from '@/components/motion'
import { BOOKING_URL, CONTACT_EMAIL, services } from '@/data/site'
import { cn } from '@/lib/utils'

export default function Contact() {
  const [params] = useSearchParams()
  const [sent, setSent] = useState(false)
  const [name, setName] = useState('')
  const [picked, setPicked] = useState<string[]>([])
  const [formKey, setFormKey] = useState(0)

  const toggle = (t: string) => setPicked((p) => (p.includes(t) ? p.filter((x) => x !== t) : [...p, t]))

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const body = [
      `Name: ${f.get('name')}`,
      `Email: ${f.get('email')}`,
      `Business: ${f.get('business') || ''}`,
      `Needs: ${picked.join(', ') || 'Not sure yet'}`,
      '',
      String(f.get('message') || ''),
    ].join('\n')
    const subject = `New project inquiry from ${String(f.get('name') || 'the website')}`
    // No backend yet: open the visitor's email app with the message filled in.
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const reset = () => {
    setSent(false)
    setName('')
    setPicked([])
    setFormKey((k) => k + 1)
  }

  const channels = [
    { icon: CalendarDays, title: 'Book a 30-minute call', sub: 'Pick a time that works', href: BOOKING_URL, external: true },
    { icon: Mail, title: 'Email', sub: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  ]

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-[-10%] size-[560px] rounded-full bg-primary/12 blur-[130px]" />
      <div className="container-site relative flex flex-wrap items-start gap-16 pt-20 pb-28 sm:pt-24">
        <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-7">
          <Reveal>
            <p className="eyebrow m-0 text-muted-foreground">Contact</p>
          </Reveal>
          <h1 className="display m-0 text-[clamp(46px,6vw,84px)] leading-[0.98]">
            <WordsIn text="Tell us what slows you down." delay={0.05} />
          </h1>
          <Reveal delay={0.35}>
            <p className="m-0 text-[19px] text-muted-foreground">A few lines is plenty. We reply with questions or a time to talk.</p>
          </Reveal>
          <Stagger className="mt-2 flex flex-col overflow-hidden rounded-2xl border border-border">
            {channels.map((c) => (
              <StaggerItem key={c.title}>
                <a
                  href={c.href}
                  {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="group flex min-h-11 items-center gap-4 border-b border-border bg-card px-5 py-5 transition-colors hover:bg-accent"
                >
                  <c.icon className="size-5 text-primary" />
                  <span className="flex flex-1 flex-col">
                    <span className="font-semibold">{c.title}</span>
                    <span className="text-sm text-muted-foreground">{c.sub}</span>
                  </span>
                  <ArrowUpRight className="size-5 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </StaggerItem>
            ))}
            <StaggerItem>
              <div className="flex items-center gap-4 bg-card px-5 py-5">
                <MapPin className="size-5 text-primary" />
                <span className="flex flex-col">
                  <span className="font-semibold">Based in</span>
                  <span className="text-sm text-muted-foreground">St. Louis, Missouri · Remote everywhere</span>
                </span>
              </div>
            </StaggerItem>
          </Stagger>
        </div>

        <motion.div
          className="min-w-0 flex-[999_1_560px] rounded-3xl border border-border bg-card/90 p-6 backdrop-blur sm:p-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {sent ? (
              <motion.div
                key="sent"
                className="flex flex-col items-start gap-5 py-12"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <motion.span
                  className="flex size-14 items-center justify-center rounded-full border border-primary bg-primary/15"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.1 }}
                >
                  <Check className="size-7 text-primary" />
                </motion.span>
                <h2 className="display m-0 text-4xl tracking-[-0.02em]">Almost there.</h2>
                <p className="m-0 text-lg text-muted-foreground">
                  Thanks{name.trim() ? `, ${name.trim()}` : ''}. Your email app opened with the details filled in. Press
                  send there and we will reply soon.
                </p>
                <Button variant="outline" onClick={reset}>
                  Send another
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key={`form-${formKey}`}
                onSubmit={submit}
                className="flex flex-col gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
                  <Field id="c-name" label="Name">
                    <Input id="c-name" name="name" required placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
                  </Field>
                  <Field id="c-email" label="Email">
                    <Input id="c-email" name="email" type="email" required placeholder="you@business.com" />
                  </Field>
                  <Field id="c-co" label="Business" className="col-span-full">
                    <Input id="c-co" name="business" placeholder="Business name or website" />
                  </Field>
                </div>

                <fieldset className="m-0 flex flex-col gap-3 border-0 p-0">
                  <legend className="mb-3 text-sm font-medium">What do you need? Pick any.</legend>
                  <div className="flex flex-wrap gap-2.5">
                    {services.map((s) => {
                      const on = picked.includes(s.title)
                      return (
                        <motion.button
                          key={s.id}
                          type="button"
                          aria-pressed={on}
                          onClick={() => toggle(s.title)}
                          whileTap={{ scale: 0.96 }}
                          className={cn(
                            'inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border px-4.5 text-sm font-medium transition-colors',
                            on ? 'border-primary bg-primary text-primary-foreground' : 'border-input bg-background hover:border-primary/60',
                          )}
                        >
                          <AnimatePresence initial={false}>
                            {on && (
                              <motion.span initial={{ width: 0, opacity: 0 }} animate={{ width: 'auto', opacity: 1 }} exit={{ width: 0, opacity: 0 }}>
                                <Check className="size-4" />
                              </motion.span>
                            )}
                          </AnimatePresence>
                          {s.title}
                        </motion.button>
                      )
                    })}
                  </div>
                </fieldset>

                <Field id="c-msg" label="Message">
                  <Textarea id="c-msg" name="message" rows={5} placeholder="What takes too much of your week?" defaultValue={params.get('q') ?? ''} />
                </Field>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="text-sm text-muted-foreground">We never share your details.</span>
                  <Button type="submit" size="lg" className="group">
                    Send message <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

function Field({ id, label, className, children }: { id: string; label: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <Label htmlFor={id}>{label}</Label>
      {children}
    </div>
  )
}
