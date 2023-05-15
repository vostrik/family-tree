import { MantineProvider } from '../../lib/mantine'
import { useTranslation } from '../app/i18n'
import { DoubleHeader } from '../components/header'

export const metadata = {
  title: 'Family Tree',
  description: 'Family knowledge base',
}

interface IRootLayout {
  children: React.ReactNode
}

export default async function RootLayout ({ children }: IRootLayout) {
  const { t } = await useTranslation('ru')

  const logoLink = { label: t`navigation.logo`, link: '/' }
  
  const mainLinks = [
    { label: t`navigation.hierarchy`, link: '/tree' },
    { label: t`navigation.map`, link: '/map' }
  ]
  
  return (
    <MantineProvider>
      <html lang="en">
        <body>
          <DoubleHeader
            logoLink={logoLink}
            mainLinks={mainLinks}
          />
          {children}
        </body>
      </html>
    </MantineProvider>
  )
}
