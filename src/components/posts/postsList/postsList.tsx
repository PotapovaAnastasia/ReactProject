import React, { CSSProperties, useEffect, useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader"
import { PostsContainer } from '../postsContainer/postsContainer'

export const overrideLoader: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "LightSteelBlue",
}

export const PostsList = () => {
  let [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000)
  }, [])

  return (
        <div className="wrapper">
          <ClipLoader loading={loading} cssOverride={overrideLoader} size={150} />
          {loading 
            ? <PostsContainer style={{display: "none"}} /> 
            : <PostsContainer /> }     
        </div>       
  )
}
