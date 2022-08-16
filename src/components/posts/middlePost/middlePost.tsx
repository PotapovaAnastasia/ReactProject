import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPostData } from '../../../helpers/funcGetData'
import { idProp, Post } from '../../../types/types'
import { ImgMidStyled } from '../common.styled/images/imgMid.styled'
import { PostStyled } from '../common.styled/post.styled'
import { TitleMidStyled } from '../common.styled/titles/titleMid.styled'
import { PostDate } from '../postDate/postDate'
import { PostFooter } from '../postFooter/postFooter'

export const MiddlePost = ({ id }: idProp) => {
  const [postData, setPostData] = useState<Post>({})
  
  useEffect(() => {
    getPostData(id, setPostData)
  }, [])

    return (
      <PostStyled>
        <div className="imgWrapper">
          <Link to={`/posts/${id}`}><ImgMidStyled src={postData.image} alt="foto"></ImgMidStyled></Link>
        </div>
        <div>
          <PostDate date={postData.date} />
          <Link to={`/posts/${id}`}><TitleMidStyled>{postData.title}</TitleMidStyled></Link>
        </div>        
        <PostFooter />       
      </PostStyled>
    ) 
}
