import type { LucideIcon } from 'lucide-react'
import { Bot, Server, LayoutTemplate, Briefcase } from 'lucide-react'

export const CONTACT_EMAIL = 's13it8@gmail.com'
// TODO: replace with the real Cal.com booking link.
export const BOOKING_URL = 'https://cal.com'

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
] as const

export const builtWith = ['Claude', 'n8n', 'Coolify', 'Supabase', 'Cloudflare', 'WordPress', 'Ghost', 'Cal.com']

export const heroChips = [
  'What would you automate for me?',
  'Show me a build like mine',
  'How do you work?',
  'I want to start a project',
]

export type Service = {
  id: string
  num: string
  title: string
  jump: string
  short: string
  intro: string
  icon: LucideIcon
  items: { title: string; text: string }[]
  stack: string
  muted?: boolean
}

export const services: Service[] = [
  {
    id: 'ai',
    num: '01',
    title: 'AI agents & automation',
    jump: 'AI agents',
    short: 'Agents that answer, sort and act. Workflows in n8n. Claude and MCP wired into the tools you use.',
    intro: 'Agents that read your inbox, update your CRM and post the weekly report. You set the rules. They do the repeat work.',
    icon: Bot,
    items: [
      { title: 'Custom agents', text: 'Telegram, email or Slack agents with memory and clear limits.' },
      { title: 'n8n workflows', text: 'Triggers, data pulls and reports that run on a schedule.' },
      { title: 'Claude + MCP', text: 'Connect Claude to ClickUp, Google Workspace, WordPress and more.' },
      { title: 'Local models', text: 'Ollama on your own server for private, no-meter tasks.' },
    ],
    stack: 'Claude · n8n · Ollama · Telegram · MCP',
  },
  {
    id: 'infra',
    num: '02',
    title: 'Self-hosted infrastructure',
    jump: 'Infrastructure',
    short: 'Your own server, your own data. VPS setup, Coolify, Supabase, private VPN and backups.',
    intro: 'Stop renting ten SaaS seats. One private server runs your CRM, wiki, booking and database for a flat monthly cost.',
    icon: Server,
    items: [
      { title: 'VPS + Coolify', text: 'One-click deploys, SSL and app updates in one panel.' },
      { title: 'Supabase + pgvector', text: 'A real database with AI search built in.' },
      { title: 'Private network', text: 'WireGuard VPN and Cloudflare Access lock admin screens.' },
      { title: 'Wiki + Git', text: 'Wiki.js and Gitea keep docs and change history in-house.' },
    ],
    stack: 'Coolify · Supabase · WireGuard · Cloudflare · Gitea',
    muted: true,
  },
  {
    id: 'web',
    num: '03',
    title: 'Websites & WordPress',
    jump: 'Websites',
    short: 'Custom themes, plugins and React builds. Fast pages that look like you, not a template.',
    intro: 'Sites built from a blank file. Custom themes, plugins and React parts where a page needs to move.',
    icon: LayoutTemplate,
    items: [
      { title: 'Custom themes', text: 'Photo and video themes, blogs and brand sites.' },
      { title: 'Plugins', text: 'Features WordPress lacks, like family tree tools or recipe widgets.' },
      { title: 'Ghost publishing', text: 'Newsletters and member sites with paid tiers.' },
      { title: 'AI on your site', text: 'Chat, search and content tools wired into your pages.' },
    ],
    stack: 'WordPress · React · Ghost · AI Engine',
  },
  {
    id: 'tools',
    num: '04',
    title: 'Small business tools',
    jump: 'Business tools',
    short: 'CRM, booking, email and dashboards. The back office, set up once and running daily.',
    intro: 'The back office most owners patch together. We set it up once, connect the parts, and show you how it runs.',
    icon: Briefcase,
    items: [
      { title: 'CRM', text: 'Twenty CRM or HubSpot, set up for how you sell.' },
      { title: 'Booking', text: 'Cal.com with packages, intake forms and reminders.' },
      { title: 'Email routing', text: 'Catch-all inboxes across every domain you own.' },
      { title: 'Dashboards', text: 'One screen for sales, tasks and site health.' },
    ],
    stack: 'Twenty · Cal.com · Cloudflare Workers · ClickUp',
    muted: true,
  },
]

