import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { getPostData } from "../../../helpers/funcGetData";
import { Post } from "../../../types/types";
import { ButtonBack } from "../../buttonBack/buttonBack";
import { ButtonStyled } from "../../registration/button.styled";
import { ImgBigStyled } from "../common.styled/images/imgBig.styled"
import { PostStyled } from "../common.styled/post.styled"
import { PostTextStyled } from "../common.styled/postText.styled"
import { TitleBigStyled } from "../common.styled/titles/titleBig.styled"
import { PostDate } from "../postDate/postDate"
import { PostFooter } from "../postFooter/postFooter"

export const SinglePost = () => {
  const { id } = useParams()
  const [post, setPost] = useState<Post>({})
  const navigate = useNavigate()
  
  useEffect(() => {
    getPostData(Number(id), setPost)
  }, [])

  const deletePost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then((response) => alert("DELETED"))
      .then((data) => navigate('/posts'))
  }
  
  return (
    <div>
      <div className="wrapper">
        <ButtonBack />
        <PostStyled>
          <main className="postMain">
            <div className="postMain__data">
              <PostDate date={post.date} />
              <TitleBigStyled>{post.title}</TitleBigStyled>
              <PostTextStyled>{post.text}</PostTextStyled>
            </div>
            <div>
             <ImgBigStyled className="single-image" src={post.image} alt="foto"></ImgBigStyled>
            </div>
          </main>
          <PostFooter />
        </PostStyled>
      
        <Link to={`/posts/${post.id}/edit`}>
          <ButtonStyled>Edit post</ButtonStyled>
        </Link>
        <ButtonStyled  onClick={deletePost}>Delete</ButtonStyled>   
      </div>
    </div>
  )
}
