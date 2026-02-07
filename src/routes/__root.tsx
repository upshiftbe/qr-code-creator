import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackDevtools } from '@tanstack/react-devtools'

import Header from '../components/Header'
import Footer from '../components/Footer'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'QR Code Creator',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
        />
        <Scripts />
      </body>
    </html>
  )
}
