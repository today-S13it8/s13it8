import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PageHero } from '@/components/blocks'

export default function NotFound() {
  return (
    <PageHero eyebrow="404" title="This page took a wrong turn.">
      <div>
        <Button asChild size="lg">
          <Link to="/">
            Back to home <ArrowRight />
          </Link>
        </Button>
      </div>
    </PageHero>
  )
}
