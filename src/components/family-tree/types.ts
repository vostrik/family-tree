type PersonGender = 'male' | 'female'

export interface IPersonView {
  persons: {
    id: number,
    name: string,
    gender: PersonGender,
    born: string,
    mid?: number,
    fid?: number,
    partners?: number[]
  }[]
}

export interface IPersonDTO {
  data: null | {
    id: number,
    surname: string,
    firstname: string,
    patronymic: string,
    maidenname: string,
    motherId: number,
    fatherId: number,
    partners: number[],
    gender: PersonGender
    biography: string,
    birthdate: string,
    deathdate: string,
    avatar: string
  }[],
  error?: unknown
}