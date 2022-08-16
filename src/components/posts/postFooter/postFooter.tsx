import React, { useRef, useState } from 'react'
import { PostFooterStyled } from './postFooter.styled'
import { VscBookmark } from 'react-icons/vsc'
import { ImBookmark } from 'react-icons/im'
import { BsThreeDots } from 'react-icons/bs'
import { AiTwotoneLike, AiTwotoneDislike, AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'

export const PostFooter = () => {
  const [like, setLike] = useState(0)
  const [dislike, setDislike] = useState(0)

  const [buttonLike, setButtonLike] = useState(<AiOutlineLike />)
  const [buttonDislike, setButtonDislike] = useState(<AiOutlineDislike />)
  const [buttonSave, setButtonSave] = useState(<VscBookmark />)
  
  const likeStart = useRef(like)
  const dislikeStart = useRef(dislike)

  const handleClickLike = () => {
    like === likeStart.current ? setButtonLike(<AiTwotoneLike />) : setButtonLike(<AiOutlineLike />)
    like === likeStart.current ? setLike((prev) => prev + 1) : setLike((prev) => prev - 1)
  }

  const handleClickDislike = () => {
    dislike === dislikeStart.current ? setButtonDislike(<AiTwotoneDislike />) : setButtonDislike(<AiOutlineDislike />)
    dislike === dislikeStart.current ? setDislike((prev) => prev + 1) : setDislike((prev) => prev - 1)
  }

  const handleClickSave = () => {
    buttonSave.type.name === 'VscBookmark' ? setButtonSave(<ImBookmark />) : setButtonSave(<VscBookmark />)
  }

  return (
    <PostFooterStyled>
      <div>
        <button onClick={handleClickLike}>{buttonLike}</button>
        <span>{like}</span>
        <button onClick={handleClickDislike}>{buttonDislike}</button>
        <span>{dislike}</span>
      </div>
      <div>	
        <button onClick={handleClickSave}>{buttonSave}</button>
        <button className='menu'><BsThreeDots /></button>
      </div>     
    </PostFooterStyled>
  )
}
