export const getPostData = async (id: number, storage: any) => {
    await fetch(`https://newsapi.org/v2/everything?q=Apple&from=2022-08-02&sortBy=popularity&apiKey=5e4c05a6c924473084f6aa300c4ac44b`)
      .then((data) => data.json())
      .then((jsonData) => storage(jsonData.articles[id]))
      .then((error) => console.log(error))
  }
  