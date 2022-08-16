import React from "react"
import { FieldNameProps } from "../../../types/types"
import { FieldNameStyled } from "./fieldNameStyled"

export const FieldName = (props: FieldNameProps) => {
  return (
    <FieldNameStyled>{props.name}</FieldNameStyled>
  )
}