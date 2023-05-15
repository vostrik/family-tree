'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { createStyles, Header, Container, Anchor, Group, Burger, rem } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

const HEADER_HEIGHT = rem(55);

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  links: {
    paddingTop: theme.spacing.lg,
    height: HEADER_HEIGHT,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  mainLinks: {
    marginRight: `calc(${theme.spacing.sm} * -1)`,
  },

  mainLink: {
    textTransform: 'uppercase',
    fontSize: rem(13),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    padding: `${rem(7)} ${theme.spacing.sm}`,
    fontWeight: 700,
    borderBottom: `${rem(2)} solid transparent`,
    transition: 'border-color 100ms ease, color 100ms ease',

    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      textDecoration: 'none',
    },
  },

  mainLinkLogo: {
    fontSize: rem(18),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.dark[9]
  },

  secondaryLink: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    fontSize: theme.fontSizes.xs,
    textTransform: 'uppercase',
    transition: 'color 100ms ease',

    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      textDecoration: 'none',
    },
  },

  mainLinkActive: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottomColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 5 : 6]
  }
}))

interface LinkProps {
  label: string
  link: string
}

interface DoubleHeaderProps {
  logoLink: LinkProps
  mainLinks: LinkProps[]
}

export function DoubleHeader ({ logoLink, mainLinks }: DoubleHeaderProps) {
  const pathName = usePathname()
  const [opened, { toggle }] = useDisclosure(false)
  const { classes, cx } = useStyles()

  const mainItems = mainLinks.map((item) => (
    <Link href={item.link} key={item.label} legacyBehavior>
      <Anchor className={cx(classes.mainLink, { [classes.mainLinkActive]: item.link === pathName })}>
        {item.label}
      </Anchor>
    </Link>
  ))

  return (
    <Header height={HEADER_HEIGHT} mb={120}>
      <Container className={classes.inner}>
        <Link href={logoLink.link} legacyBehavior>
          <Anchor className={cx(classes.mainLink, classes.mainLinkLogo)}>
            { logoLink.label }
          </Anchor>
        </Link>
        <div className={classes.links}>
          <Group spacing={0} position="right" className={classes.mainLinks}>
            {mainItems}
          </Group>
        </div>
        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
      </Container>
    </Header>
  )
}