import { FocusEventHandler } from 'react'

export interface CheckboxProps {
  name: string
  type: string
  onChange: FocusEventHandler<HTMLInputElement>
  checked: boolean
  description: string
  error: string
}

export type ErrorMessageProps = {
  error: string
}

export type FieldNameProps = {
  name: string
}

export type InputFieldProps = {
  fieldName: string
  type: string
  name: string
  placeholder: string
  value: string
  onChange: FocusEventHandler<HTMLInputElement>
  onBlur: FocusEventHandler<HTMLInputElement>
  dirty: boolean
  error: string
}

export type MainInputProp = {
  props: InputFieldProps
}

export type Post = Partial<{
  id: number
  image: string
  text: string
  date: string
  lesson_num: number
  title: string
  author: number
}>

export type Posts = Array<Post>

export type idProp = {
  id: number
}

export type AccountProps = {
  name: string
  lastName: string
  email: string
  userName: string
}
