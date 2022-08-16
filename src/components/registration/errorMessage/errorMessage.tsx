import React from "react"
import { ErrorMessageProps } from "../../../types/types"
import { ErrorMessageStyled } from "./errorMessage.styled"

export const ErrorMessage = (props: ErrorMessageProps) => {
  return <ErrorMessageStyled>{props.error}</ErrorMessageStyled>
}