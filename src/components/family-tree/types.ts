export interface IPersonView {
  expanded: boolean,
  data: {
    surname: string,
    firstname: string,
    patronymic: string,
    maidenname: string,
    avatar: string,
  },
  children: IPersonView[]
}

export interface IPersonDTO {
  id: number,
  surname: string,
  firstname: string,
  patronymic: string,
  maidenname: string,
  motherId: number,
  fatherId: number,
  partners: number[],
  gender: 'male' | 'female'
  biography: string,
  birthdate: string,
  deathdate: string,
  avatar: string
}