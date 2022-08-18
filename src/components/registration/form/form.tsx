import React, { useState } from "react"
import { ButtonStyled } from "../button.styled"
import { CheckboxField } from "../checkboxField/checkboxField"
import { InputField } from "../inputField/inputField"
import { InputFieldProps } from "../../../types/types"
import { TitleStyled } from "../title.styled"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { getUserInfoAction } from "../../../redux/actions"

export const Form = () => {

  const [fullName, setFullName] = useState("")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confPassword, setConfPassword] = useState("")
  const [checkbox, setCheckbox] = useState(true)

  const [fullNameError, setFullNameError] = useState("Full name is required")
  const [userNameError, setUserNameError] = useState("Username is required")
  const [emailError, setEmailError] = useState("Email is required")
  const [passwordError, setPasswordError] = useState("Password is required")
  const [confPasswordError, setConfPasswordError] = useState("Confirm Password is required ")
  const [checkboxError, setCheckboxError] = useState("")
  
  const [fullNameDirty, setFullNameDirty] = useState(false)
  const [userNameDirty, setUserNameDirty] = useState(false)
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [confPasswordDirty, setConfPasswordDirty] = useState(false)

  const mailRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const userNameRegular = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/

  const navigate = useNavigate()

  const dispatch = useDispatch()

    const handleChangeFullName = (event: any) => {
    const value: string = event.target.value

    if (!value.includes(' ')) {
      setFullNameError("Full name can't consist of a single word")
    }
    if (value.length < 6) {
      setFullNameError("You are entered less than 6 characters")
    }
    if (value.length > 25) {
      setFullNameError("You are entered more than 25 characters")
    }
    if (value.length >= 6 && value.length <= 25 && value.includes(' ')) {
      setFullNameError("")
    }
    setFullName(value)
  }

  const handleChangeUserName = (event: any) => {
    const value: string = event.target.value

    if (value.match(userNameRegular)) {
      setUserNameError("")
    } else {
      setUserNameError("Username is not valid")
    }
    setUserName(value)
  }

  const handleChangeEmail = (event: any) => {
    const value: string = event.target.value

    if (value.match(mailRegular)) {
      setEmailError("")
    } else {
      setEmailError("Email is not valid")
    }
    setEmail(value)
  }

  const handleChangePassword = (event: any) => {
    const value: string = event.target.value

    if (!value.match(/[A-Z]/) || !value.match(/[a-z]/)) {
      setPasswordError("Password must contain at least one uppercase letter and one lowercase letter")
    }
    if (value.length < 8) {
      setPasswordError("Password must contain at least 8 characters")
    }
    if (value.length >= 8 && value.match(/[A-Z]/) && value.match(/[a-z]/)) {
      setPasswordError("")
    }
    setPassword(value)
  }

  const handleChangeConfPassword = (event: any) => {
    const value: string = event.target.value

    if (value !== password) {
      setConfPasswordError("Passwords must be match")
    } else {
      setConfPasswordError("")
    }
    setConfPassword(value)
  }

  const handleChangeCheckbox = (event: any) => {
    const value: boolean = event.target.checked

    if (!value) {
      setCheckboxError("Accept Terms is required")
    } else {
      setCheckboxError("")
    }
    setCheckbox(value)
  }

  const handleBlur = (event: any) => {
    switch (event.target.name) {
      case "fullName":
        setFullNameDirty(true)
        break
      case "userName":
        setUserNameDirty(true)
        break
      case "email":
        setEmailDirty(true)
        break
      case "password":
        setPasswordDirty(true)
        break
      case "confPassword":
        setConfPasswordDirty(true)
        break
    }
  }

  const handleReset = () => {
    setFullName('')
    setUserName('')
    setEmail('')
    setPassword('')
    setConfPassword('')
    
    setFullNameDirty(false)
    setUserNameDirty(false)
    setEmailDirty(false)
    setPasswordDirty(false)
    setConfPasswordDirty(false)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()

    setFullNameDirty(true)
    setUserNameDirty(true)
    setEmailDirty(true)
    setPasswordDirty(true)
    setConfPasswordDirty(true)
    
    if (!fullNameError && !userNameError && !emailError && !passwordError && !confPasswordError && !checkboxError) {
      dispatch(getUserInfoAction({fullName: fullName, userName: userName, email: email}))
      alert("Registration completed successfully")
      handleReset()
      navigate('/posts')
    }   
  }

  const inputProps: Array<InputFieldProps> = [
    {
      fieldName: "Full Name",
      type: "text",
      name: "fullName",
      placeholder: "Enter full name...",
      value: fullName,
      "onChange": handleChangeFullName,
      "onBlur": handleBlur,
      dirty: fullNameDirty,
      error: fullNameError
    },
    {
      fieldName: "Username",
      type: "text",
      name: "userName",
      placeholder: "enter username...",
      value: userName,
      "onChange": handleChangeUserName,
      "onBlur": handleBlur,
      dirty: userNameDirty,
      error: userNameError
    },
    {
      fieldName: "Email",
      type: "email",
      name: "email",
      placeholder: "enter email...",
      value: email,
      "onChange": handleChangeEmail,
      "onBlur": handleBlur,
      dirty: emailDirty,
      error: emailError
    },
    {
      fieldName: "Password",
      type: "password",
      name: "password",
      placeholder: "enter password...",
      value: password,
      "onChange": handleChangePassword,
      "onBlur": handleBlur,
      dirty: passwordDirty,
      error: passwordError
    },
    {
      fieldName: "Confirm Password",
      type: "password",
      name: "confPassword",
      placeholder: "enter password...",
      value: confPassword,
      "onChange": handleChangeConfPassword,
      "onBlur": handleBlur,
      dirty: confPasswordDirty,
      error: confPasswordError
    }
  ]

  return (
    <div className="wrapper-form">   
      <div className="content-form">
        <TitleStyled>Registration form</TitleStyled>
        <form>
          {inputProps.map((obj, index) => <InputField props={obj} key={index} />)}
          <CheckboxField  
            name="checkbox"
            type="checkbox"
            onChange={handleChangeCheckbox}
            checked={checkbox}
            description="I have read and agree to the Terms"
            error={checkboxError} />
          
          <div className="buttons-block">     
            <ButtonStyled type="submit" onClick={handleSubmit}>Register</ButtonStyled>
            <ButtonStyled type="reset" onClick={handleReset}>Reset</ButtonStyled>
          </div>
        </form>
      </div>
    </div>
    
  )
}
