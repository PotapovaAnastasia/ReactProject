import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPostData } from '../../../helpers/funcGetData'
import { idProp, Post } from '../../../types/types'
import { ImgBigStyled } from '../../posts/common.styled/images/imgBig.styled'
import { PostStyled } from '../../posts/common.styled/post.styled'
import { PostTextStyled } from '../../posts/common.styled/postText.styled'
import { TitleBigStyled } from '../../posts/common.styled/titles/titleBig.styled'
import { PostDate } from '../../posts/postDate/postDate'
import { PostFooter } from '../../posts/postFooter/postFooter'

export const BigPost = ({ id }: idProp) => {
  const [postData, setPostData] = useState<Post>({})
  
  useEffect(() => {
    getPostData(id, setPostData)
  }, [])

    return (
      <PostStyled>
        <main className="postMain">
          <div className="postMain__data">
            <PostDate date={postData.date} />
            <Link to={`/posts/${id}`}><TitleBigStyled>{postData.title}</TitleBigStyled></Link>
            <PostTextStyled>{postData.text}</PostTextStyled>
          </div>
          <div>
            <Link to={`/posts/${id}`}><ImgBigStyled src={postData.image} alt="foto"></ImgBigStyled></Link>
          </div>
        </main>
        <PostFooter />
      </PostStyled>
    )  
}
