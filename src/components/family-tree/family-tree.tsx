'use client'
import { useRef, useEffect } from 'react'
import FamilyTreeBalkan from '@balkangraph/familytree.js'

import { IPersonView } from './types'

export const FamilyTree = ({ persons }: IPersonView) => {
  const treeDOMNode = useRef(null)

  useEffect(() => {
    const family = new FamilyTreeBalkan(treeDOMNode.current!, {
      enableSearch: false,
      state: {
        readFromUrlParams: true,
        writeToUrlParams: true
      },
      roots: [7],
      template: "hugo",
      mouseScrool: FamilyTreeBalkan.none,
      nodeBinding: {
        field_0: "name",
        field_1: 'born'
      }
    })
    family.load(persons)
  })

  return (
    <div ref={treeDOMNode} style={{ height: '100vh' }}></div>
  )
}