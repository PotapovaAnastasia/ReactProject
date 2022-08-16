import { ErrorMessage } from "../errorMessage/errorMessage"
import { FieldName } from "../fieldName/fieldName"
import { InputStyled } from "./input.styled"
import { MainInputProp } from "../../../types/types"

export const InputField = ({props} : MainInputProp) => {
  return (
    <label>
      <FieldName name={props.fieldName} />  
      <InputStyled
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.dirty && props.error ? (
        <ErrorMessage error={props.error} />
      ) : null}     
    </label>
  )
}