import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MotionConfig } from 'motion/react'
import { Layout } from '@/components/layout'
import Home from '@/pages/home'
import Services from '@/pages/services'
import Portfolio from '@/pages/portfolio'
import About from '@/pages/about'
import Contact from '@/pages/contact'
import Privacy from '@/pages/privacy'
import Terms from '@/pages/terms'
import NotFound from '@/pages/not-found'
import './index.css'

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/services', element: <Services /> },
        { path: '/portfolio', element: <Portfolio /> },
        { path: '/about', element: <About /> },
        { path: '/contact', element: <Contact /> },
        { path: '/privacy', element: <Privacy /> },
        { path: '/terms', element: <Terms /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL.replace(/\/$/, '') || '/' },
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <RouterProvider router={router} />
    </MotionConfig>
  </StrictMode>,
)