export const steps = [
  { title: 'Map', text: 'A call to list what eats your time. We sketch the system on one page.' },
  { title: 'Build', text: 'Short sprints. You see working pieces each week, not a slide deck.' },
  { title: 'Hand off', text: 'Docs in plain English, logins in your name, a walkthrough on video.' },
  { title: 'Run', text: 'Optional monthly care: updates, monitoring and small changes.' },
]

export const rules = [
  { title: 'You own it', text: 'Accounts, servers and code sit in your name from day one.' },
  { title: 'Plain English', text: 'Every system ships with docs a non-developer can follow.' },
  { title: 'Tested in-house', text: 'Nothing reaches you that has not run on our own brands.' },
  { title: 'Small on purpose', text: 'A few clients at a time, so each one gets real attention.' },
]

export type Tag = 'AI' | 'Web' | 'Infra' | 'Tools'

export type Project = {
  name: string
  tags: Tag[]
  blurb: string
  stack: string
  img: string
  bg: string
  fit: 'cover' | 'contain'
  pos?: string
  pad?: string
}

export const projects: Project[] = [
  { name: 'TodaySmith', tags: ['Web'], blurb: 'AI tools and guides for small business owners, with a newsletter and YouTube channel.', stack: 'Ghost · Self-hosted · Newsletter', img: 'img/todaysmith.webp', bg: '#050A10', fit: 'cover', pos: 'center 48%' },
  { name: 'Family Roots Films', tags: ['Web', 'Tools'], blurb: 'Legacy documentary studio in St. Louis. Site plus four-tier booking flow.', stack: 'WordPress · Cal.com', img: 'img/family-roots-films.webp', bg: '#FFFFFF', fit: 'contain', pad: '18px' },
  { name: 'Bloodline Films', tags: ['Web'], blurb: 'Genealogy and DNA brand running on a custom photo and video theme.', stack: 'WordPress · Custom theme', img: 'img/bloodline-films.webp', bg: '#1E1715', fit: 'cover', pos: 'center 55%' },
  { name: 'Family Recipe Bot', tags: ['AI', 'Web'], blurb: 'Recipes, weekly menus and grocery lists, with Claude connected to the site.', stack: 'WordPress · AI Engine · MCP', img: 'img/family-recipe-bot.webp', bg: '#FDFBF8', fit: 'contain', pad: '12px' },
  // TODO: replace the bracketed placeholders with real descriptions.
  { name: 'Spatialinks', tags: ['Web'], blurb: 'Digital location content site. [ADD ONE-LINE DESCRIPTION]', stack: 'WordPress', img: 'img/spatialinks.webp', bg: '#1A1C1E', fit: 'cover' },
  { name: 'Jollyhops', tags: ['Web'], blurb: 'A cheerful hops brand led by its party-hat mascot. [CONFIRM ONE-LINE DESCRIPTION]', stack: '[STACK]', img: 'img/jolly-hops.webp', bg: '#FFFFFF', fit: 'contain', pad: '10px' },
  { name: 'Agentic Inbox', tags: ['Infra', 'Tools'], blurb: 'One inbox for six domains. Catch-all routing with AI triage.', stack: 'Cloudflare Workers · R2', img: 'img/agentic-inbox.webp', bg: '#070B14', fit: 'cover' },
  { name: 'Nova Agent', tags: ['AI'], blurb: 'Desktop knowledge agent tied to ClickUp, Wiki.js, Gitea and Google Workspace.', stack: 'Hermes · MCP', img: 'img/nova-agent.webp', bg: '#070B14', fit: 'cover' },
  { name: 'S13IT8 Command Center', tags: ['Tools'], blurb: 'Private dashboard for every brand, task and server in one view.', stack: 'React · Supabase', img: 'img/command-center.webp', bg: '#070B14', fit: 'cover' },
  { name: 'Private VPS Stack', tags: ['Infra'], blurb: 'n8n, Supabase, Twenty CRM, Wiki.js, Gitea and Cal.com on one server.', stack: 'Coolify · WireGuard', img: 'img/vps-stack.webp', bg: '#070B14', fit: 'cover' },
]

export const featured = ['TodaySmith', 'Family Roots Films', 'Bloodline Films']
