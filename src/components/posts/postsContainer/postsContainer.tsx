import React from "react"
import { BigPost } from "../bigPost/bigPost"
import { LittlePost } from "../littlePost/littlePost"
import { MiddlePost } from "../middlePost/middlePost"
import { PostsContainerStyled } from "./postsContainer.styled"

export const PostsContainer = ( {style} : any ) => {
  const idS = [10, 15, 16, 8, 9, 14, 7, 8, 9, 12, 6]
  
  return (
    <PostsContainerStyled style={style}>
      {idS.map((id, index) => {
        return index === 0 ? <div className={`post${index}`}><BigPost id={id} key={index} /></div> :
          index > 0 && index < 5 ? <div className={`post${index}`}><MiddlePost id={id} key={index} /></div> :
          <div className={`post${index}`}><LittlePost id={id} key={index} /></div> 
      })}
    </PostsContainerStyled>
  ) 
}
