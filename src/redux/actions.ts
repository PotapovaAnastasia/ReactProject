import { USERINFO } from "./types"

export const getUserInfoAction = (payload: any) => {
  return {
    type: USERINFO,
    payload: payload
  }
}
