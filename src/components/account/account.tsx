import { AccountProps } from "../../types/types"

export const Account = (props: AccountProps) => {
  return (
    <div className="wrapper home-wrapper">
      <h4>Your profile</h4>
      <img className="home-image" src="/user.png" alt=""></img>
      <p><b>Name:</b> {props.name}</p>
      <p><b>Last name:</b> {props.lastName}</p>
      <p><b>Username:</b> {props.userName}</p>
      <p><b>Email:</b> {props.email}</p>
    </div>
  )
}
