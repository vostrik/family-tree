'use client'

import React from 'react'
import { MantineProvider as MantinProviderLib } from '@mantine/core'

interface IMantinProvider {
  children: React.ReactNode
}

export function MantineProvider ({ children }: IMantinProvider) {
  return (
    <MantinProviderLib withGlobalStyles withNormalizeCSS>
      {children}
    </MantinProviderLib>
  )
}