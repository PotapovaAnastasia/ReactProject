import React from "react"
import { CheckboxStyled } from "./checkbox.styled"
import { ErrorMessage } from "../errorMessage/errorMessage"
import { CheckboxProps } from "../../../types/types"

export const CheckboxField = (props: CheckboxProps) => {
  return (
    <label>
      <br />
      <CheckboxStyled
        name={props.name}
        type={props.type}
        onChange={props.onChange}
        checked={props.checked}
      />
      <span className="checkbox-text">
        {props.description}
      </span>
      {props.error ? (
        <ErrorMessage error={props.error} />
      ) : null}
    </label>
  )
}
