import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { ButtonStyled } from "../registration/button.styled"

export const Account = () => {
  const user = useSelector((state: any) => state.user)

  return (
    <div className="wrapper home-wrapper">
      <h4>Your profile</h4>
      <img className="home-image" src="/user.png" alt=""></img>
      <p><b>Name:</b> {user.name}</p>
      <p><b>Last name:</b> {user.lastName}</p>
      <p><b>Username:</b> {user.userName}</p>
      <p><b>Email:</b> {user.email}</p>
      <Link to={`/account/edit`}>
        <ButtonStyled>Edit</ButtonStyled>
      </Link>
    </div>
  )
}
