import { Link } from 'react-router-dom'
import { LegalPage } from '@/components/legal-page'
import { CONTACT_EMAIL } from '@/data/site'

const mail = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>

export default function Privacy() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="November 24, 2026"
      intro={
        <p>
          s13it8, LLC ("s13it8", "we", "us") runs s13it8.com. This policy explains what information we collect, how we
          use it, and the choices you have. We keep it short because we collect very little.
        </p>
      }
      sections={[
        {
          title: 'Who we are',
          body: (
            <p>
              s13it8, LLC is a small studio based in St. Louis, Missouri. We build AI agents, self-hosted
              infrastructure, websites and small business tools. Questions about this policy go to {mail}.
            </p>
          ),
        },
        {
          title: 'What we collect',
          body: (
            <ul>
              <li>
                <strong>Messages you send us.</strong> The contact form on this site does not store anything. It opens
                your own email app with your message filled in, and we receive it only if you press send. We keep the
                email so we can reply and do the work you ask for.
              </li>
              <li>
                <strong>Bookings.</strong> If you book a call, you do so through our Cal.com scheduling page. Cal.com
                collects your name, email and the time you pick so the meeting can happen.
              </li>
              <li>
                <strong>Basic server logs.</strong> Like most web servers, ours records IP addresses, browser type and
                the pages requested. We use these logs only to keep the site running and secure.
              </li>
            </ul>
          ),
        },
        {
          title: 'Cookies and tracking',
          body: (
            <p>
              This site does not set cookies and does not run advertising or analytics trackers. Fonts load from
              Google Fonts, so Google receives your IP address when the page loads, as described in Google's own
              privacy policy.
            </p>
          ),
        },
        {
          title: 'Social media integrations',
          body: (
            <>
              <p>
                We use tools that connect to social platforms, including LinkedIn, to publish and schedule posts for
                our own brands and pages. When you or we sign in to one of these platforms through our tools:
              </p>
              <ul>
                <li>We request only the permissions needed to publish posts and read basic profile or page details.</li>
                <li>We use that data only to publish and manage content you or we have approved.</li>
                <li>We do not sell it, share it with advertisers, or use it to build profiles of people.</li>
                <li>Access tokens are stored on our own private server and are removed when the connection is ended.</li>
              </ul>
              <p>
                You can revoke our access at any time in that platform's settings. For LinkedIn, go to Settings, Data
                privacy, then Permitted services.
              </p>
            </>
          ),
        },
        {
          title: 'How we use information',
          body: (
            <ul>
              <li>To reply to you and deliver the services you hire us for.</li>
              <li>To schedule and run meetings.</li>
              <li>To keep our systems secure and working.</li>
              <li>To meet legal, tax and accounting duties.</li>
            </ul>
          ),
        },
        {
          title: 'Sharing',
          body: (
            <p>
              We do not sell or rent personal information. We share it only with the service providers that help us
              run the business, such as hosting, email and scheduling, and only as far as they need it. We may also
              disclose information when the law requires it.
            </p>
          ),
        },
        {
          title: 'Storage and security',
          body: (
            <p>
              Most of our systems run on servers we manage ourselves, in the United States. We limit access to the
              people who need it and keep software up to date. No system is perfectly secure, but we take reasonable
              steps to protect what you share with us.
            </p>
          ),
        },
        {
          title: 'How long we keep it',
          body: (
            <p>
              We keep messages and project records for as long as we work together and for a reasonable time after,
              mainly for support, tax and legal records. Server logs are cleared on a rolling basis.
            </p>
          ),
        },
        {
          title: 'Your choices',
          body: (
            <p>
              You can ask us what information we hold about you, ask us to correct it, or ask us to delete it. Email{' '}
              {mail} and we will reply within 30 days.
            </p>
          ),
        },
        {
          title: 'Children',
          body: <p>This site and our services are for businesses and adults. We do not knowingly collect information from children under 13.</p>,
        },
        {
          title: 'Changes',
          body: (
            <p>
              If we change this policy, we will post the new version here and update the date at the top. See also our{' '}
              <Link to="/terms">Terms of Service</Link>.
            </p>
          ),
        },
      ]}
    />
  )
}
