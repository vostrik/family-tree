import { IPersonDTO } from '../../components/family-tree/types'
import { FamilyTree } from '../../components/family-tree'

import { supabase } from '../../data'

export default async function Tree () {
  const { data }: IPersonDTO = await supabase.from('persons').select()
  const view = data?.map(x => ({
    id: x.id,
    name: `${x.firstname} ${x.surname} ${x.maidenname ? `(${x.maidenname})` : ''}`,
    gender: x.gender,
    born: (new Date(x.birthdate)).toLocaleDateString(),
    ...(x.motherId && { mid: x.motherId }),
    ...(x.fatherId && { fid: x.fatherId }),
    ...(x.partners && { pids: x.partners })
  })) || []

  return (
    <FamilyTree persons={view} />
  )
}
