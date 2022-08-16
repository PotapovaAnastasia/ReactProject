import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle<any>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.fontColor};
    font-family: ${({ theme }) => theme.font};
  }
  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    transition: all 0.50s linear;   
  }

  .wrapper {
    width: 100%;
    max-width: 1200px;
    min-height: 95vh;
    padding: ${({ theme }) => theme.paddingWrapper};
    margin: 30px auto 60px auto;
    border: 0.15rem solid ${({ theme }) => theme.wrapperBorderColor};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.wrapperBoxShadow};
  }

  .imgWrapper {
    height: 170px;
    overflow: hidden;
  }

  .postMain {
    display: flex;
    justify-content: space-between;
  }

  .postMain__data {
    flex: 0 0 55%;
  }

  span {
    display: inline-block;
    margin: 0 10px;
    font-size: 18px;
  }

  .menu {    
    margin-left: 18px;
  }

  button {
    border: none;
    background: transparent;
    font-size: 18px;
    cursor: pointer;
    color: ${({ theme }) => theme.buttonColor};
  }

  .post0 {grid-area: a;}
  .post1 { grid-area: b;}
  .post2 { grid-area: c;}
  .post3 { grid-area: d;}
  .post4 { grid-area: e; }
  .post5 { grid-area: f; }
  .post6 { grid-area: g; }
  .post7 { grid-area: h; }
  .post8 { grid-area: i; }
  .post9 { grid-area: j; }
  .post10 { grid-area: k; }


  // ----------------------------------

  .wrapper-form {
    width: 100%;
    display: flex;
    justify-content: center;

    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.fontColorForm};;

    transition: all 0.50s linear;
  }
  
  .content-form {
    width: 100%;
    max-width: 600px;

    margin: 25px 0 25px 0;
    padding: 40px 60px;

    display: flex;
    flex-direction: column;
    justify-content: flex-between;

    background-color: ${({ theme }) => theme.background};
    border-radius: ${({ theme }) => theme.formBorderRadius};
    box-shadow: ${({ theme }) => theme.formBoxShadow};
    border: 0.15rem solid ${({ theme }) => theme.wrapperBorderColor};
  }

  .checkbox-text {
    font-size: ${({ theme }) => theme.checkboxFontSize};
    font-style: italic;
  }

  // ----------------------

  .header-container {   
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 1180px;
  }

  .logo {
    font-size: 20px;
    font-weight: 600;
    text-shadow: 0 0 1px ${({ theme }) => theme.fontColor};
    color: ${({ theme }) => theme.fontColor};
  }

  .header-links {
    display: flex;
    justify-content: end;
    max-width: 1200px;
    margin-right: 70px;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.fontColor};
  }

  .header-link {
    display: inline-block;
    margin-left: 60px;  
    font-weight: 600;
    font-size: 15px;
    position: relative;
  }

  .header-link:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    display: none;

    background: ${({ theme }) => theme.fontColor};

    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
  }

  .header-link:hover:after {
    display: block;
  }


    // ------------------------------------------

  .about-wrapper {
    padding: 40px;
  }

  .about-title {
    margin-left: 20px;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
  } 

  .about-image {
    max-width: 50%;
    height: auto;
    float: right;
    display: inline-block;
    margin: 0 0 15px 25px;
  }

  .about-link {
    display: inline-block;
    padding: 10px 50px 10px 50px;
    margin-top: 15px;
    margin-left: 15px;
    border: 2px solid ${({ theme }) => theme.wrapperBorderColor};
    border-radius: 8px;
    cursor: pointer;
    background: ${({ theme }) => theme.formBackground};
  }

  // ----------------------

  .home-wrapper {
    padding: 40px 0 0 60px;
  }

  .home-image {
    max-width: 100px;
    height: auto;
    margin-bottom: 20px;
  }

  h4 {
    text-align: center;
    font-size: 20px;
    margin-bottom: 40px;
  }

  // ----------------------

  .notfound-wrapper {
    padding-top: 100px;
  }

  // ----------------------

  .active {
    color: #9999ff;
  }

  // ----------------------

  .single-image {
    margin-bottom: 70px;
    max-height: 300px;
  }

  .single-delete {
    font-size: 14px;
    padding: 10px 20px;
  }

  // ----------------------

  .edit-inputs {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 300px;
    align-items: center;
  }

  .edit-name {
    display: inline-block;
    margin-right: 20px;
  }
`
