import { Link } from 'react-router-dom'
import { LegalPage } from '@/components/legal-page'
import { CONTACT_EMAIL } from '@/data/site'

const mail = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>

export default function Terms() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      updated="November 24, 2026"
      intro={
        <p>
          These terms cover your use of s13it8.com, run by s13it8, LLC. By using the site, you agree to them. Paid
          projects are covered by a separate written agreement, and that agreement wins if the two ever differ.
        </p>
      }
      sections={[
        {
          title: 'Using this site',
          body: (
            <p>
              You may browse the site and contact us for your own business purposes. Please do not try to break,
              overload or gain unauthorized access to the site or the systems behind it, and do not copy it to pass
              off as your own.
            </p>
          ),
        },
        {
          title: 'Information on the site',
          body: (
            <p>
              We describe our services and past work as accurately as we can. Descriptions are general information,
              not a quote or a promise of results. The scope, price and timeline of any project are set in its own
              agreement.
            </p>
          ),
        },
        {
          title: 'Our work and brands',
          body: (
            <p>
              The site's text, design, logos and images belong to s13it8, LLC or to the brands shown with permission.
              Ownership of anything we build for you is set in your project agreement. Our standard practice is that
              accounts, servers and code end up in your name.
            </p>
          ),
        },
        {
          title: 'Third-party services',
          body: (
            <p>
              The site links to outside services, such as our Cal.com booking page and the tools named in our
              portfolio. Those services have their own terms and privacy policies, and we are not responsible for
              them.
            </p>
          ),
        },
        {
          title: 'No warranty',
          body: (
            <p>
              The site is provided "as is". We work to keep it accurate and available, but we do not guarantee that
              it will be error-free or always online.
            </p>
          ),
        },
        {
          title: 'Limitation of liability',
          body: (
            <p>
              To the extent the law allows, s13it8, LLC is not liable for indirect or consequential losses that come
              from using this site. Nothing here limits liability that cannot be limited by law.
            </p>
          ),
        },
        {
          title: 'Governing law',
          body: <p>These terms are governed by the laws of the State of Missouri, United States.</p>,
        },
        {
          title: 'Changes and contact',
          body: (
            <p>
              We may update these terms and will post the new version here with a new date. Questions go to {mail}. See
              also our <Link to="/privacy">Privacy Policy</Link>.
            </p>
          ),
        },
      ]}
    />
  )
}
