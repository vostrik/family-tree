'use client'
import { useState, useEffect } from 'react'
import { ProgressSpinner } from 'primereact/progressspinner'

import FamilyTreeBalkan from '@balkangraph/familytree.js'

import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';                                   // css utility

import './index.css'

import { IPersonDTO } from './types'

import { supabase } from '../../data'

export const FamilyTree = () => {
  const [loading, setLoading] = useState(true)

  const fetchPersons = async () => {
    const { data }: { data: IPersonDTO[] | null } = await supabase.from('persons').select()
    
    setLoading(false)
    var family = new FamilyTreeBalkan(document.getElementById("tree")!, {
      miniMap: true,
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
    });

    const familyView = data?.map(x => ({
      id: x.id,
      name: `${x.firstname} ${x.surname} ${x.maidenname ? `(${x.maidenname})` : ''}`,
      gender: x.gender,
      born: (new Date(x.birthdate)).toLocaleDateString(),
      ...(x.motherId && { mid: x.motherId }),
      ...(x.fatherId && { fid: x.fatherId }),
      ...(x.partners && { pids: x.partners })
    })) || []
    
    family.load(familyView)
  }

  useEffect(() => {
    fetchPersons()
  }, [])

  if (loading) {
    return (
      <div className="grid">
        <div className="col-6 col-offset-3">
          <ProgressSpinner style={{ width: '100px', height: '100px' }} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
        </div>
      </div>
    )
  }

  return (
    <div></div>
  )
}