import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToggleStyled } from './components/toggle.styled'
import { PostsList } from './components/posts/postsList/postsList'
import { GlobalStyles } from './themes/globalStyles'
import { DarkTheme, LightTheme } from './themes/themes'
import { Form } from './components/registration/form/form'
import { Layout } from './components/layout/layout'
import { AboutUs } from './components/aboutUs/aboutUs'
import { Account } from './components/account/account'
import { NotFoundPage } from './components/notFoundPage/notFoundPage'
import { SinglePost } from './components/posts/singlePost/singlePost'
import { EditPost } from './components/posts/editPost/editPost'

function App() {
  const [theme, setTheme] = useState('light')

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      <GlobalStyles />
      <ToggleStyled type="checkbox" onChange={themeToggler}></ToggleStyled>
      <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Form />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/posts" element={<PostsList />} />
              <Route path="/posts/:id" element={<SinglePost />} />
              <Route path="/posts/:id/edit" element={<EditPost />} />
              <Route path="/account" element={<Account name='Ivan' 
                                                      lastName='Ivanov' 
                                                      email='ivanov@gmail.com' 
                                                      userName='ivan123'/>} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>      
          </Routes>    
      </Router> 
    </ThemeProvider>    
  )
}

export default App
