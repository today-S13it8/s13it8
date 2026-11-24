import { Link } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'
import { CONTACT_EMAIL } from '@/data/site'
import { asset } from '@/lib/asset'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-deep">
      <div className="container-site flex flex-wrap justify-between gap-10 pt-14 pb-10">
        <div className="flex flex-col gap-2.5">
          <img src={asset('img/s13it8-logo.webp')} alt="s13it8" className="h-14 w-auto self-start" />
          <span className="text-muted-foreground">s13it8, LLC · St. Louis, Missouri</span>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
            {CONTACT_EMAIL}
          </a>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-4 text-muted-foreground">
          <Link className="hover:text-foreground" to="/services">Services</Link>
          <Link className="hover:text-foreground" to="/portfolio">Portfolio</Link>
          <Link className="hover:text-foreground" to="/about">About Us</Link>
          <Link className="hover:text-foreground" to="/contact">Contact</Link>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0 })}
            className="inline-flex cursor-pointer items-center gap-1 hover:text-foreground"
          >
            Back to top <ArrowUp className="size-4" />
          </button>
        </nav>
      </div>
      <div className="container-site flex flex-wrap justify-between gap-3 pb-8 text-sm text-faint">
        <span>© {new Date().getFullYear()} s13it8, LLC</span>
        <span>Privacy · Terms</span>
      </div>
    </footer>
  )
}
