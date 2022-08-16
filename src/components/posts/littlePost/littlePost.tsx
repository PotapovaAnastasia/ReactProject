import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPostData } from '../../../helpers/funcGetData'
import { idProp, Post } from '../../../types/types'
import { ImgLitStyled } from '../common.styled/images/imgLit.styled'
import { PostStyled } from '../common.styled/post.styled'
import { TitleMidStyled } from '../common.styled/titles/titleMid.styled'
import { PostDate } from '../postDate/postDate'
import { PostFooter } from '../postFooter/postFooter'

export const LittlePost = ({ id }: idProp) => {
  const [postData, setPostData] = useState<Post>({})
  
  useEffect(() => {
    getPostData(id, setPostData)
  }, [])

    return (
      <PostStyled>
        <main className="postMain">
          <div className="postMain__data">
            <PostDate date={postData.date} />
            <Link to={`/posts/${id}`}><TitleMidStyled>{postData.title}</TitleMidStyled></Link>
          </div>
          <div>
            <Link to={`/posts/${id}`}><ImgLitStyled src={postData.image} alt="foto"></ImgLitStyled></Link>
          </div>
        </main>
        <PostFooter />
      </PostStyled>
    )  
}
