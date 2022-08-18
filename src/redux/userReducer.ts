import { USERINFO } from "./types"

const initialState = {
  user: {
    name: 'unknown',
    lastName: 'unknown',
    userName: 'unknown',
    email: 'unknown',
  },
}

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USERINFO:
      return {
        ...state,
        user: {
          name: action.payload.fullName.split(' ')[0],
          lastName: action.payload.fullName.split(' ')[1],
          userName: action.payload.userName,
          email: action.payload.email,
        },
      }
    default:
      return state
  }
}
