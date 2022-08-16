export const getPostData = async (id: number, storage: any) => {
    await fetch(`https://studapi.teachmeskills.by/blog/posts/${id}/`)
      .then((data) => data.json())
      .then((jsonData) => storage(jsonData))
      .then((error) => console.log(error))
  }
  