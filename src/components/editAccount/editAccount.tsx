import { useState } from "react"
import { useSelector } from "react-redux"
import { ButtonBack } from '../buttonBack/buttonBack'
import { ButtonStyled } from '../registration/button.styled'
import { InputStyled } from '../registration/inputField/input.styled'
import { useDispatch } from "react-redux"
import { getUserInfoAction } from "../../redux/actions"
import { useNavigate } from "react-router-dom"

export const EditAccount = () => {
const user = useSelector((state: any) => state.user)
const dispatch = useDispatch()
const navigate = useNavigate()

const [name, setName] = useState(user.name)
const [lastName, setLastName] = useState(user.lastName)
const [userName, setUserName] = useState(user.userName)
const [email, setEmail] = useState(user.email)

const handleEdit = () => {
  dispatch(getUserInfoAction({fullName: name + ' ' + lastName, userName: userName, email: email}))
  alert('Information was changed')
  navigate('/account')
}

  return (
    <div className="wrapper">
      <ButtonBack />
      <h4>Edit information</h4>
      <div className="edit-inputs">
        <label>
          <span className="edit-name">Name:</span> 
          <InputStyled onChange={(event: any) => setName(event.target.value)} value={name} />
        </label>
        <label>
          <span className="edit-name">LastName:</span>  
          <InputStyled onChange={(event: any) => setLastName(event.target.value)} value={lastName} />
        </label>
        <label>
          <span className="edit-name">UserName:</span>  
          <InputStyled onChange={(event: any) => setUserName(event.target.value)} value={userName} />
        </label>
        <label>
          <span className="edit-name">Email:</span>  
          <InputStyled onChange={(event: any) => setEmail(event.target.value)} value={email} />
        </label>
        <ButtonStyled onClick={handleEdit}>Edit</ButtonStyled>
      </div>      
    </div>
  )
}
