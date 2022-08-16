import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getPostData } from "../../../helpers/funcGetData"
import { Post } from "../../../types/types"
import { ButtonBack } from "../../buttonBack/buttonBack"
import { ButtonStyled } from "../../registration/button.styled"
import { InputStyled } from "../../registration/inputField/input.styled"

export const EditPost = () => {
  const { id } = useParams()
  const [post, setPost] = useState<Post>({})
  const navigate = useNavigate()

  useEffect(() => {
    getPostData(Number(id), setPost)
  }, [])

  const saveChanges = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify(post),
    }).then((response) => alert("Edited"))
      .then((data) => navigate('/posts'))
  }
  
  const handleEdit = () => {
    saveChanges()
  }

  return (
    <div className="wrapper">
      <ButtonBack />
      <h4>Edit post</h4>
      <div className="edit-inputs">
        <label>
          <span className="edit-name">Date:</span> 
          <InputStyled onChange={(event: any) => setPost({...post, date: event.target.value})} value={post.date} />
        </label>
        <label>
          <span className="edit-name">Title:</span>  
          <InputStyled onChange={(event: any) => setPost({...post, title: event.target.value})} value={post.title} />
        </label>
        <label>
          <span className="edit-name">Text:</span>   
          <InputStyled onChange={(event: any) => setPost({...post, text: event.target.value})} value={post.text} />
        </label>
        <label>
          <span className="edit-name">Image file:</span>
          <input type="file" name="myImage" accept="image/png, image/gif, image/jpeg" />
        </label>
        <ButtonStyled onClick={handleEdit}>Edit</ButtonStyled>
      </div>      
    </div>
  )
}
